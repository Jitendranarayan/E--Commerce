import React from 'react';
import { Container, Row, Col, Tab, Nav, Image, Form, Button, Badge } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import Heading from  '../components/Heading';
import profilePix from '../images/profile-picture.png';
import { FaClipboardList, FaUser } from 'react-icons/fa';
import { GiWallet} from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import './my-account.css';



const MyAccount = () => {
    const [theme] = useThemeHook();
    return (
        <Container className="py-5 mt-5">
            <Heading heading="My Account" />
            <Tab.Container defaultActiveKey="my-orders">
                <Row className="justify-content-evenly mt-4 p-1">
                     <Col sm={3} className={`${theme? 'text-light bg-dark' : 'text-black bg-light'} p-2 rounded h-100 mb-3 user-menu`}>
                        <Row className="mb-3 py-2">
                           <Col xs={3} className="pe-0">
                                <Image
                                    src={profilePix}
                                    thumbnail
                                    fluid
                                    roundedCircle
                                    className="p-0"
                                />
                           </Col> 
                           <Col xs={9} className="pt-1">
                                <span>Hello,</span>
                                <h4>Jitendra Narayan Nikhil</h4>
                           </Col>
                        </Row>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="mb-3">
                                <Nav.Link eventKey="my-orders">
                                    My Orders
                                    <FaClipboardList size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="account-details">
                                    Account Details
                                    <FaUser size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="address">
                                    Address
                                    <IoLocationSharp size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="wallet">
                                    Wallet
                                    <GiWallet size="1.4rem" />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                     </Col>
                     <Col sm={8} className={`${theme? 'text-light bg-dark' : 'text-black bg-light'} p-2 rounded`}>

                     </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default MyAccount;