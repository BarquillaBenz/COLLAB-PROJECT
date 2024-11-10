import React from "react";
import './UserDashboard.css'
import buksuLogo from './buksuTransparent.png'
import sportsImg from './sportsImg.jpg'
import furnitureImg from './furnitureImg.jpg'
import electronicsImg from './electronicsImg.jpg'
import welcomeImg from './welcomeImg.jpg'
import { FaRegUserCircle } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';




function UserDashboard() {
    return (
        <>
            <Navbar className="nav" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className="imgContainer"><img className='navImg' src={buksuLogo} /></Navbar.Brand>
                    <Nav className="navLinks">

                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Borrows</Nav.Link>
                        <Nav.Link href="#pricing">About Us</Nav.Link>


                        {/* insert user icon diri */}
                    </Nav>
                </Container>
            </Navbar>


            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h1 className="systemName">GYM EQUIPMENT MANAGEMENT AND BORROWING SYSTEM</h1>
                    <p className="welcomeMsg">Welcome to your dashboard! Easily manage your equipment borrows here.</p>

                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm4">
                            <img src={sportsImg} alt="" id="sportsImg" />
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm4" >
                            <img src={electronicsImg} alt="" id="electronicsImg" />
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm4">
                            <img src={furnitureImg} alt="" id="furnitureImg" />
                        </div>

                        <button className="btn" id="borrowBtn">BORROW</button>

                    </div>
                </div>


                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img className='welcomeImg' src={welcomeImg} alt="" />
                </div>

            </div>



        </>




    )
}

export default UserDashboard