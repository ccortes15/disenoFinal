import { Carousel } from 'antd';
import Head from 'next/head'
import LayoutDesign from '../components/LayoutDesign';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutDesign>
        <Carousel effect="fade" autoplay>
          <div>
            <img src="/productos.png" className={styles.imgHome} />
          </div>
          <div>
            <img src="/carousel4.jpg" className={styles.imgHome} />
          </div>
          <div>
            <img src="/carousel3.jpg" className={styles.imgHome} />
          </div>
          <div>
            <img src="/carousel2.jpg" className={styles.imgHome} />
          </div>
        </Carousel>
      </LayoutDesign>
    </div>
  )
}
