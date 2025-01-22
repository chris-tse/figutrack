import '@/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import { type Metadata } from 'next' // import { TRPCReactProvider } from "@/trpc/react";

// import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
	title: 'FiguTrack',
	description:
		'Manage your anime figure pre-orders effortlessly with FiguTrack. Track payment deadlines, ' +
		'visualize monthly spending, and find shipping consolidation opportunities across multiple retailers.',
	icons: [
		{
			rel: 'icon',
			url: '/favicon.ico',
		},
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${GeistSans.variable}`}>
			<body>
				{/*<TRPCReactProvider>{children}</TRPCReactProvider>*/}
				{children}
			</body>
		</html>
	)
}
