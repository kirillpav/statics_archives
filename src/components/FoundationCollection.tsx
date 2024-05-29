import styles from "../styles/showcase.module.css";
import Image from "next/image";

// image imports
import foundationVeryPeri from "../../public/imgs/foundation_veryperi.png";
import foundationNavy from "../../public/imgs/foundation_navy.png";

export default function FoundationCollection(): ReturnType<React.FC> {
	return (
		<>
			<h3>FOUNDATION COLLECTION</h3>
			<div className={styles.showcase__item}>
				<Image
					src={foundationNavy}
					alt="first keyboard"
					height={400}
					width={300}
				/>
				<span>foundaction navy</span>
			</div>
			<div className={styles.showcase__item}>
				<Image
					src={foundationVeryPeri}
					alt="first keyboard"
					height={400}
					width={300}
				/>
				<span>foundaction veryperi</span>
			</div>
		</>
	);
}
