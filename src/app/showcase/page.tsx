"use client";
import Image from "next/image";
import styles from "../../styles/showcase.module.css";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";

// image imports
import heartbakeTiffany from "../../../public/imgs/heartbreak_tiffany.png";
import heartbrakeStrangeLove from "../../../public/imgs/heartbreak_strangelove.png";
import heartbrakePurplePigeon from "../../../public/imgs/heartbreak_purplepigeon.png";
import heartbrakeContemporaryBlack from "../../../public/imgs/heartbreak_contemporaryblack.png";
import foundationVeryPeri from "../../../public/imgs/foundation_veryperi.png";
import foundationNavy from "../../../public/imgs/foundation_navy.png";
import sierra from "../../../public/imgs/88.1_sierra.png";
import lilac from "../../../public/imgs/88.1_lilac.png";
import alpine from "../../../public/imgs/88.1_alpine.png";
import silver from "../../../public/imgs/60.1_silver.png";
import blue from "../../../public/imgs/60.1_blue.png";
import black from "../../../public/imgs/60.1_black.png";

const collections: string[] = ["60.1 COLLECTION", "88.1 COLLECTION"];

export default function showcase(): ReturnType<React.FC> {
	return (
		<>
			<h3>60.1 COLLECTION</h3>
			<div className={styles.showcase__container}>
				<div className={styles.showcase__item}>
					<Image src={black} alt="first keyboard" height={400} width={300} />
					<span>60.1 black</span>
				</div>
				<div className={styles.showcase__item}>
					<Image src={blue} alt="first keyboard" height={400} width={300} />
					<span>60.1 blue</span>
				</div>
				<div className={styles.showcase__item}>
					<Image src={silver} alt="first keyboard" height={400} width={300} />
					<span>60.1 silver</span>
				</div>
				<h3>88.1 COLLECTION</h3>
				<div className={styles.showcase__item}>
					<Image src={alpine} alt="first keyboard" height={400} width={300} />
					<span>88.1 alpine</span>
				</div>
				<div className={styles.showcase__item}>
					<Image src={lilac} alt="first keyboard" height={400} width={300} />
					<span>88.1 lilac</span>
				</div>
				<div className={styles.showcase__item}>
					<Image src={sierra} alt="first keyboard" height={400} width={300} />
					<span>88.1 sierra</span>
				</div>
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
			</div>
		</>
	);
}
