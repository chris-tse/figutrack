'use client'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type RemainingPaymentsChartProps = {
	data: {
		date: string
		remaining: number
	}[]
}

export function RemainingPaymentsChart({ data }: RemainingPaymentsChartProps) {
	return (
		<>
			<div className="mb-2 text-sm font-medium">Total Remaining Payments</div>
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart data={data}>
					<defs>
						<linearGradient id="remainingGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8} />
							<stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0.2} />
						</linearGradient>
					</defs>
					<XAxis
						dataKey="date"
						tickFormatter={(date: string) => {
							const [year, month] = date.split('-')
							return `${month}/${year?.slice(2) ?? ''}`
						}}
					/>
					<YAxis tickFormatter={(value) => `¥${value}`} />
					<Tooltip
						formatter={(value) => [`¥${value.toString()}`, 'Remaining']}
						labelFormatter={(date: string) => {
							const [year, month] = date.split('-')
							return `${month}/${year}`
						}}
					/>
					<Area type="stepAfter" dataKey="remaining" stroke="hsl(var(--accent))" fill="url(#remainingGradient)" />
				</AreaChart>
			</ResponsiveContainer>
		</>
	)
}
