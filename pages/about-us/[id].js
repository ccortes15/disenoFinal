import { Carousel } from 'antd';
import Head from 'next/head'
import LayoutDesign from '../../components/LayoutDesign';
import styles from '../../styles/Home.module.css';
import About from '../../components/about/About';

export default function AboutContent() {
  return (
    <div>
      <Head>
        <title>About us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutDesign>
        <About />
      </LayoutDesign>
    </div>
  )
}
