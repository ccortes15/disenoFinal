import { Carousel } from 'antd';
import Head from 'next/head'
import LayoutDesign from '../../components/LayoutDesign';
import styles from '../../styles/Home.module.css';

export default function TiendasContent() {
  return (
    <div>
      <Head>
        <title>Tiendas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutDesign>
        Tiendas
      </LayoutDesign>
    </div>
  )
}
