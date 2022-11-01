import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from 'react-icons/fa';
import '../Assets/styles/style.css';
import { Container } from 'react-bootstrap';

function Incometransaction() {
    return (
        <>
            <Container>
                <div className="income mt-5">
                    <p className='fw-bold fs-1'>Income Transaction</p>
                    <table className='table'>
                        <tr className='bg-secondary text-center'>
                            <th>No</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Products Order</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Sugeng No Pants</td>
                            <td>Cileungsi</td>
                            <td>Pkaket Geprek, Paket ke..</td>
                            <td className='text-warning'>Waiting Approve</td>
                            <td>
                                <div className="d-md-flex gap-2">
                                    <button className='btn btn-danger w-100 border-0'>Cancle</button>
                                    <button className='btn btn-success w-100 border-0'>Approve</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Haris Gams</td>
                            <td>Serang </td>
                            <td>Pkaket Geprek, Paket ke..</td>
                            <td className='text-success'>Success</td>
                            <td className='text-center'><span ><Icon.FaCheckCircle className='text-success' /></span></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Aziz Union</td>
                            <td>Bekasi</td>
                            <td>Pkaket Geprek, Paket ke..</td>
                            <td className='text-danger'>Cancel</td>
                            <td className='fw-bold text-center text-danger'>X</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Lae Tanjung Balai</td>
                            <td>Tanjung Balai</td>
                            <td>Pkaket Geprek, Paket ke..</td>
                            <td className='text-primary'>On The Way</td>
                            <td className='text-center'><span ><Icon.FaCheckCircle className='text-success' /></span></td>
                        </tr>
                    </table>
                </div>
            </Container>
        </>
    )
}

export default Incometransaction