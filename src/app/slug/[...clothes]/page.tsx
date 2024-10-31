export default function SlugPage({
	params,
}: {
	params: { clothes: string[] };
}) {
	// put 更新
	return <div>SlugPage页面 {JSON.stringify(params)}</div>;
}
