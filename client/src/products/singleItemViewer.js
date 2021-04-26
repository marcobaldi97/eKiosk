import React   from 'react';
import { Card, Button, Row, Container, Col } from 'react-bootstrap';

class SingleitemViewer extends React.Component {
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
            <Card className="cardFather" style={{}}>
            <Container fluid>
                <Row>
                    <Col>
                        <Card.Img className="" variant="top" src="https://http2.mlstatic.com/D_NQ_NP_650934-MLB31124466602_062019-O.jpg" />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{this.state.productName}</Card.Title>
                            <Card.Text>
                                {this.state.productDesc}
                            </Card.Text>
                            <Button variant="primary">Buy!</Button>
                        </Card.Body>
                    </Col>
                </Row>
                
            </Container>
            </Card>
        );
    };
} export default SingleitemViewer;