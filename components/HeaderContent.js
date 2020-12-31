import { Fragment } from "react";
import {Row, Col, Collapse, Menu, Typography} from 'antd';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const { Panel } = Collapse;
const { Text } = Typography;

export default function HeaderContent() {
    const menuContent = [{
        title: 'Home',
        ruta: '/'
    },
    {
        title: 'Café',
        ruta: '/cafe/1'
    },
    {
        title: 'Contacto',
        ruta: '/contacto/1'
    },
    {
        title: 'Starbucks',
        ruta: '/about-us/1'
    },
    {
        title: 'Tiendas',
        ruta: '/tiendas/1'
    },
]

    return (
        <Fragment>
            <Row justify="center" className={styles.rowTitle}>
                <Col>
                    <img src="/logo.png" className={styles.logoStyle} />

                </Col>
                <Row>
                    <Col>
                        <Text className={styles.titleStar}>Starbucks</Text>
                    </Col>
                </Row>
            </Row>
            <Row className={styles.rowHeader}>
                <Col>
                    <Collapse className={styles.collapseStyle}>
                        <Panel className={styles.panelStyle} header="Ver contenido" key="1">
                            <Menu
                                mode="inline"
                                className={styles.menuStyle}
                            >
                                {menuContent.map((item, index) => (
                                    <Menu.Item key={index} >
                                        <Link href={item.ruta}>
                                            <a href="#!">
                                                {item.title}
                                            </a>
                                        </Link>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </Fragment>
    )
}