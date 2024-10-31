const photos = [
	{ id: "1", src: "https://picsum.photos/300/400" },
	{ id: "2", src: "https://picsum.photos/300/400" },
	{ id: "3", src: "https://picsum.photos/300/400" },
	{ id: "4", src: "https://picsum.photos/300/400" },
	{ id: "5", src: "https://picsum.photos/300/400" },
	{ id: "6", src: "https://picsum.photos/300/400" },
	{ id: "7", src: "https://picsum.photos/300/400" },
];

export default function PhotoModal({ params: { id } }) {
	const photo = photos.find((p) => p.id === id);

	return (
		<div className='flex h-auto justify-center items-center fixed bottom-0 bg-slate-300 w-full'>
			<img className='w-52' src={photo.src} />
		</div>
	);
}
