import styles from "../styles/showcase.module.css";
import Image from "next/image";

// image imports
import sierra from "../../public/imgs/88.1_sierra.png";
import lilac from "../../public/imgs/88.1_lilac.png";
import alpine from "../../public/imgs/88.1_alpine.png";

export default function EightyCollection(): ReturnType<React.FC> {
	return (
		<>
			<div className={styles.showcase__container}>
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
			</div>
		</>
	);
}
