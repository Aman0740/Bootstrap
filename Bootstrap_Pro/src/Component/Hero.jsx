import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Hero = () => {
    return (
        <Container className="hero-section">
            <Row className="align-items-center">
                <Col md={6}>
                    <h1 className="hero-title">Hi, Hi, I'm John Deo.</h1>
                    <p className="hero-subtitle">
                        A freelance Web developer from London. I convert custom web designs to bootstrap templates.
                        I make YouTube videos and write Blog.
                    </p>
                    <Button variant="primary" className="hero-button">I'm Available</Button>
                    <div className="hero-social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-github"></i></a>
                    </div>
                </Col>
                <Col md={6} className="text-center">
                    <img src="/path/to/your/image.jpg" alt="John Deo" className="hero-image" />
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;
