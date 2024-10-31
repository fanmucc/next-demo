"use client";

import {
	useSearchParams,
	useRouter,
	usePathname,
	useParams,
} from "next/navigation";

export default () => {
	const searchParams = useSearchParams();
	console.log(searchParams.get("id"));

	const router = useRouter();
	console.log(router);
	const pathname = usePathname();
	console.log(pathname);

	const params = useParams();
	console.log(params);

	return <div className='text-[30px]'>blog-a</div>;
};
