import { type ReactNode } from 'react'
import { type LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type DashboardCardProps = {
	title: string
	icon: LucideIcon
	children: ReactNode
}

export function DashboardCard({ title, icon: Icon, children }: DashboardCardProps) {
	return (
		<Card className="h-full">
			<CardHeader>
				<div className="flex items-center space-x-2">
					<Icon className="h-4 w-4" />
					<CardTitle>{title}</CardTitle>
				</div>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	)
}
