import React, { useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';

const Main = () =>
{

    const [ border, setBorder ] = useState( 'black' );
    const [ clicked, setClicked ] = useState( false );

    const styles4 = {
        borderColor: border,
        width: 211,
        height: 40,
    }

    return (
        <main>
            <Container fluid>

                <div
                    style={ { position: 'absolute', } }
                // style={ { position: 'absolute', top: 778, left: 218 } }
                >
                    <svg width="576" height="926" viewBox="0 0 576 926" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.14" filter="url(#filter0_f_1_742)">
                            <ellipse cx="61.9921" cy="462.889" rx="285.859" ry="181.241" transform="rotate(-150 61.9921 462.889)" fill="url(#paint0_linear_1_742)" />
                        </g>
                        <defs>
                            <filter id="filter0_f_1_742" x="-451.705" y="0.601807" width="1027.39" height="924.573" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1_742" />
                            </filter>
                            <linearGradient id="paint0_linear_1_742" x1="309.986" y1="417.254" x2="-371.931" y2="512.733" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#072E44" />
                                <stop offset="0.874041" stop-color="#018FDE" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div
                    style={ { position: 'absolute', left: '50%' } }
                // style={ { position: 'absolute', top: 879.78, left: 750.12 } }
                >
                    <svg width="689" height="926" viewBox="0 0 689 926" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.14" filter="url(#filter0_f_1_3468)">
                            <ellipse cx="514.181" cy="462.889" rx="285.859" ry="181.241" transform="rotate(-150 514.181 462.889)" fill="url(#paint0_linear_1_3468)" />
                        </g>
                        <defs>
                            <filter id="filter0_f_1_3468" x="0.483887" y="0.602051" width="1027.39" height="924.573" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_1_3468" />
                            </filter>
                            <linearGradient id="paint0_linear_1_3468" x1="762.175" y1="417.254" x2="80.2584" y2="512.733" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#072E44" />
                                <stop offset="0.874041" stop-color="#018FDE" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>


                <Row className='d-flex justify-content-center mt-5'>
                    <div className='corner-left'>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11V1H11" stroke="#121212" />
                        </svg>
                    </div>

                    <h1 className='mt-5' style={ { width: 864, height: 160 } }>
                        Lorem ipsum set
                        <div>ammet test-test</div>
                    </h1>
                </Row>
                <h2>LET US HELP YOU GET IT ALL BACK!</h2>
                <svg width="503" height="11" viewBox="0 0 503 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.5 1L0.5 10H366.5" stroke="#121212" />
                </svg>
                <div>
                    <Row>
                        <Col className='col-md-6 d-flex justify-content-end'>
                            <div >
                                <div style={ { textAlign: 'start' } }>We currently take cases</div>
                                <div>that are $10,000 US and up</div>
                            </div>

                        </Col>
                        <Col className='col-md-6'>
                            <Nav className='consultation'>
                                <div className='free'
                                    style={ styles4 }
                                >
                                </div>
                                <Nav.Link className='consultation_free' href="#consultation"
                                    onClick={ () => { setBorder( 'transparent' ); setClicked( true ) } }
                                    onMouseEnter={ () => setBorder( 'transparent' ) }
                                    onMouseLeave={ () => !clicked && setBorder( 'black' ) }
                                >
                                    Get a free consultation
                                </Nav.Link>
                            </Nav>
                        </Col>
                        <div className='corner-right'>
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0L10 10L0 10" stroke="#121212" />
                            </svg>

                        </div>
                    </Row>
                </div>
            </Container>
        </main>
    );
};

export default Main;