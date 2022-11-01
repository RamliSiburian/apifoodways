import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { DetailRestaurant } from '../Data-Dummy/Detail-restaurant';
import { CounterContext } from '../context/Data-counter';
import { useParams } from 'react-router-dom';

function DetailRestaurantList() {
    const [dataCounter, setDataCounter] = useContext(CounterContext);
    const [dataDetailMenu, setDataDetailMenu] = useState([])
    const { resto } = useParams()

    useEffect(() => {
        const data = DetailRestaurant.filter(item => item.name === resto)
        setDataDetailMenu(data)
    }, [])

    return (
        <div style={{ backgroundColor: "#e5e5e5" }}>
            <Container>
                <div className="near-head pt-5">
                    <p className="fw-bold fs-1">{resto} Menus</p>
                    <hr />
                </div>
                <div className="pb-5 mt-4 d-md-flex flex-row flex-wrap gap-5 justify-content-lg-start justify-content-md-center ">
                    {dataDetailMenu?.map((item, index) => {
                        return (
                            item?.menu?.map((bensu, bensu_index) => {
                                return (
                                    <div>
                                        <Card className="detail-restaurant mt-3 mt-md-0 shadow" key={index}>
                                            <Card.Img variant="top" src={bensu.image} style={{ height: "140px" }} />
                                            <Card.Body>
                                                <Card.Title>{bensu.name}</Card.Title>
                                                <Card.Text className='text-danger'>
                                                    {bensu.price}
                                                </Card.Text>
                                                <Button variant="warning" className='w-100'>Add to chart</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        )
                    })}
                </div>
            </Container>
        </div >
    )
}

export default DetailRestaurantList;