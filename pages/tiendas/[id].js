import Head from 'next/head'
import LayoutDesign from '../../components/LayoutDesign';
import Tiendas from '../../components/tiendas/Tiendas';

export default function TiendasContent() {
  return (
    <div>
      <Head>
        <title>Tiendas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutDesign>
        <Tiendas />
      </LayoutDesign>
    </div>
  )
}
