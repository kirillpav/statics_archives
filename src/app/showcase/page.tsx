"use client";
import Image from "next/image";
import styles from "../../styles/showcase.module.css";

export default function showcase(): ReturnType<React.FC> {
	return (
		<div className={styles.showcase__container}>
			<div>
				<Image
					src="/imgs/HGX-video.gif"
					alt="first keyboard"
					height={400}
					width={400}
				/>
			</div>
			<div>
				<Image
					src="/imgs/HGX-video.gif"
					alt="first keyboard"
					height={400}
					width={400}
				/>
			</div>
			<div>
				<Image
					src="/imgs/HGX-video.gif"
					alt="first keyboard"
					height={400}
					width={400}
				/>
			</div>
			<div>
				<Image
					src="/imgs/HGX-video.gif"
					alt="first keyboard"
					height={400}
					width={400}
				/>
			</div>
			<div>
				<Image
					src="/imgs/HGX-video.gif"
					alt="first keyboard"
					height={400}
					width={400}
				/>
			</div>
			<div>
				<Image
					src="/imgs/HGX-video.gif"
					alt="first keyboard"
					height={400}
					width={400}
				/>
			</div>
		</div>
	);
}
