import { PageHeader, Button, Typography, Row } from 'antd';
import styles from '../../styles/Home.module.css';

const { Paragraph } = Typography;

const content = (
    <div className={styles.fontText}>
        <Paragraph style={{fontSize: 18}}>
            Sucede millones de veces todas las semanas que un cliente recibe una bebida de un barista de Starbucks. Sin embargo, cada interacción es única.
        </Paragraph>
        <Paragraph style={{fontSize: 18}}>
            Ocurre en tan solo un instante: una mano que salva la distancia de la barra para entregar una taza a otra mano tendida.
        </Paragraph>
        <Paragraph style={{fontSize: 18}}>
            Pero establece una conexión.
        </Paragraph>
        <Paragraph style={{fontSize: 18}}>
            Nos aseguramos de que todo lo que hacemos esté a la altura de esa conexión: desde nuestro compromiso con el café de máxima calidad del mundo, hasta la manera de
             interactuar con nuestros clientes y comunidades para operar de forma responsable.
        </Paragraph>
        <Paragraph style={{fontSize: 18}}>
            Desde nuestros comienzos, en un una tienda hace casi cuarenta años, en todos los lugares donde hemos estado, en todos los lugares con los que nos relacionamos,
             intentamos que todo sea un poco mejor que cuando llegamos.
        </Paragraph>
    </div>
);

const Content = ({ children, extraContent }) => (
    <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
    </Row>
);

export default function AboutUs() {
    return (
        <PageHeader
            title="Starbucks"
            className="site-page-header"
            style={{backgroundColor: 'white'}}
            extra={[
                <Button key="3">Nuestra empresa</Button>,
                <Button key="2">Nuestra misión</Button>,
            ]}
            avatar={{ src: '/logo.png' }}
        >
            <Content
                extraContent={
                    <img
                        src="/about.jpg"
                        alt="content"
                        width="100%"
                    />
                }
            >
                {content}
            </Content>
        </PageHeader>
    )
}