import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';

const Main = () =>
{
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

                <h1>
                    Lorem ipsum set
                    <div>ammet test-test</div>
                </h1>
                <h2>LET US HELP YOU GET IT ALL BACK!</h2>
                <svg width="503" height="11" viewBox="0 0 503 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.5 1L0.5 10H366.5" stroke="#121212" />
                </svg>
                <div>
                    <Row>
                        <Col className='col-md-6 d-flex justify-content-end'>
                            <div >
                                <div style={{textAlign:'start'}}>We currently take cases</div>
                                <div>that are $10,000 US and up</div>
                            </div>

                        </Col>
                        <Col className='col-md-6'>
                            <Nav.Link className='consultation' href="#consultation"
                            >
                                <span>Get a free consultation</span>
                                {/* добавить див или стиль и его стилизовать */ }
                                <div
                                // style={ styles }
                                // onClick={ () => { setBorderOpacity( "0" ); setClicked( true ) } }
                                // onMouseEnter={ () => setBorderOpacity( "0" ) }
                                // onMouseLeave={ () => !clicked && setBorderOpacity( "1" ) }
                                >
                                </div>
                            </Nav.Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </main>
    );
};

export default Main;