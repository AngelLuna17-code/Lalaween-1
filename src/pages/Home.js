import React from 'react';
import { Container, Row, Col, Button, } from 'react-bootstrap';

const Home = () => {
    return (
        <section>
            <Container className='container1'>
                <Button style={{ margin: "0 auto" }} variant="primary">
                    Primary
                </Button>
            </Container>
            <Container>
                <Row>
                    <Col xs={12} md={4} className="red">
                        Columna 1
                    </Col>
                    <Col xs={12} md={4} className="blue">
                        Columna 2
                    </Col>
                    <Col xs={12} md={4} className="green">
                        Columna 3
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Home;



