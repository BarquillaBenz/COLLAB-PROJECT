import React from "react"
import './AdminDashboard.css'
import Form from 'react-bootstrap/Form';
function AddEquipment() {
    return (
        <div className="row">
            <div className="col-lg-12">
                <Form>
                    <Form.Group className="mb-3" id="nameField">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" id="descriptField">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <button className="btn" id="addBtn">Add</button>
                </Form>

            </div>

        </div>

    )
}

export default AddEquipment