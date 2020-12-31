import { Layout } from 'antd';
import styles from '../styles/Home.module.css';
import FooterContent from './FooterContent';
import HeaderContent from './HeaderContent';

const { Header, Footer, Content } = Layout;

export default function LayoutDesign({children}) {

    return (
        <Layout>
            <Header className={styles.header}>
                <HeaderContent />
            </Header>
            <Content className={styles.container}>
                {children}
            </Content>
            <Footer style={{ paddingBottom: 0 }}>
                <FooterContent />
            </Footer>
        </Layout>
    )
}