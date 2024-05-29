import styles from "../styles/showcase.module.css";
import Image from "next/image";

//image imports
import heartbakeTiffany from "../../public/imgs/heartbreak_tiffany.png";
import heartbrakeStrangeLove from "../../public/imgs/heartbreak_strangelove.png";
import heartbrakePurplePigeon from "../../public/imgs/heartbreak_purplepigeon.png";
import heartbrakeContemporaryBlack from "../../public/imgs/heartbreak_contemporaryblack.png";

export default function HeartbrakeCollection(): ReturnType<React.FC> {
	return (
		<>
			<h3>HEARTBAKE COLLECTION</h3>
			<div className={styles.showcase__item}>
				<Image
					src={heartbakeTiffany}
					alt="first keyboard"
					height={400}
					width={300}
				/>
				<span>heartbrake tiffany</span>
			</div>
			<div className={styles.showcase__item}>
				<Image
					src={heartbrakeContemporaryBlack}
					alt="first keyboard"
					height={400}
					width={300}
				/>
				<span>heartbrake contemporary black</span>
			</div>
			<div className={styles.showcase__item}>
				<Image
					src={heartbrakePurplePigeon}
					alt="first keyboard"
					height={400}
					width={300}
				/>
				<span>heartbrake purple pigeon</span>
			</div>
			<div className={styles.showcase__item}>
				<Image
					src={heartbrakeStrangeLove}
					alt="first keyboard"
					height={400}
					width={300}
				/>
				<span>heartbrake strange love</span>
			</div>
		</>
	);
}
