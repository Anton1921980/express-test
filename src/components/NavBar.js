import React from 'react';
import { Container, Form, Nav, Navbar, NavDropdown, Button, FormControl, Offcanvas } from "react-bootstrap";
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = ( props ) =>
{
    const [ border, setBorder ] = useState( 'black' );
    const [ clicked, setClicked ] = useState( false );

    const [ mobile, setMobile ] = useState( false );
    const [ color, setColor ] = useState( '#018FDE' );

    const styles = {
        borderColor: border,
    }
    const styleHome = {
        color: mobile && color,
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>                  
                    <Navbar.Brand href="/home">
                        {/* Express */ }
                        <svg width="110" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.54998 21.0819H11.6946V25.6873H0V0H11.6946V4.52605H5.54998V10.5608H11.2982V14.928H5.54998V21.0819Z" fill="#121212" />
                            <path d="M21.5251 19.335L18.5915 25.6873H13.0812L18.4726 15.3648L13.438 6.31265H19.2258L21.5251 12.1092L23.8244 6.31265H29.6122L24.5776 15.3648L29.969 25.6873H24.4587L21.5251 19.335Z" fill="#121212" />
                            <path d="M41.4069 26.0844H40.5744C39.2265 26.0844 38.1429 25.7668 37.3237 25.1315V32H32.0115V6.31265H36.4912V7.74194C37.3104 6.5244 38.6715 5.91563 40.5744 5.91563H41.4069C44.684 5.91563 46.3226 7.66253 46.3226 11.1563V20.8437C46.3226 24.3375 44.684 26.0844 41.4069 26.0844ZM37.3237 10.5211V21.4789C37.3237 21.6907 37.3897 21.8759 37.5219 22.0347C37.6804 22.1936 37.8654 22.273 38.0769 22.273H40.2572C40.4687 22.273 40.6404 22.1936 40.7726 22.0347C40.9312 21.8759 41.0104 21.6907 41.0104 21.4789V10.5211C41.0104 10.3093 40.9312 10.1241 40.7726 9.96526C40.6404 9.80645 40.4687 9.72705 40.2572 9.72705H38.0769C37.8654 9.72705 37.6804 9.80645 37.5219 9.96526C37.3897 10.1241 37.3237 10.3093 37.3237 10.5211Z" fill="#121212" />
                            <path d="M58.1816 5.91563H59.2124V11.0769H56.5959C55.6974 11.0769 55.2481 11.5401 55.2481 12.4665V25.6873H49.9359V6.31265H54.7724V8.17866C55.5388 6.66998 56.6752 5.91563 58.1816 5.91563Z" fill="#121212" />
                            <path d="M70.9841 5.91563C74.2612 5.91563 75.8998 7.66253 75.8998 11.1563V17.4293H66.9009V21.4789C66.9009 21.6907 66.967 21.8759 67.0991 22.0347C67.2577 22.1936 67.4426 22.273 67.6541 22.273H69.8344C70.0459 22.273 70.2177 22.1936 70.3498 22.0347C70.5084 21.8759 70.5877 21.6907 70.5877 21.4789V19.335H75.8998V20.8437C75.8998 24.3375 74.2612 26.0844 70.9841 26.0844H66.5044C63.2273 26.0844 61.5887 24.3375 61.5887 20.8437V11.1563C61.5887 7.66253 63.2273 5.91563 66.5044 5.91563H70.9841ZM66.9009 13.9355H70.5877V10.3623C70.5877 10.1505 70.5084 9.96526 70.3498 9.80645C70.2177 9.64764 70.0459 9.56824 69.8344 9.56824H67.6541C67.4426 9.56824 67.2577 9.64764 67.0991 9.80645C66.967 9.96526 66.9009 10.1505 66.9009 10.3623V13.9355Z" fill="#121212" />
                            <path d="M87.9342 13.5385C91.2113 13.5385 92.8499 15.2854 92.8499 18.7792V20.8437C92.8499 24.3375 91.2113 26.0844 87.9342 26.0844H83.5338C80.2567 26.0844 78.6181 24.3375 78.6181 20.8437V19.6129H83.5338V21.3598C83.5338 21.5715 83.5999 21.7568 83.732 21.9156C83.8906 22.0744 84.0756 22.1538 84.287 22.1538H87.5377C87.7492 22.1538 87.9209 22.0744 88.0531 21.9156C88.2116 21.7568 88.2909 21.5715 88.2909 21.3598V18.9777C88.2909 18.7659 88.2116 18.5806 88.0531 18.4218C87.9209 18.263 87.7492 18.1836 87.5377 18.1836H83.4545C80.1774 18.1836 78.5388 16.4367 78.5388 12.9429V11.1563C78.5388 7.66253 80.1774 5.91563 83.4545 5.91563H87.617C90.8941 5.91563 92.5327 7.66253 92.5327 11.1563V11.871H87.617V10.6402C87.617 10.4285 87.5377 10.2432 87.3792 10.0844C87.247 9.92556 87.0752 9.84616 86.8638 9.84616H83.8509C83.6395 9.84616 83.4545 9.92556 83.296 10.0844C83.1638 10.2432 83.0977 10.4285 83.0977 10.6402V12.7444C83.0977 12.9562 83.1638 13.1414 83.296 13.3002C83.4545 13.4591 83.6395 13.5385 83.8509 13.5385H87.9342Z" fill="#121212" />
                            <path d="M105.084 13.5385C108.361 13.5385 110 15.2854 110 18.7792V20.8437C110 24.3375 108.361 26.0844 105.084 26.0844H100.684C97.4068 26.0844 95.7682 24.3375 95.7682 20.8437V19.6129H100.684V21.3598C100.684 21.5715 100.75 21.7568 100.882 21.9156C101.041 22.0744 101.226 22.1538 101.437 22.1538H104.688C104.899 22.1538 105.071 22.0744 105.203 21.9156C105.362 21.7568 105.441 21.5715 105.441 21.3598V18.9777C105.441 18.7659 105.362 18.5806 105.203 18.4218C105.071 18.263 104.899 18.1836 104.688 18.1836H100.605C97.3275 18.1836 95.6889 16.4367 95.6889 12.9429V11.1563C95.6889 7.66253 97.3275 5.91563 100.605 5.91563H104.767C108.044 5.91563 109.683 7.66253 109.683 11.1563V11.871H104.767V10.6402C104.767 10.4285 104.688 10.2432 104.529 10.0844C104.397 9.92556 104.225 9.84616 104.014 9.84616H101.001C100.79 9.84616 100.605 9.92556 100.446 10.0844C100.314 10.2432 100.248 10.4285 100.248 10.6402V12.7444C100.248 12.9562 100.314 13.1414 100.446 13.3002C100.605 13.4591 100.79 13.5385 101.001 13.5385H105.084Z" fill="#121212" />
                        </svg>

                    </Navbar.Brand>                 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"
                        onClick={ () => { setMobile( true ) } }
                    />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center'>
                        <Nav>
                            <NavLink to='/' exact={true} className='nav-link' >
                                <span
                                    style={ styleHome }
                                >
                                    Home
                                </span>
                            </NavLink>
                            <NavDropdown.Divider />
                            <NavLink to='/about' exact={true} className='nav-link'>About us</NavLink>
                            <NavDropdown.Divider />                         
                            <NavDropdown title="Our services" id="collasible-nav-dropdown"
                                onClick={ () => { mobile === true && setColor( 'black' ) } }
                            >
                                <NavDropdown.Item><NavLink className='nav-link' to='/lorem'>Lorem ipsum</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink className='nav-link' to='/lorem'>Lorem ipsum</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink className='nav-link' to='/lorem'>Lorem ipsum</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink className='nav-link' to='/lorem'>Lorem ipsum</NavLink></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Divider />
                            <Nav.Link href="#contact" onClick={ props.executeScroll }>Contact us</Nav.Link>
                            <NavDropdown.Divider />
                        </Nav>

                    </Navbar.Collapse>
                    <div className='navbar-toggler-menu'>Menu</div>
                    <Nav className='call'>
                        <div className='us'
                            style={ styles }
                        >
                        </div>
                        <Nav.Link exact={true} className='call_us' href="#callus"
                            onClick={ () => { setBorder( 'transparent' ); setClicked( true ) } }
                            onMouseEnter={ () => setBorder( 'transparent' ) }
                            onMouseLeave={ () => !clicked && setBorder( 'black' ) }
                        >
                            <span>Call us</span>
                        </Nav.Link>
                    </Nav>
                    <Nav className='toggle'>
                        <div className='us'
                            style={ styles }
                        >
                        </div>
                        <Nav.Link className='call_us' href="#callus"
                            onClick={ () => { setBorder( 'transparent' ); setClicked( true ) } }
                            onMouseEnter={ () => setBorder( 'transparent' ) }
                            onMouseLeave={ () => !clicked && setBorder( 'black' ) }
                        >
                            <span>Call us</span>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;