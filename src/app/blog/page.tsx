import { notFound } from "next/navigation";
async function getData() {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	if (data.status === 404) {
		notFound();
	}
	return {
		message: "Hello, Dashboard!",
	};
}

export default async function blogPage() {
	// const { message } = await getData();
	notFound();
	return <h1> blog page 1. layout 2. BlogTemplates 3. 本身页面内容</h1>;
}
