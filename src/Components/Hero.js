import React from 'react'

function Hero() {
    return (
        <div className="header pb-5">
            <div className="header-info d-lg-flex gap-5 w-75 m-auto">
                <div className="left w-100">
                    <div className="head-title">
                        <p className='fw-bold fs-1'>Are You Hungry ?</p>
                        <p className='fw-bold fs-1'>Express Home Delivery</p>
                    </div>
                    <div className="head-content d-md-flex gap-3 mt-4">
                        <div className="hr-image text-center mb-sm-3" >
                            <img src='./image/hr.png' alt="" />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis totam quo soluta corporis inventore laborum. Ex maiores, fugiat rem, natus tenetur molestias quisquam praesentium quam necessitatibus, a sequi esse?
                        </p>
                    </div>
                </div>
                <div className="right text-sm-center mt-sm-5 w-100">
                    <img src='./image/pizza.png' alt="pizza" className='w-100' />
                </div>
            </div>
        </div>
    )
}

export default Hero;