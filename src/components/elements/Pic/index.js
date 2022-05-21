import Image from "next/image";

function Pic({ src, alt, width, height, align }) {
	return (
		<div style={{ textAlign: align }}>
			<Image src={`/pictures/${src}`} alt={alt} width={width} height={height} />
		</div>
	);
}

export { Pic };
