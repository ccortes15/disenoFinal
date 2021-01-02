import { PageHeader, Typography, Row, Card } from 'antd';
import styles from '../../styles/Home.module.css';

const { Paragraph, Title } = Typography;
const { Meta } = Card;

const content = (
    <div className={styles.fontText}>
        <Title>
            Diseño de las tiendas
        </Title>
        <Paragraph style={{ fontSize: 20 }}>
            El diseño y la sustentabilidad, son parte de nuestra esencia.
        </Paragraph>
        <Paragraph style={{ fontSize: 20 }}>
            Creemos que una cafetería debe de ser un sitio donde te sientas cómodo y con el que conectes.
            Debe integrarse en la vida del lugar del que forma parte y su impacto medioambiental debe de ser mínimo.
        </Paragraph>
        <Paragraph style={{ fontSize: 20 }}>
            Los diseños de nuestras tiendas tienen su origen en nuestra herencia cafetera y en nuestras metas de
            Starbucks™ Shared Planet™ sobre la participación en la comunidad y la responsabilidad hacia el medio ambiente.
        </Paragraph>
        <Paragraph style={{ fontSize: 20 }}>
            Cada tienda que abrimos, o renovamos, se basa en uno de los siguientes estilos en su diseño.
        </Paragraph>
        <Paragraph style={{ fontSize: 20 }}>
            <ul>
                <li>
                    <Paragraph style={{ fontSize: 20 }}>
                        Las tiendas <strong>Herencia</strong> reflejan las raíces comerciales de nuestro primer establecimiento del Pike Place Market de Seattle,
                        con madera envejecida, suelos de cemento teñido o baldosa, banquetas de metal e iluminación de inspiración industrial.
                        Las grandes mesas comunes, las sillas de club y las persianas de madera te transportan a principios del siglo pasado.
                    </Paragraph>
                </li>
                <li>
                    <Paragraph style={{ fontSize: 20 }}>
                        El diseño <strong>Artesano</strong> evoca el pasado industrial de los mercados urbanos y se inspiran en el Modernismo de la década de 1930.
                        Este estilo rinde homenaje a los materiales sencillos, como las vigas de acero vistas, las paredes de ladrillo, los cristales
                        de cuarterones de estilo industrial y la madera pulida a mano. Es un lugar de encuentro creativo para la cultura y las artes.
                    </Paragraph>
                </li>
                <li>
                    <Paragraph style={{ fontSize: 20 }}>
                        <strong>Moderno regional</strong> representa un estilo que marca tendencia y resulta cómodo y acogedor. Utilizamos espacios luminosos, diáfanos
                        y llenos de luz puntuados con muebles inspirados en la región y tejidos pertinentes para la cultura local, a fin de crear un respiro
                        contemporáneo ante el bullicio frenético del exterior.
                    </Paragraph>
                </li>
                <li>
                    <Paragraph style={{ fontSize: 20 }}>
                        Las tiendas <strong>Conceptuales</strong> son entornos únicos creados por nuestros diseñadores para explorar nuevos estilos. Los denominamos nuestras
                         “pizarras de diseño”. Este espíritu de innovación a se transmite a todos los visitantes que cada día vienen a tomar su taza de café
                         o té o a disfrutar de algún evento artístico o comunitario.
                    </Paragraph>
                </li>
            </ul>
        </Paragraph>
    </div>
);

const Content = ({ children, extraContent }) => (
    <Row>
        <div style={{ flex: 1 }}>{children}</div>
        <div className="image">{extraContent}</div>
    </Row>
);

export default function Tiendas() {
    const gridStyle = {
        width: '20%',
        textAlign: 'center',
    };

    const items = [
        {
            img: '/tiendas/tienda1.jpg',
            text: 'Chapultepec Reforma México, D.F., Regional Modern'
        },
        {
            img: '/tiendas/tienda2.jpg',
            text: 'Bellevue Square Bellevue, Washington - Regional Modern'
        },
        {
            img: '/tiendas/tienda3.jpg',
            text: 'Palace Hotel, Madrid, España. Herencia'
        },
        {
            img: '/tiendas/tienda3.jpg',
            text: '1st and Pike - Seattle, Wash - Heritage'
        },
        {
            img: '/tiendas/tienda5.jpg',
            text: 'Conduit Street - London, England - Regional Modern'
        },
        {
            img: '/tiendas/tienda6.jpg',
            text: 'Disney Village - Paris, France - Artisan'
        },
        {
            img: '/tiendas/tienda7.jpg',
            text: '15th Ave Coffee & Tea - Seattle, Washington - Concept'
        },
        {
            img: '/tiendas/tienda8.jpg',
            text: 'Roy St Coffee & Tea - Seattle, Wash - Concept'
        },
    ]

    return (
        <PageHeader
            style={{ backgroundColor: 'white' }}
        >
            <Content
                extraContent={
                    <Card title="Nuestras tiendas" bordered={false}>
                        {items.map((item, index) => (
                            <Card.Grid hoverable={false} style={gridStyle}>
                                <Card
                                    bordered={false}
                                    cover={<img alt={`example${index}`} src={item.img} />}
                                >
                                    <Meta style={{ paddingTop: 2, paddingBottom: 2 }} description={item.text} />
                                </Card>
                            </Card.Grid>
                        ))}
                    </Card>
                }
            >
                {content}
            </Content>
        </PageHeader>
    )
}