import Link from "next/link";

export default function ParallelLayout({
	children,
	team,
	analytics,
}: {
	children: React.ReactNode;
	team: React.ReactNode;
	analytics: React.ReactNode;
}) {
	const a = true;
	return (
		<div className='w-[100vw] h-[100vh]'>
			<div className='p-10 mb-6 bg-sky-600 text-white rounded-xl'>
				Parallel Routes Examples
			</div>
			<nav className='flex items-center justify-center gap-10 text-blue-600 mb-6'>
				<Link href='/parallel'>Home</Link>
				<Link href='/parallel/page-views'>Page Views</Link>
				<Link href='/parallel/visitors'>Visitors</Link>
			</nav>
			<div className='flex gap-6'>
				{a && team}
				{analytics}
			</div>
			{children}
		</div>
	);
}
