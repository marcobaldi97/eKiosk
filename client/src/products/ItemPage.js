import React   from 'react';
import SingleCommentViewer from '../comments/SingleCommentViewer'
import { Card, Button, Row, Container, Col, Carousel } from 'react-bootstrap';

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
                            src="https://i.pinimg.com/originals/21/f7/d7/21f7d7bce9eaeb6437011b33ee5f0454.png"
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
                <SingleCommentViewer author="Mike" question="Do they ship to Montevideo?" response="Sure dude." ableToResponse="false"></SingleCommentViewer>
                </Card>
            </div>

        );
    };
} export default ItemPage;