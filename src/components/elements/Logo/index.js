import Link from "next/link";

function Logo() {
	return (
		<Link href="/" style={{ cursor: "pointer" }}>
			<svg
				width="151"
				height="165"
				viewBox="0 0 151 165"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 36.3847L26.6406 16.5385L52.0703 21.8308L75.6836 11.2462L101.113 16.5385L125.332 0H150.156V164.062H0V36.3847Z"
					fill="#1947E5"
				/>
				<path
					d="M79.7266 124.585C79.7266 125.743 77.3893 126.675 74.5002 126.675C71.6131 126.675 69.2738 125.743 69.2738 124.585C69.2738 123.429 71.6131 124.459 74.5002 124.459C77.3893 124.459 79.7266 123.429 79.7266 124.585ZM65.7199 114.379C65.7199 116.835 63.7192 118.834 61.2607 118.834C58.8022 118.834 56.8037 116.835 56.8037 114.379C56.8037 111.922 58.8022 109.922 61.2607 109.922C63.7192 109.922 65.7199 111.922 65.7199 114.379ZM92.1988 114.379C92.1988 116.835 90.1981 118.834 87.7396 118.834C85.2812 118.834 83.2826 116.835 83.2826 114.379C83.2826 111.922 85.2812 109.922 87.7396 109.922C90.1981 109.922 92.1988 111.922 92.1988 114.379Z"
					fill="white"
				/>
				<path
					d="M120.093 96.0913C121.972 97.9735 123.747 99.7527 123.976 101.623C124.225 103.618 122.506 105.811 120.832 107.947C119.671 109.425 111.244 117.616 111.083 118.634C111.083 115.678 109.001 113.284 106.407 113.278C105.69 114.505 104.868 115.688 103.938 116.807C104.81 113.826 105.288 110.753 105.288 107.705C105.288 106.25 105.146 104.872 104.941 103.528C95.7179 101.471 81.3725 97.1786 77.8959 89.8763C77.8959 89.8763 62.1227 102.169 43.8806 104.648C43.774 105.639 43.7175 106.657 43.7175 107.702C43.7175 110.75 44.1942 113.819 45.0638 116.805C44.1294 115.68 43.312 114.503 42.597 113.276C40.0005 113.28 37.9183 115.676 37.9183 118.632C37.611 117.62 30.2941 115.408 28.9415 114.074C26.9827 112.147 25.1388 110.324 25.0071 108.374C24.8817 106.471 26.4412 104.491 28.0948 102.395L28.107 102.379C29.2685 100.903 30.5828 99.2321 30.6578 98.1842C30.7327 97.1494 30.1279 95.402 29.5438 93.714L29.5331 93.6832C28.6342 91.1056 27.7123 88.4401 28.4586 86.5712C29.1882 84.7587 31.5052 83.596 33.9595 82.3647C35.6568 81.5139 37.4125 80.6339 38.0145 79.7643C38.6156 78.8961 38.8229 76.9464 39.0232 75.0616L39.0242 75.0522C39.3127 72.322 39.5866 69.7422 41.0249 68.4252C42.4674 67.106 45.0617 67.0642 47.8045 67.0224C49.7028 66.9932 51.6679 66.9618 52.5856 66.4392C53.4978 65.9218 54.5236 64.2686 55.5192 62.6638L55.5375 62.6344L55.5413 62.6282C56.9845 60.2953 58.3468 58.0932 60.2182 57.5313C61.968 57.0066 64.5331 58.0979 66.9373 59.2079C68.5867 59.971 70.2947 60.7591 71.3713 60.7591C72.5467 60.684 74.1996 59.631 75.7989 58.6121L75.8054 58.608C78.0214 57.1927 80.3607 55.7293 82.238 56.0429C84.1656 56.3457 85.8136 58.3446 87.5593 60.462L87.5647 60.4685L87.6177 60.5325C88.8135 61.9758 90.0375 63.4533 91.0058 63.8406C91.8525 64.1793 93.7946 64.0183 95.8224 63.7758L95.87 63.7701C97.0864 63.6256 98.3375 63.4769 99.4683 63.4769C100.934 63.4769 101.971 63.7256 102.73 64.2545C104.339 65.3727 104.954 67.8886 105.606 70.5555L105.624 70.6292C106.074 72.45 106.536 74.3163 107.239 75.0857C107.947 75.8605 109.791 76.4928 111.572 77.1038L111.618 77.1198C114.21 78.0088 116.66 78.8492 117.623 80.5441C118.589 82.2406 118.055 84.7723 117.49 87.4552L117.487 87.4701L117.483 87.4894C117.091 89.3419 116.687 91.2512 116.991 92.2596C117.305 93.2902 118.699 94.6904 120.048 96.0457L120.093 96.0913Z"
					fill="white"
				/>
			</svg>
		</Link>
	);
}

export { Logo };
