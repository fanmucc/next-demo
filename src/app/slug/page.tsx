"use client";
import { useSearchParams } from "next/navigation";
export default function SlugPage() {
	const searchParams = useSearchParams();
	console.log(searchParams.get("id"));

	return <div>slug页面</div>;
}
