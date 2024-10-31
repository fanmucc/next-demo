import { notFound } from "next/navigation";

export default function Page() {
	// notFound();
	return (
		<div className='h-[60vh] flex-1 rounded-xl bg-sky-500 text-white flex items-center justify-center'>
			Hello, Team!
		</div>
	);
}
