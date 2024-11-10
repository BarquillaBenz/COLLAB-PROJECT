import React from 'react'
import './AdminDashboard.css'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';



//ICONS
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";


function EquipmentList() {
    return (
        <>
            <div className='equipmentListHeader'>
                <h1 >Equipment List</h1>
                <Link to='/addequipment'><button className='btn'>ADD EQUIPMENT</button></Link>
            </div>
            <Table striped bordered className='equipmentList'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ball(sample)</td>
                        <td>Basket Ball</td>
                        <td>654641313</td>
                        <td>round, bouncy</td>
                        <th className='updateDeleteIcons'>
                            <button className='btn' id='updateIcon'><FaRegEdit /></button>
                            <button className='btn' id='deleteIcon'><MdDeleteOutline /></button>
                        </th>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>baseball bat(sample)</td>
                        <td>Base Bat</td>
                        <td>654641313</td>
                        <td>stick</td>
                        <th className='updateDeleteIcons'>
                            <button className='btn' id='updateIcon'><FaRegEdit /></button>
                            <button className='btn' id='deleteIcon'><MdDeleteOutline /></button>
                        </th>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>baseball bat(sample)</td>
                        <td>Base Bat</td>
                        <td>654641313</td>
                        <td>stick</td>
                        <th className='updateDeleteIcons'>
                            <button className='btn' id='updateIcon'><FaRegEdit /></button>
                            <button className='btn' id='deleteIcon'><MdDeleteOutline /></button>
                        </th>
                    </tr>
                </tbody>
            </Table>
        </>

    )
}



export default EquipmentList