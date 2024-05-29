"use client";
import styles from "../../styles/showcase.module.css";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { useState } from "react";
import Image from "next/image";

import SixtyCollection from "@/components/SixtyCollection";
import EightyCollection from "@/components/EightyCollection";
import FoundationCollection from "@/components/FoundationCollection";
import HeartbrakeCollection from "@/components/HeartbrakeColection";

export default function showcase(): ReturnType<React.FC> {
	const [selectedCollection, setSelectedCollection] = useState("");

	const handleChange = (e) => {
		setSelectedCollection(e.target.value);
	};

	const renderCollection = () => {
		switch (selectedCollection) {
			case "sixtyCollection":
				return <SixtyCollection />;
			case "eightyCollection":
				return <EightyCollection />;
			case "foundationCollection":
				return <FoundationCollection />;
			case "heartbrakeCollection":
				return <HeartbrakeCollection />;
			default:
				return (
					<Image
						style={{
							display: "block",
							marginLeft: "auto",
							marginRight: "auto",
						}}
						src={"/imgs/HGX-video.gif"}
						alt="placeholder"
						width={500}
						height={500}
					></Image>
				);
		}
	};
	return (
		<>
			<h2 className={styles.showcase__title}>WELCOME TO THE ARCHIVE</h2>
			{/* <Select
				placeholder="PICK COLLECTION"
				onChange={(e) => handleChange(e.target.value)}
			>
				<SelectItem key={"sixtyCollection"}>60.1 COLLECTION</SelectItem>
				<SelectItem key={"eightyCollection"}>88.1 COLLECTION</SelectItem>
				<SelectItem key={"foundationCollection"}>
					FOUNDATION COLLECTION
				</SelectItem>
				<SelectItem key={"heartbrakeCollection"}>
					HEARTBRAKE COLLECTION
				</SelectItem>
			</Select>
			<div className={styles.showcase__container}>{renderCollection()}</div> */}

			<select
				onChange={handleChange}
				defaultValue=""
				className={styles.showcase__select}
			>
				<option value="">PICK COLLECTION</option>
				<option value="sixtyCollection">60.1 COLLECTION</option>
				<option value="eightyCollection">88.1 COLLECTION</option>
				<option value="foundationCollection">FOUNDATION COLLECTION</option>
				<option value="heartbrakeCollection">HEARTBRAKE COLLECTION</option>
			</select>
			<div>{renderCollection()}</div>
			{/* <SixtyCollection />
				<EightyCollection />
				<FoundationCollection />
				<HeartbrakeCollection /> */}
		</>
	);
}
