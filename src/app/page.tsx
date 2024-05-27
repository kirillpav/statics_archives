"use client";

import Image from "next/image";
import { useRef } from "react";
import styles from "../styles/hero.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const imgRef = useRef(null);

	useGSAP(() => {
		gsap.to(imgRef.current, {
			duration: 1.5,
			y: -20,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
			scrollTrigger: {
				trigger: "#herosection",
				start: "top bottom",
				toggleActions: "play pause play pause",
			},
		});
	});

	return (
		<>
			<Image
				src="/imgs/arman.gif"
				alt="keybaord gif"
				height={500}
				width={500}
				className={styles.hero_gif}
				ref={imgRef}
			/>
		</>
	);
}
