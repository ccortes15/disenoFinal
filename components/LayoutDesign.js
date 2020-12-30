import { Layout, Row, Col, Typography, Menu, Collapse } from 'antd';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const { Header, Footer, Content } = Layout;
const { Text } = Typography;
const { Panel } = Collapse;

export default function LayoutDesign() {
    const menuContent = ['Café', 'Menú', 'Tiendas', 'Impacto social', 'Starbucks', 'Starbucks rewards', 'Blog', 'Historias Starbucks']

    return (
        <Layout>
            <Header className={styles.header}>
                <Row justify="center">
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
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    className={styles.menuStyle}
                                >
                                    {menuContent.map((item, index) => (
                                        <Menu.Item key={index} >
                                            <Link href="/">
                                                <a href="#!">
                                                    {item}
                                                </a>
                                            </Link>
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
            </Header>
            <Layout >
                <Content className={styles.container}>
                    <img src="/productos.png" className={styles.imgHome} />
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    )
}