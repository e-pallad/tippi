import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

import NavBar from "./navigation/Navbar";
import navButtons from "../config/buttons";

export const siteTitle = 'Tippi - Tip your delivery hero'

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
		<Head>
			<title>{siteTitle}</title>
			<link rel="icon" href="/favicon.ico" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
		</Head>
		<header>
			<NavBar navButtons={navButtons} />
		</header>
		<main>{children}</main>
		<footer></footer>
		</div>
	)
}