import { Carousel } from 'antd';
import Head from 'next/head'
import Contacto from '../../components/contact/Contacto';
import LayoutDesign from '../../components/LayoutDesign';
import styles from '../../styles/Home.module.css';

export default function ContactoContent() {
  return (
    <div>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutDesign>
        <img src="/contacto.jpg" className={styles.imgHome} />
        <Contacto />
      </LayoutDesign>
    </div>
  )
}
