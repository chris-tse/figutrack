// import Link from "next/link";
//
// import { LatestPost } from "@/app/_components/post";
// import { auth } from "@/server/auth";
// import { api, HydrateClient } from "@/trpc/server";
import { redirect } from 'next/navigation'

export default async function Home() {
	// const hello = await api.post.hello({ text: "from tRPC" });
	// const session = await auth();

	// if (session?.user) {
	//   void api.post.getLatest.prefetch();
	// }

	return redirect('/dashboard')

	// return (
	// 	<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
	// 		<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
	// 			<h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">FiguTrack</h1>
	// 			<p>Here we go</p>
	// 			<Button>Shadcn Working</Button>
	// 		</div>
	// 	</main>
	// )
}
