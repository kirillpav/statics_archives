import Image from "next/image";
import styles from "../styles/hero.module.css";

export default function Home() {
	return (
		<>
			<Image
				src="/imgs/arman.gif"
				alt="keybaord gif"
				height={500}
				width={500}
				className={styles.hero_gif}
			/>
		</>
	);
}
