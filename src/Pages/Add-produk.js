import React, { useState } from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap';
import GlobalForm from '../Components/Atoms/Global-form';
import * as Icon from 'react-icons/fa';
import { useMutation, useQuery } from 'react-query';
import { API } from '../config/Api';
import { Link, useNavigate } from 'react-router-dom';

function AddProduk() {
    const title = "Add Product"
    document.title = "Foodways | " + title

    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        image: "",
        name: "",
        desc: "",
        price: 0,
        qty: 0,
    })

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === "file" ? e.target.files : e.target.value,
        });

        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url)
        }
    }

    const handleOnSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            const formData = new FormData();
            formData.set("image", form.image[0], form.image[0].name);
            formData.set("name", form.name);
            formData.set("desc", form.desc);
            formData.set("price", form.price);
            formData.set("qty", form.qty);
            const data = await API.post("/product", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            if (data.data.code === 200) {
                const alert = (
                    <Alert variant="success" className="py-1 fw-bold">
                        Product has been added
                    </Alert>
                )
                setMessage(alert);
                setPreview(null)
                setForm({
                    image: "",
                    name: "",
                    desc: "",
                    price: 0,
                    qty: 0,
                })

                const timer = setTimeout(navigates, 1000);

                function navigates() {
                    navigate("/ListProduct");
                }


            }
        } catch (error) {

            console.log(error.data.data.message);
            const alert = (
                <Alert variant="danger" className="py-1">
                    {error.data.data.message}
                </Alert>
            )
            setMessage(alert);
        }
    })

    return (
        <>
            <Container>
                <div className="add-produk mt-5">
                    <div className="d-md-flex align-items-center">
                        <p className="fs-5 fw-bold me-3"><Link to={"/ListProduct"} className="text-danger"><Icon.FaArrowLeft /> Back |</Link> </p>
                        <p className='fs-3 fw-bold'>Add Produk</p>
                    </div>
                    <hr />
                    {message && message}
                    <Form onSubmit={(e) => handleOnSubmit.mutate(e)}>
                        {preview && (
                            <div>
                                <img className='rounded'
                                    src={preview}
                                    style={{
                                        maxWidth: "150px",
                                        maxHeight: "150px",
                                        objectFit: "cover",
                                    }}
                                    alt={preview}
                                />
                            </div>
                        )}
                        <Form.Group className="mt-2 mb-3" controlId="formBasicimage">
                            {/* <button className="btn text-white mt-3 mt-md-0 d-flex justify-content-between align-items-center" style={{ backgroundColor: "#433434" }}>
                                Attach Image &nbsp;<Icon.FaPaperclip />
                            </button> */}
                            <Form.Label className="btn text-white mt-3 mt-md-0" style={{
                                backgroundColor: "#433434"
                            }}>
                                Upload file &nbsp;<Icon.FaPaperclip />
                            </Form.Label>
                            <GlobalForm
                                type="file"
                                name="image"
                                onChange={handleOnChange}
                                hidden
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <GlobalForm
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleOnChange}
                                placeholder='Produk Name'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 border-2" controlId="formBasicdecription">
                            <Form.Control as="textarea" rows={3} style={{ resize: "none" }}
                                name='desc'
                                value={form.desc}
                                onChange={handleOnChange}
                                placeholder='Description'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 border-2" controlId="formBasicPrice">
                            <GlobalForm
                                type='number'
                                name='price'
                                value={form.price}
                                onChange={handleOnChange}
                                placeholder='Price'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 border-2" controlId="formBasicQty">
                            <GlobalForm
                                type='number'
                                name='qty'
                                value={form.qty}
                                onChange={handleOnChange}
                                placeholder='Qantity'
                            />
                        </Form.Group>
                        <Form.Group className='mt-5 mb-5 d-flex justify-content-md-end justify-content-center'>
                            <Button type='submit' style={{ backgroundColor: "#433434", width: "200px" }} className="border-0">
                                Save
                            </Button>
                        </Form.Group>
                    </Form>

                </div>
            </Container>
        </>
    )
}

export default AddProduk;