'use client'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type MonthlyPaymentsChartProps = {
	data: {
		month: string
		amount: number
	}[]
}

export function MonthlyPaymentsChart({ data }: MonthlyPaymentsChartProps) {
	return (
		<>
			<div className="mb-2 text-sm font-medium">Next 3 Months</div>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart data={data}>
					<XAxis dataKey="month" />
					<YAxis tickFormatter={(value) => `¥${value}`} />
					<Tooltip formatter={(value) => [`¥${value.toString()}`, 'Payment Due']} />
					<Bar dataKey="amount" fill="#3b82f6" />
				</BarChart>
			</ResponsiveContainer>
		</>
	)
}
