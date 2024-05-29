import silver from "../../public/imgs/60.1_silver.png";
import blue from "../../public/imgs/60.1_blue.png";
import black from "../../public/imgs/60.1_black.png";

import styles from "../styles/showcase.module.css";

import Image from "next/image";

export default function SixtyCollection(): ReturnType<React.FC> {
	return (
		<>
			{/* <h3>60.1 COLLECTION</h3> */}
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
			</div>
		</>
	);
}
