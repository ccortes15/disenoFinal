import { Layout, Row, Col, Typography, Menu } from 'antd';
import styles from '../styles/Home.module.css'

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

export default function LayoutDesign() {
    const menuContent = ['Café', 'Menú', 'Tiendas', 'Impacto social', 'Starbucks', 'Starbucks rewards', 'Blog', 'Historias Starbucks']

    return (
        <Layout>
            <Header style={{backgroundColor: '#0C621F'}}>
                <Row justify="center">
                    <Col className={styles.titleStar}>
                        Starbucks
                    </Col>
                </Row>
            </Header>
            <Layout>
                <Sider>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        className={styles.menuStyle}
                    >
                        {menuContent.map((item, index) => (
                            <Menu.Item key={index} className={styles.menuSB}>
                                {item}
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    )
}