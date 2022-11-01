import React, { useContext, useState } from 'react';
import '../Assets/styles/style.css';
import { Button, Container, Form } from 'react-bootstrap';
import ItemImage from '../Assets/Image/Detail-restaurant/geprek.png';
import * as Icon from 'react-icons/fa';
import { CounterContext } from '../context/Data-counter';
import GlobalForm from '../Components/Atoms/Global-form';

function ChartOrder() {
    const [dataCounter, setDataCounter] = useContext(CounterContext);

    function AddUser(item) {
        let newData = dataCounter.counter;
        newData.push({ ...item });
        setDataCounter({
            type: "ADD",
            valCounter: newData,
        })
    }

    function LessUser() {
        let newData = dataCounter.counter;
        newData.splice(0, 1);
        setDataCounter({
            type: "LESS",
            valCounter: newData,
        })

    }
    function LessAll() {
        let length = dataCounter.counter.length;
        let newData = dataCounter.counter;
        newData.splice(0, length);
        setDataCounter({
            type: "LESS",
            valCounter: newData,
        })

    }





    return (
        <>
            <Container >
                <div className="chart-order">
                    <p className='fw-bold fs-3'>Geprek Bensu</p>
                    <hr />

                    <p className='fw-bold fs-6 mb-3'>Review Your Order</p>
                    <div className="delivery-order">
                        <Form>
                            <Form.Group className="mb-3 d-md-flex gap-3" controlId="formBasicPassword">
                                <GlobalForm
                                    type='text'
                                    name='location'
                                    placeholder='Location'
                                />
                                <button className="btn text-white mt-3 mt-md-0 d-flex gap-2 justify-content-center align-items-center" style={{ backgroundColor: "#433434" }}>Select on map <Icon.FaMapMarkedAlt /></button>
                            </Form.Group>
                        </Form>
                    </div>
                    <p className='fw-bold fs-6 mb-3 mt-5'>Review Your Order</p>
                    <div className="chart d-md-flex gap-5">
                        <div className="chart-item w-100">
                            <div className="charts items d-md-flex gap-3 align-items-center">
                                <div className="image">
                                    <img src={ItemImage} alt="geprek" width="150px" className='rounded' />
                                </div>
                                <div className="detail d-flex justify-content-between w-100 h-100 p-2">
                                    <div className="d-flex flex-column justify-content-center">
                                        <p>Paket Geprek</p>
                                        <p>
                                            <span><Icon.FaMinus onClick={() => LessUser()}></Icon.FaMinus> </span>
                                            <span className='ms-2 me-2 fs-5'> {dataCounter.counter.length} </span>
                                            <span><Icon.FaPlus onClick={() => AddUser()}></Icon.FaPlus> </span>
                                        </p>
                                    </div>
                                    <div className="temporary-price">
                                        <p className='text-danger'>Rp 15.000</p>
                                        <Icon.FaTrashAlt onClick={() => LessAll()}></Icon.FaTrashAlt>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="chart-price w-100">
                            <div className="charts ">
                                <div className="sub-total priceses">
                                    <p>Sub Total</p>
                                    <p className='text-danger'>Rp 15.000</p>
                                </div>
                                <div className="qty priceses">
                                    <p>Qty</p>
                                    <p>{dataCounter.counter.length}</p>
                                </div>
                                <div className="ongkir priceses">
                                    <p>Ongkir</p>
                                    <p className='text-danger'>Rp 10.000</p>
                                </div>
                            </div>
                            <div className="total priceses mt-3" >
                                <p>Total</p>
                                <p className='text-danger'>Rp 25.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-md-flex justify-content-md-end mt-5 justify-content-center">
                        <Button style={{ backgroundColor: "#433434", width: "200px" }} className="border-0">
                            Save
                        </Button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ChartOrder;