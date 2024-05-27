"use client";

import Image from "next/image";
import { useRef } from "react";
import styles from "../styles/hero.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(useGSAP, Draggable);

export default function Home() {
	const imgRef = useRef(null);

	// useGSAP(() => {
	// 	Draggable.create(imgRef.current, {
	// 		type: "rotation",
	// 		inertia: true,
	// 	});
	// });

	return (
		<>
			<div className={styles.hero_container}>
				{/* <Image
					src="/imgs/arman.gif"
					alt="keybaord gif"
					height={650}
					width={650}
					className={styles.hero_gif}
					ref={imgRef}
				/> */}
				<a href="#" className={styles.hero_link}>
					View Designs
				</a>
			</div>
		</>
	);
}
