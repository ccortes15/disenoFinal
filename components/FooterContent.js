import { Row, Col, Avatar, Space, Divider, Dropdown, Menu } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import { Fragment } from 'react';
import styles from '../styles/Home.module.css';

export default function FooterContent() {
    const firstColumn = ['Nuestra empresa', 'Nuestra herencia', 'Boletines de prensa', 'Trabaja con nosotros'];
    const secondColumn = ['Starbucks rewards', 'Mi cuenta', 'Más información'];
    const thirdColumn = ['Contáctanos', 'Preguntas frecuentes sobre el menú', 'Facturas electrónicas'];
    const fourthColumn = ['Información nutrimental', 'Buscador de tiendas', 'Términos y condiciones', 'Lista de tiendas con Drive Thru', 'Listas de tiendas Delivery'];

    const getMenu = (data) => {
        return (
            <Menu>
                {data.map((x, index) => (
                    <Menu.Item key={index}>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                            {x}
                        </a>
                    </Menu.Item>
                ))}
            </Menu>
        )
    }

    const getDropdown = (title, menu) => {
        return (
            <Dropdown overlay={menu} placement="topRight">
                <a className={styles.tagDrop} onClick={e => e.preventDefault()}>
                    {title}
                </a>
            </Dropdown>
        )
    }

    return (
        <Fragment>
            <Row justify="space-between">
                <Col>
                    {getDropdown("Starbucks", getMenu(firstColumn))}
                </Col>
                <Row>
                    <Col>
                        {getDropdown("Starbucks rewards", getMenu(secondColumn))}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {getDropdown("Servicio al cliente", getMenu(thirdColumn))}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {getDropdown('Vínculos rápidos', getMenu(fourthColumn))}
                    </Col>
                </Row>

                <Row justify="center">
                    <Col>
                        <Space align="center">
                            <strong>STARBUCKS</strong>
                        </Space>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Space size="large" align="center">
                            <Avatar icon={<FacebookOutlined />} style={{ backgroundColor: '#3b5998' }} />
                            <Avatar icon={<TwitterOutlined />} style={{ backgroundColor: '#00acee' }} />
                            <Avatar icon={<InstagramOutlined />} style={{
                                backgroundColor: '#F58529',
                                backgroundImage:
                                    'linear-gradient(45deg, rgb(245,133,41) 0%, rgb(245,133,41) 3%, rgb(252,188,119) 12%, rgb(221,42,122) 35%, rgb(130,52,175) 76%, rgb(81,91,212) 100%)',
                            }} />
                        </Space>
                    </Col>
                </Row>
            </Row>
            <Row justify="center" style={{ marginTop: 20 }}>
                <Col>
                    <Space split={<Divider type="vertical" />}>
                        <a className={styles.tagDrop}>Accesibilidad web</a>
                        <a className={styles.tagDrop}>Aviso de privacidad</a>
                        <a className={styles.tagDrop}>Condiciones</a>
                        <a className={styles.tagDrop}>Politicas del sitio web</a>
                        <a className={styles.tagDrop}>Mapa del sitio</a>
                        <a className={styles.tagDrop}>Preferencias sobre cookies</a>
                    </Space>
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: 10 }}>
                <Col>
                    <div>2020 Starbucks Coffee Company. Reservados todos los derechos</div>
                </Col>
            </Row>
        </Fragment>
    )
}