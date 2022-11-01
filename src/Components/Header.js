import React, { useContext, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from 'react-bootstrap';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import GlobalButton from './Atoms/Global-button';
import { Link, useParams } from 'react-router-dom';
import { CounterContext } from '../context/Data-counter'
import Image from '../Assets/Image/User/orang.png';
import * as Icon from "react-icons/fa";
import { UserContext } from '../context/User-context';
import { useMutation, useQuery } from 'react-query';
import { API } from '../config/Api';

function Header() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [state, dispatch] = useContext(UserContext);
    const [dataCounter, setDataCounter] = useContext(CounterContext);

    function Logout() {
        dispatch({
            type: "AUTH_ERROR",
        });
        setShowLogin(true);
    }
    return (
        <>
            <Navbar expand="lg" sticky="top" className="navbar" >
                <Container>
                    <Navbar.Brand>
                        {state?.isLogin ? (
                            state.user.role === "User" ? <Link to="/User"><img src='./image/icon.png' alt='Brand' /></Link> : <Link to="/Admin"><img src='./image/icon.png' alt='Brand' /></Link>
                        ) : (
                            <Link to="/"><img src='./image/icon.png' alt='Brand' /></Link>
                        )}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end fw-bold'>
                        {state.isLogin ? (<Nav className="me-end">
                            {state.user.role === "User" ? (
                                <div className="dropdown">
                                    <Link to="/ChartOrder" className='text-black position-relative me-2'>
                                        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "70%" }}>
                                            {dataCounter.counter.length}
                                        </span>
                                        <Icon.FaCartArrowDown className='fs-1 me-3' />
                                    </Link>
                                    <img src={Image} alt="Me" className="dropdown dropdown-toggle" data-bs-toggle="dropdown"
                                    />
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to={`/Profile/${state?.user.id}`}><Icon.FaUserAlt className='me-2' /> Profile</Link></li>
                                        <li className='dropdown-item' onClick={Logout} style={{ cursor: "pointer" }} ><Icon.FaSignOutAlt className='me-2' /> Logout</li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="dropdown" >
                                    <img src={Image} alt="Me" className="dropdown dropdown-toggle" data-bs-toggle="dropdown" />
                                    <ul className="dropdown-menu" style={{ marginLeft: "-50px" }}>
                                        <li><Link className="dropdown-item" to={`/Profile/${state?.user.id}`} ><Icon.FaUserAlt className='me-2' /> Profile Partner</Link></li>
                                        <li><Link className="dropdown-item" to="/AddProduct"><Icon.FaHamburger className='me-2' /> Add Product</Link> </li>
                                        <li><Link className="dropdown-item" to="/ListProduct"><Icon.FaListAlt className='me-2' /> List Product</Link> </li>
                                        <li className='dropdown-item' onClick={Logout} style={{ cursor: "pointer" }} ><Icon.FaSignOutAlt className='me-2' /> Logout</li>
                                    </ul>
                                </div>
                            )}
                        </Nav>) : (<Nav className="me-end">
                            <GlobalButton
                                name='Register'
                                className='link btn text-white me-3 border-0 mb-3 mb-lg-0'
                                onClick={() => setShowRegister(true)}
                            />
                            <GlobalButton
                                name='Login'
                                className='link btn text-white border-0'
                                onClick={() => setShowLogin(true)}
                            />
                        </Nav>)
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Login show={showLogin} setShow={setShowLogin} setShowRegister={setShowRegister} />
            <Register show={showRegister} setShow={setShowRegister} setShowLogin={setShowLogin} />
        </>

    )
}

export default Header