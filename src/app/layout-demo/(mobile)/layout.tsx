export default function LayoutDemoMobileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='bg-red-500 w-[100vw] h-[100vh]'>
			LayoutDemoMobileLayout {children}
		</div>
	);
}
