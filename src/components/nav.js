import React from 'react';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

function Navigation() {
    return (
        <div className="Navigation">
            <Navbar className="custom-navbar" expand="lg">
                <Container fluid className="d-flex">
                    {/* 왼쪽: 로고 */}
                    <div className="logo-section d-flex align-items-center">
                        <Navbar.Brand as={Link} to="/">
                            <img
                                src="/phonedue.png"
                                alt="Logo"
                                height="100"
                                className="d-inline-block align-middle"
                            />
                        </Navbar.Brand>
                    </div>

                    {/* 오른쪽 영역 */}
                    <div className="right-section flex-grow-1 d-flex flex-column justify-content-center">
                        {/* 상단 줄 */}
                        <div className="top-row d-flex justify-content-end align-items-center mb-2 gap-3">
                            <Nav.Link as={Link} to="/support">고객지원</Nav.Link>
                            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
                            <Form className="d-flex search-form mb-0">
                                <FormControl type="text" placeholder="Search" className="me-2" />
                                <button type="submit" className="btn-search">
                                    <img src="/search.png" alt="Search" height="24" />
                                </button>
                            </Form>
                        </div>

                        {/* 메뉴 줄 */}
                        <div className="menu-row d-flex justify-content-end">
                            <Nav className="nav-menu">
                                <Nav.Link as={Link} to="/smartphones">스마트폰</Nav.Link>
                                <Nav.Link as={Link} to="/tablets">태블릿</Nav.Link>
                                <Nav.Link as={Link} to="/accessories">액세서리</Nav.Link>
                                <Nav.Link as={Link} to="/event">이벤트</Nav.Link>
                                <Nav.Link as={Link} to="/exhibition">기획전</Nav.Link>
                            </Nav>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;








