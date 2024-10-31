// dashboard/page.js
import React from "react";
import ErrorPage from "./error";

async function getData() {
	await new Promise((resolve, reject) => setTimeout(resolve, 3000));
	return {
		message: "Hello, Dashboard!",
	};
}

async function getError() {
	const data = await fetch("http://localhost:3000/api/data");
	if (!data.ok) {
		throw new Error("Failed to fetch data");
	}
	return data;
}

export default async function DashboardPage() {
	// const [error, setError] = React.useState(false);
	// const data = await getError();
	const handleGetError = async () => {
		try {
		} catch (err) {
			// setError(true);
			throw new Error("Failed to Delete Invoice");
		}
		// setError(true);
		// throw new Error("Failed to Delete Invoice");
	};

	return (
		<>
			{/* {error ? (
				<ErrorPage
					error={{ messag: "123" }}
					reset={() => {
						setError(false);
					}}
				/>
			) : ( */}
			<div>dashboard页面</div>
			{/* )} */}
		</>
	);
}
