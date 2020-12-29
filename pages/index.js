import Head from 'next/head'
import LayoutDesign from '../components/LayoutDesign';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutDesign />
    </div>
  )
}
