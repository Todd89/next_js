import Link from "next/link";

import styles from '../styles/A.module.css'

export default function A ({href, text}) {
	return (
		<Link className={styles.link} href={href}>
			{text}
		</Link>
	)
}
