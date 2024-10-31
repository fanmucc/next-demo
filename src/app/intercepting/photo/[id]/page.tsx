const photos = [
	{ id: "1", src: "https://picsum.photos/300/400" },
	{ id: "2", src: "https://picsum.photos/300/400" },
	{ id: "3", src: "https://picsum.photos/300/400" },
	{ id: "4", src: "https://picsum.photos/300/400" },
	{ id: "5", src: "https://picsum.photos/300/400" },
	{ id: "6", src: "https://picsum.photos/300/400" },
	{ id: "7", src: "https://picsum.photos/300/400" },
];

export default function PhotoPage({ params: { id } }) {
	const photo = photos.find((p) => p.id === id);
	return <img className='block w-1/4 mx-auto mt-10' src={photo.src} />;
}
