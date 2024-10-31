"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
const BlogLayout = ({ children }) => {
	const [count, setCount] = useState(0);
	return (
		<div className='w-full h-[100vh] bg-red-400'>
			<div>
				<Link href='/blog'>About</Link>
				<br />
				<Link href='/blog/blog-a'>Settings</Link>
			</div>
			<div className='text-[40px]'>layout: {count}</div>
			{children}
			<button
				style={{
					border: "1px solid",
				}}
				onClick={() => setCount(count + 1)}
			>
				layout添加
			</button>
			<button
				style={{
					border: "1px solid",
				}}
				onClick={() => {
					console.log("404");
					notFound();
				}}
			>
				手动404
			</button>
		</div>
	);
};

export default BlogLayout;
