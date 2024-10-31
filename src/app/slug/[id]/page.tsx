export default async function SlugDetailPage({
	params,
}: {
	params: { id: string };
}) {
	return <div>SlugDetailPage页面 {params?.id}</div>;
}
