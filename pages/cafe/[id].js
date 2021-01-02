import { Card, Space, Divider, Button, Tooltip } from 'antd';
import Head from 'next/head'
import LayoutDesign from '../../components/LayoutDesign';
import styles from '../../styles/Home.module.css';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';

const { Meta } = Card;

export default function CafeContent() {
    const getActions = (precio) => (
        <Space split={<Divider type="vertical" />}>
            <Tooltip title="Pagar" placement="bottom">
                <a className={styles.tagDrop}>{precio}</a>
            </Tooltip>
            <Tooltip title="Añadir a favoritos" placement="bottom">
                <Button type="link" icon={<HeartOutlined />} />
            </Tooltip>
            <Tooltip title="Añadir al carrito" placement="bottom">
                <Button type="link" icon={<ShoppingCartOutlined />} />
            </Tooltip>
        </Space>
    )

    const gridItems = [
        {
            title: 'Café latte',
            cover: <img alt="example" src="/cafe1.jpg" />,
            description: getActions('$45')
        },
        {
            title: 'Vanilla latte',
            cover: <img alt="example" src="/cafe2.jpg" />,
            description: getActions('$55')
        },
        {
            title: 'Latte Macchiato',
            cover: <img alt="example" src="/cafe3.jpg" />,
            description: getActions('$55')
        },
        {
            title: 'Café Mocha',
            cover: <img alt="example" src="/cafe4.png" />,
            description: getActions('$45')
        },
        {
            title: 'Cappuchino',
            cover: <img alt="example" src="/cafe5.jpg" />,
            description: getActions('$55')
        }
    ]

    return (
        <div>
            <Head>
                <title>Café</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <LayoutDesign>
                <Card title={<Title className={styles.fontText}>Café</Title>} bordered={false}>
                    {gridItems.map((item, index) => (
                        <Card.Grid key={index} className={styles.cardStyle} hoverable={false}>
                            <Card
                                bordered={false}
                                style={{ width: 250 }}
                                cover={item.cover}
                            >
                                <Meta
                                    className={styles.fontText}
                                    title={item.title}
                                    description={item.description}
                                    style={{ paddingTop: 10 }}
                                />
                            </Card>
                        </Card.Grid>
                    ))}
                </Card>
            </LayoutDesign>
        </div>
    )
}
