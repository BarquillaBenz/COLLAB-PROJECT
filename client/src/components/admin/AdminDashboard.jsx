import React from "react";
import './AdminDashboard.css'
import RecentBorrowsTable from "./RecentBorrowsTable.jsx";
//ICONS
import { FaRegUserCircle, FaRegCalendarCheck, FaRegUser } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineInventory2 } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { MdOutlinePending } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
// ROUTE
import { Link } from "react-router-dom";

function AdminDashboard() {
    return (
        <>
            <div className="row">
                {/* ADMIN MENU */}
                <div className="col-lg-2 col-md-2" id="adminNav">
                    <div className="adminIcon">
                        <FaRegUserCircle />
                        <h5>admin</h5>
                    </div>
                    <div className="adminMenu">
                        <div className="dashboard">
                            <BiSolidDashboard />
                            <h5>Dashboard</h5>
                        </div>
                        <div className="inventory">
                            <MdOutlineInventory2 />
                            <Link to='/inventorypage'>
                                <h5>Inventory</h5>
                            </Link>
                        </div>
                        <div className="borrows">
                            <FaRegCalendarCheck />
                            <h5>Borrows</h5>
                        </div>
                        <div className="profile">
                            <FaRegUser />
                            <h5>Profile</h5>
                        </div>
                        <div className="signout">
                            <CiLogout />
                            <h5>Sign out</h5>
                        </div>
                    </div>
                </div>


                {/* DASHBOARD PAGE  */}
                <div className="col-lg-10 col-md-10">
                    <h1 className="welcomeTxt">Welcome back, <span>admin!</span></h1>
                    <div className="dashboardLine">.</div>
                    <div className="dashboardPage">
                        <h3>Dashboard</h3>

                        <div className="row">
                            <div className="col-lg-3" id="pending">
                                <MdOutlinePending />
                                <h3>0</h3>       {/* VALUE*/}
                                <h5>Pending Requests</h5>
                            </div>

                            <div className="col-lg-3" id="approved">
                                <AiOutlineLike />
                                <h3>0</h3>       {/* VALUE*/}
                                <h5>Approved</h5>
                            </div>

                            <div className="col-lg-3" id="declined">
                                <IoMdCloseCircleOutline />
                                <h3>0</h3>       {/* VALUE*/}
                                <h5>Declined</h5>
                            </div>

                            {/* RECENT ORDERS TABLE */}
                            <RecentBorrowsTable></RecentBorrowsTable>

                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default AdminDashboard

