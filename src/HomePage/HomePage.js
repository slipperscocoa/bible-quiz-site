import React from 'react';
import './HomePage.css';

import { Link } from 'react-router-dom';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import FlashCard from './Images/flash-cards-photo.jpg'; 
import Medal from './Images/medal-and-trophy-photo.jpg';
import Rules from './Images/rule-books-photo.jpg';

class HomePageApp extends React.Component {
    render() {
        return (
            <div>
                <HomePageContent />
            </div>
        )
    }
}

class HomePageContent extends React.Component {
    render() {
        return (
            <div>
                <Container fluid="lg">
                    <Row>
                        <Col style={{ paddingTop: '100px' }}>
                            <h1 className="text-warning">Welcome to Quiz Whiz!</h1>
                            <h5 className="text-white" style={{ fontSize: '15px' }} >This site aims to aid Teen Bible Quizzers in all areas of TBQ, beginning 
                                with helpful tips and a simplified breakdown of rules and question types
                                here on this home page. The Games and Quizzes sections are designed to 
                                test how well you know the material and draw your focus to unique words
                                and chapter analysis content. 
                            </h5>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Image src={FlashCard} style={{width: '200px', height: '150px' }} alt="dotted verses" className="LinkPics hover-zoom" fluid></Image>
                        </Col>
                        <Col>
                            <h6 className="text-white">Each season, certain verses are marked with dots to indicate that quotation questions will only come from those verses. Print this PDF to create your own set of dotted verse flashcards.</h6>
                            <Button variant="outline-info" size="sm"><Link to="/dottedverses">Dotted Verses Link</Link></Button>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <p className="text-white">Click here to check out a few tips and techniques from first place quizzers!</p>
                            <Button variant="outline-info" size="sm"><Link to="/tips">Tips</Link></Button>
                        </Col>
                        <Col>
                            <Image src={Medal} style={{width: '200px', height: '150px' }} alt="dotted verses" className="LinkPics hover-zoom" fluid></Image>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Image src={Rules} style={{width: '200px', height: '150px' }} alt="dotted verses" className="LinkPics hover-zoom" fluid></Image>
                        </Col>
                        <Col>
                            <p className="text-white">If you are a brand-new quizzer, here is a page that will break down the terminology so you will get the most out of this app.</p>
                            <Button variant="outline-info" size="sm"><Link to="/help">Need Help?</Link></Button>
                        </Col>
                    </Row>
                </Container>
                <Navbar style={{ margin: '10px', borderStyle: 'solid' }} sticky="bottom">
                    <Nav>
                    <h6 className="text-white">Thank you for using Quiz Whiz. Please know that this site is still a work in progress, and errors are inevitable. If you come across them or have suggestions for improvement, contact me at emilyharnish49@gmail.com</h6>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default HomePageApp;