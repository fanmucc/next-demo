export default function Layout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<div className='flex flex-col'>
			{children}
			{modal}
		</div>
	);
}
