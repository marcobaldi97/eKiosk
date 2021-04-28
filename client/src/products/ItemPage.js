import React   from 'react';
import { Card, Button, Row, Container, Col, Carousel, CarouselItem } from 'react-bootstrap';

class ItemPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productName: "Bubbaloo",
            productDesc: "Un chicle hecho de goma con sabor...",
            productPrice: "",
            productImgs: []       
        };
    };

    render(){
        return(
            <div key="lol">
                <Card className="cardFather" style={{}}>
                <Container fluid>
                    <Row>
                        <Col>
                            <Carousel fade className="itemImg">
                            <Carousel.Item>
                                <img
                                className="d-block w-100 itemImg"
                                src="https://http2.mlstatic.com/D_NQ_NP_650934-MLB31124466602_062019-O.jpg"
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            </Carousel>
                            <Card.Body>
                                <Card.Title className="itemTitle">{this.state.productName}</Card.Title>
                                <Card.Text>
                                    {this.state.productDesc}
                                </Card.Text>
                                <Button variant="primary primaryAlter">Buy!</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                    
                </Container>
                </Card>
            </div>

        );
    };
} export default ItemPage;