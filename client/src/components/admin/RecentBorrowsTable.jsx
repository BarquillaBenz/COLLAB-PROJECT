
import Table from 'react-bootstrap/Table';
import './AdminDashboard.css'

function RecentBorrowsTable() {
    return (
        <>
            <div className='tableHeader'>
                <h1>Recent Borrows</h1>
            </div>
            <Table striped bordered className='recentBorrows'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Equipment Name</th>
                        <th>Serial/Equip/Furniture No.</th>
                        <th>Borrow Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </>

    )
}

export default RecentBorrowsTable