import { PageHeader, Typography, Row, Card } from 'antd';
import {PhoneOutlined, MailOutlined} from '@ant-design/icons';
import styles from '../../styles/Home.module.css';

const { Paragraph, Title } = Typography;

const content = (
    <div className={styles.fontText}>
        <Title>
            Servicio al cliente
        </Title>
        <Paragraph style={{fontSize: 20}}>
            <strong>
                Hola, te damos la bienvenida a Starbucks.
            </strong>
        </Paragraph>
        <Paragraph style={{fontSize: 18}}>
            Nos encanta recibir de nuestros clientes todas sus dudas, comentarios y observaciones, que siempre son bien recibidos. Nos ayudan a asegurarnos de que cada
            experiencia que tengas en Starbucks sea la mejor de las posibles. También puedes dejar siempre que quieras tus comentarios en nuestra página de Facebook.
        </Paragraph>
        <Paragraph style={{fontSize: 18}}>
            <strong>
                Trabajar en Starbucks
            </strong>
        </Paragraph>
        <Paragraph style={{fontSize: 18}}>
            Cuándo trabajas con nosotros eres un partner , una persona que comparte los éxitos y beneficios de nuestra empresa.
        </Paragraph>
        <Paragraph style={{fontSize: 18}}>
            El desarrollo, la motivación y la inspiración son elementos fundamentales para brindarle a todos nuestros partners el mejor clima de trabajo.
        </Paragraph>
        <Paragraph style={{fontSize: 18}}>
            <strong>¿Cómo lo hacemos?</strong> Nos encargamos de brindar día a día experiencias excepcionales de manera auténtica a nuestros clientes y partners, viviendo la cultura y
            pasión por lo que hacemos, abrazando la diversidad, fomentando el autoestima y haciendo de nuestros equipos de trabajo una verdadera familia llena de
            grandes conexiones humanas.
        </Paragraph>
    </div>
);

const Content = ({ children, extraContent }) => (
    <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
    </Row>
);

export default function Contacto() {
    return (
        <PageHeader
            style={{backgroundColor: 'white'}}
        >
            <Content
                extraContent={
                    <Card title="Contáctanos" bordered={false} style={{marginLeft: 10}}>
                        <p style={{color: 'green'}}>
                            <MailOutlined style={{padding: 2}} />
                            tuopinion@starbucks.com.mx
                        </p>
                        <p style={{color: 'slateblue'}}>
                            <PhoneOutlined style={{padding: 2}} />
                            01 800 288 08 88
                        </p>
                    </Card>
                }
            >
                {content}
            </Content>
        </PageHeader>
    )
}