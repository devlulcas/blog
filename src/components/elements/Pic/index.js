import Image from "next/image";

function Pic({ src, alt, width, height, align }) {
	return (
		<div style={{ textAlign: align, margin: "1rem" }}>
			<Image
				style={{ borderRadius: ".5rem" }}
				src={`/pictures/${src}`}
				alt={alt}
				width={width}
				height={height}
			/>
		</div>
	);
}

export { Pic };
