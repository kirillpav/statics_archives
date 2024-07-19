// "use client";

import Image from "next/image";

import styles from "../styles/hero.module.css";

export default function Home() {
	return (
		<>
			<div className={styles.hero_container}>
				<Image
					src="/imgs/hero-gif-cropped-rotated.gif"
					alt="keybaord gif"
					height={315}
					width={800}
					className={styles.hero_gif}
				/>
				<a href="/showcase" className={styles.hero_link}>
					DESIGNS
				</a>
			</div>
		</>
	);
}
