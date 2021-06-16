import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
	const [ session, loading ] = useSession()
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			{!session && <>
				Not signed in <br/>
				<button onClick={() => signIn()}>Sign in</button>
			</>}
			{session && <>
				Signed in as {session.user.email} <br/>
				<button onClick={() => signOut()}>Sign out</button>
			</>}
		</Layout>
	)
}