"use client";

import { useState } from "react";

const BlogTemplates = ({ children }) => {
	const [count, setCount] = useState(0);
	return (
		<div className='w-full h-[100px] bg-slate-300'>
			{children}
			<div className='text-[16px]'>template: {count}</div>
			<button
				style={{
					border: "1px solid",
				}}
				onClick={() => setCount(count + 1)}
			>
				template添加
			</button>
		</div>
	);
};

export default BlogTemplates;
