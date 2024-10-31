export default function LayoutDemoPcLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='bg-green-500 w-[100vw] h-[100vh]'>
			LayoutDemoPcLayout {children}
		</div>
	);
}
