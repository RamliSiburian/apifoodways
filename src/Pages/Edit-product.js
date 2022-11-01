import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import * as Icon from "react-icons/fa";
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import GlobalButton from '../Components/Atoms/Global-button';
import GlobalForm from '../Components/Atoms/Global-form';
import { API } from '../config/Api';


function EditProduct() {
    const { id } = useParams()
    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState(null);



    let { data: editProducts } = useQuery("editProductsCache", async () => {
        const response = await API.get("/product/" + id);
        return response.data.data;
    })

    const [form, setForm] = useState({
        name: "",
        desc: "",
        image: "",
        price: "",
        qty: "",
    })

    useEffect(() => {
        if (editProducts) {
            setPreview(editProducts.image);
            setForm({
                ...form,
                name: editProducts.name,
                desc: editProducts.desc,
                price: editProducts.price,
                qty: editProducts.qty,
            })
        }
    }, [editProducts]);

    // console.log("ini products", editProducts);

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === "file" ? e.target.files : e.target.value,
        });

        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
        }
    }

    return (
        <>
            <Container>
                <div className="edit-product mt-5 d-md-flex align-items-center">
                    <p className="fs-5 fw-bold me-3"><Link to="/ListProduct" className="text-danger"><Icon.FaArrowLeft /> Back |</Link> </p>
                    <p className="fw-bold fs-2">
                        Edit Product
                    </p>
                </div>
                <hr />

                {/* {message && message} */}
                <Form>
                    {preview && (
                        <div>
                            <img className='rounded mb-2'
                                src={preview}
                                style={{
                                    maxWidth: "150px",
                                    maxHeight: "150px",
                                    objectFit: "cover",
                                }}
                                alt="No image found"
                            />
                        </div>
                    )}
                    <div className="mb-3 d-md-flex gap-3">
                        <Form.Group className="w-100" controlId="formBasicEmail">
                            <Form.Label>
                                Product Name
                            </Form.Label>
                            <GlobalForm
                                type='text'
                                name='name'
                                defaultValue={form?.name}
                                onChange={handleOnChange}
                                placeholder={form?.name}
                            />
                        </Form.Group>
                        <Form.Group className='w-100 text-end' controlId="formBasicimage">
                            <GlobalForm
                                type="file"
                                name="image"
                                // onChange={handleOnChange}
                                hidden
                            />
                            <Form.Label className="btn text-white" style={{
                                backgroundColor: "#433434"
                            }}>
                                Upload image &nbsp; <Icon.FaImage />
                            </Form.Label>
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3 border-2" controlId="formBasicPhone">
                        <Form.Label>
                            Description
                        </Form.Label>
                        <GlobalForm
                            type='text'
                            name='desc'
                            defaultValue={form?.desc}
                        // onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>
                            Price
                        </Form.Label>
                        <GlobalForm
                            type='text'
                            name='price'
                            defaultValue={form?.price}
                        // onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicLocation">
                        <Form.Label>
                            Quantity
                        </Form.Label>
                        <div className="mb-3 d-md-flex gap-3">
                            <GlobalForm
                                type='text'
                                name='qty'
                                defaultValue={form?.qty}
                            // onChange={handleOnChange}
                            />
                            <button className="btn text-white mt-3 mt-md-0 d-flex gap-2 justify-content-center align-items-center" style={{ backgroundColor: "#433434" }}>Select on map <Icon.FaMapMarkedAlt /></button>
                        </div>
                    </Form.Group>
                    <Form.Group className='mt-5 d-flex justify-content-md-end justify-content-center'>
                        <Button type='submit' style={{ backgroundColor: "#433434", width: "200px" }} className="border-0 mb-5">
                            Save
                        </Button>
                    </Form.Group>
                </Form>

            </Container>
        </>
    )
}

export default EditProduct;