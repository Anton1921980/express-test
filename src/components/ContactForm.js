import React, { useState } from 'react';
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import '../fonts/Vector/vector.ttf';



const ContactForm = (props) =>
{
    const [ visible, setVisible ] = useState( 0 )
    const [ visible2, setVisible2 ] = useState( 0 )
    const [ visible3, setVisible3 ] = useState( 0 )

    const [ placeHolderFirst, setPlaceHolderFirst ] = useState( 'First Name' )
    const [ placeHolderLast, setPlaceHolderLast ] = useState( 'Last Name' )
    const [ placeHolderEmail, setPlaceHolderEmail ] = useState( 'Enter email' )

    const [ border, setBorder ] = useState( 'black' );
    const [ clicked, setClicked ] = useState( false );


    const styles = {
        position: 'absolute',
        bottom: 30,
        left: 16,
        color: '#8792A7',
        fontSize: 10,
        width: 56,
        height: 12,
        padding: 4,
        background: 'white',
        boxSizing: 'content-box'
    }
    const styles1 = {
        opacity: visible,
    }
    const styles2 = {
        opacity: visible2,
    }
    const styles3 = {
        opacity: visible3,
    }
    const styles4 = {
        borderColor: border,
        width: 211,
        height: 40,
    }
    return (
        <div style={ { marginTop: 170 } }>
            <h2  ref={props.myRef}>Contact <span style={ { color: 'black' } }>Us</span></h2>
            <Container fluid className=' mt-5 d-flex'>
                <Col className='d-flex justify-content-center mt-3 form-container' style={ { width: '1088px', height: '523px' } }>                
                    <Form style={ { width: 456 } }>
                        <Row className="mb-3" style={ { width: 456 } }>
                            <Form.Group as={ Col } controlId="formGridName" style={ { position: 'relative' } }>
                                <div style={ { ...styles, ...styles1 } }>First Name</div>
                                <Form.Control
                                    placeholder={ placeHolderFirst }
                                    onClick={ () => { setVisible( 1 ); setPlaceHolderFirst( 'Enter text' ) } }
                                    onMouseLeave={ () => { setVisible( 0 ); setPlaceHolderFirst( 'First Name' ) } }
                                />
                            </Form.Group>

                            <Form.Group as={ Col } controlId="formGridLastName" style={ { position: 'relative' } }>
                                <div style={ { ...styles, ...styles2 } }>Last Name</div>
                                <Form.Control
                                    placeholder={ placeHolderLast }
                                    onClick={ () => { setVisible2( 1 ); setPlaceHolderLast( 'Enter text' ) } }
                                    onMouseLeave={ () => { setVisible2( 0 ); setPlaceHolderLast( 'Last Name' ) } }
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3" style={ { width: 456 } }>
                            <Col className="my-1 col-6">
                                <Form.Label
                                    className="me-sm-2"
                                    htmlFor="inlineFormCustomSelect"
                                    visuallyHidden
                                >
                                    Preference
                                </Form.Label>
                                <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                    <option data-icon='/Vector.png' value="0">+1</option>
                                    <option data-content='' value="vector ">+2  &#xe900</option>
                                    <option value="2">+3</option>
                                    <option data-thumbnail="/Vector.png" value="3">+4</option>
                                </Form.Select>
                            </Col>
                            <Col className="my-1 col-6">
                                <Form.Group as={ Col } controlId="formGridLastName" style={ { position: 'relative' } }>
                                    <div style={ { ...styles, ...styles3 } }>Enter email</div>
                                    <Form.Control
                                        placeholder={ placeHolderEmail }
                                        onClick={ () => { setVisible3( 1 ); setPlaceHolderEmail( 'email' ) } }
                                        onMouseLeave={ () => { setVisible3( 0 ); setPlaceHolderEmail( 'Enter email' ) } }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3" style={ { width: 456 } }>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control
                                    placeholder="Tell Us What Happened"
                                    as="textarea" rows={ 3 } />
                            </Form.Group>
                        </Row>
                        <Col className='col-md-12 d-flex justify-content-center'>
                            <Nav className='send'>
                                <div className='to'
                                    style={ styles4 }
                                >
                                </div>
                                <Nav.Link className='send_to' href="#send"
                                    onClick={ () => { setBorder( 'transparent' ); setClicked( true ) } }
                                    onMouseEnter={ () => setBorder( 'transparent' ) }
                                    onMouseLeave={ () => !clicked && setBorder( 'black' ) }
                                >
                                    Send
                                </Nav.Link>
                            </Nav>
                        </Col>
                    </Form>
                </Col>
            </Container >
        </div>
    );
};

export default ContactForm;