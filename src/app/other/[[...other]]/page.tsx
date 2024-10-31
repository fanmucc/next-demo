export default function OtherPage({
	params,
}: {
	params: { clothes: string[] };
}) {
	return <div>OtherPage页面 {JSON.stringify(params)}</div>;
}
