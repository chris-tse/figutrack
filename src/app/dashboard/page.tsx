import { type Metadata } from 'next'
import { AlertCircle, Clock, Package, Plus, Wallet } from 'lucide-react'
import { MonthlyPaymentsChart } from '@/app/dashboard/_components/monthly-payments-chart'
import { RemainingPaymentsChart } from '@/app/dashboard/_components/remaining-payments-chart'
import { DashboardCard } from '@/app/dashboard/_components/dashboard-card'

export const metadata: Metadata = {
	title: 'FiguTrack - Dashboard',
}

export default function Dashboard() {
	// Example data - would come from either indexddb or drizzle orm later on
	const mockData = {
		overview: {
			totalOrders: 12,
			totalValue: 86580,
			avgOrderValue: 6206,
			uniqueRetailers: 4,
		},
		urgent: {
			nextPayment: {
				figure: 'Hatsune Miku - Spring Ver.',
				amount: 2985,
				dueDate: '2025-02-15',
				daysUntil: 3,
			},
			overdue: [],
			upcomingWeek: [
				{
					figure: 'Rem - Winter Ver.',
					amount: 2540,
					dueDate: '2025-02-18',
				},
			],
		},
		financial: {
			currentMonth: 7450,
			nextThreeMonths: [
				{
					month: 'Feb',
					amount: 14900,
				},
				{
					month: 'Mar',
					amount: 45000,
				},
				{
					month: 'Apr',
					amount: 23500,
				},
			],
			paymentSchedule: [
				{
					date: '2025-01',
					remaining: 83480,
				},
				{
					date: '2025-02',
					remaining: 76312,
				},
				{
					date: '2025-03',
					remaining: 41912,
				},
				{
					date: '2025-04',
					remaining: 21412,
				},
				{
					date: '2025-05',
					remaining: 10912,
				},
			],
		},
		status: {
			unpaid: 3,
			partiallyPaid: 5,
			fullyPaid: 4,
			upcoming: [
				{
					figure: 'Megumin - Explosion Ver.',
					date: '2025-02-20',
					status: 'Shipping Soon',
				},
				{
					figure: 'Rem - Winter Ver.',
					date: '2025-02-25',
					status: 'Production',
				},
				{
					figure: 'Hatsune Miku - Spring Ver.',
					date: '2025-03-15',
					status: 'Pre-order',
				},
			],
		},
	}

	return (
		<div className="container mx-auto p-4">
			<div className="grid grid-cols-12 gap-6">
				{/* Header - Full Width */}
				<div className="col-span-12 mb-6 flex items-center justify-between">
					<h1 className="text-2xl font-bold">Dashboard</h1>
					<button className="flex items-center rounded bg-primary px-4 py-2 text-primary-foreground">
						<Plus className="mr-1 h-4 w-4" />
						Add Pre-order
					</button>
				</div>

				{/* At A Glance - 1/3 Width */}
				<div className="col-span-12 lg:col-span-4">
					<DashboardCard title="At A Glance" icon={Package}>
						<div className="space-y-4">
							<div>
								<div className="text-3xl font-bold">{mockData.overview.totalOrders}</div>
								<div className="text-sm text-gray-500">Active Pre-orders</div>
							</div>
							<div>
								<div className="text-2xl font-bold">¥{mockData.overview.totalValue.toLocaleString()}</div>
								<div className="text-sm text-gray-500">Total Value</div>
							</div>
							<div className="grid grid-cols-2 gap-4 pt-2">
								<div>
									<div className="text-lg font-semibold">{mockData.overview.uniqueRetailers}</div>
									<div className="text-sm text-gray-500">Retailers</div>
								</div>
								<div>
									<div className="text-lg font-semibold">¥{mockData.overview.avgOrderValue.toLocaleString()}</div>
									<div className="text-sm text-gray-500">Avg. Order</div>
								</div>
							</div>
						</div>
					</DashboardCard>
				</div>

				{/* Urgent Action - 1/3 Width */}
				<div className="col-span-12 lg:col-span-4">
					<DashboardCard title="Upcoming Payments" icon={AlertCircle}>
						<div className="space-y-4">
							<div className="rounded-lg bg-blue-50 p-4">
								<div className="text-sm font-medium">Next Payment Due</div>
								<div className="mt-1 text-xl font-bold">¥{mockData.urgent.nextPayment.amount}</div>
								<div className="text-sm text-gray-600">{mockData.urgent.nextPayment.figure}</div>
								<div className="mt-1 text-sm font-medium text-blue-600">
									In {mockData.urgent.nextPayment.daysUntil} days
								</div>
							</div>
							{mockData.urgent.upcomingWeek.map((payment, idx) => (
								<div key={idx} className="rounded-lg bg-gray-50 p-4">
									<div className="text-sm font-medium">Due Soon</div>
									<div className="mt-1 text-lg font-bold">¥{payment.amount}</div>
									<div className="text-sm text-gray-600">{payment.figure}</div>
								</div>
							))}
						</div>
					</DashboardCard>
				</div>

				{/* Order Status - 1/3 Width */}
				<div className="col-span-12 lg:col-span-4">
					<DashboardCard title="Order Status" icon={Clock}>
						<div className="space-y-4">
							<div className="grid grid-cols-3 gap-4">
								<div>
									<div className="text-xl font-bold">{mockData.status.unpaid}</div>
									<div className="text-sm text-gray-500">Unpaid</div>
								</div>
								<div>
									<div className="text-xl font-bold">{mockData.status.partiallyPaid}</div>
									<div className="text-sm text-gray-500">Partial</div>
								</div>
								<div>
									<div className="text-xl font-bold">{mockData.status.fullyPaid}</div>
									<div className="text-sm text-gray-500">Paid</div>
								</div>
							</div>
							<div className="mt-4 space-y-2">
								{mockData.status.upcoming.map((item, idx) => (
									<div key={idx} className="flex items-center justify-between rounded bg-gray-50 p-2">
										<div>
											<div className="text-sm font-medium">{item.figure}</div>
											<div className="text-xs text-gray-500">{item.date}</div>
										</div>
										<div className="rounded bg-blue-100 px-2 py-1 text-xs">{item.status}</div>
									</div>
								))}
							</div>
						</div>
					</DashboardCard>
				</div>

				{/* Financial Planning - Full Width */}
				<div className="col-span-12">
					<DashboardCard title="Financial Planning" icon={Wallet}>
						<div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
							{/* Monthly Payments Bar Chart */}
							<div className="col-span-12 h-64 lg:col-span-2">
								<MonthlyPaymentsChart data={mockData.financial.nextThreeMonths} />
							</div>

							{/* Payment Schedule Area Chart */}
							<div className="col-span-12 h-64 lg:col-span-4">
								<RemainingPaymentsChart data={mockData.financial.paymentSchedule} />
							</div>
						</div>
					</DashboardCard>
				</div>
			</div>
		</div>
	)
}
