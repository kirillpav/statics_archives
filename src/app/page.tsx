"use client";

import Image from "next/image";
import { useRef } from "react";
import styles from "../styles/hero.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(useGSAP, Draggable);

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
				<a href="#" className={styles.hero_link}>
					View Designs
				</a>
			</div>
		</>
	);
}
