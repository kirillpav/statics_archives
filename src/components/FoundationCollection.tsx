import styles from "../styles/showcase.module.css";
import Image from "next/image";

// image imports
import foundationVeryPeri from "../../public/imgs/foundation_veryperi.png";
import foundationNavy from "../../public/imgs/foundation_navy.png";

export default function FoundationCollection(): ReturnType<React.FC> {
	return (
		<>
			<div className={styles.showcase__container}>
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
			</div>
		</>
	);
}
