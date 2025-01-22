'use client'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

type MonthlyPaymentsChartProps = {
	data: {
		month: string
		amount: number
	}[]
}

const chartConfig = {
	amount: {
		label: 'Payment',
		color: 'hsl(var(--primary))',
	},
} satisfies ChartConfig

export function MonthlyPaymentsChart({ data }: MonthlyPaymentsChartProps) {
	return (
		<>
			<div className="mb-2 text-sm font-medium">Next 3 Months</div>
			<ChartContainer config={chartConfig} className="h-full w-full">
				<BarChart accessibilityLayer data={data}>
					<XAxis dataKey="month" />
					<YAxis dataKey="amount" tickFormatter={(value: number) => `¥${value.toString()}`} />
					{/*<Tooltip formatter={(value) => [`¥${value.toString()}`, 'Payment Due']} />*/}
					<ChartTooltip
						cursor={false}
						content={<ChartTooltipContent hideLabel formatter={(value) => `Due\t ¥${value.toString()}`} />}
					/>
					<Bar dataKey="amount" fill="var(--color-amount)" />
				</BarChart>
			</ChartContainer>
		</>
	)
}
