"use client";
import styles from "../../styles/showcase.module.css";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { useState } from "react";

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
				return <h3>PICK COLLECTION</h3>;
		}
	};
	return (
		<>
			<select onChange={handleChange} defaultValue="">
				<option value="">PICK COLLECTION</option>
				<option value="sixtyCollection">60.1 COLLECTION</option>
				<option value="eightyCollection">88.1 COLLECTION</option>
				<option value="foundationCollection">FOUNDATION COLLECTION</option>
				<option value="heartbrakeCollection">HEARTBRAKE COLLECTION</option>
			</select>
			<div className={styles.showcase__container}>{renderCollection()}</div>
			{/* <SixtyCollection />
				<EightyCollection />
				<FoundationCollection />
				<HeartbrakeCollection /> */}
		</>
	);
}
