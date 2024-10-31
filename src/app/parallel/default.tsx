import { notFound } from "next/navigation";

export default function Page() {
	// notFound();
	return (
		<div className='p-10 mt-6 bg-sky-600 text-white rounded-xl'>
			Hello, App/parallel/default!
		</div>
	);
}
