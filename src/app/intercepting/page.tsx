import Link from "next/link";
const photos = [
	{ id: "1", src: "https://picsum.photos/300/400" },
	{ id: "2", src: "https://picsum.photos/300/400" },
	{ id: "3", src: "https://picsum.photos/300/400" },
	{ id: "4", src: "https://picsum.photos/300/400" },
	{ id: "5", src: "https://picsum.photos/300/400" },
	{ id: "6", src: "https://picsum.photos/300/400" },
	{ id: "7", src: "https://picsum.photos/300/400" },
];

export default function Page() {
	return (
		<main className='flex flex-row flex-wrap'>
			{photos.map(({ id, src }) => (
				<Link key={id} href={`/intercepting/photo/${id}`}>
					<img width='200' src={src} className='m-1' />
				</Link>
			))}
		</main>
	);
}
