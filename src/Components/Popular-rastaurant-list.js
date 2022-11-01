import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { API } from '../config/Api';
import Login from '../Pages/Login';
import { UserContext } from '../context/User-context';

export const PopularList = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [state, dispatch] = useContext(UserContext)
    let { data: listproductuser } = useQuery("listproductusercache", async () => {
        const response = await API.get("/Users");
        return response.data.data;
    });

    let { data: profileslist } = useQuery("profileslistcache", async () => {
        const response = await API.get("/ProfileUser");
        return response.data.data;
    });



    return (
        <div style={{ backgroundColor: "#e5e5e5" }}>
            <Container>
                <div className="head pt-5">
                    <p className='fw-bold fs-1'>Popular Restaurant</p>
                    <hr />
                </div>
                <div className=" mt-4 d-md-flex flex-wrap gap-4 flex-row justify-content-lg-start justify-content-between" >
                    {listproductuser?.map((item, key) => {
                        return (
                            item?.role === "Partner" && (
                                <div key={key}>
                                    {
                                        profileslist?.map((profilemap, profile_index) => {
                                            return (
                                                profilemap?.user_id === item?.id && (
                                                    <div className='popular-item d-flex gap-3 p-2 mt-3 mt-md-0 shadow rounded align-items-center ' key={profile_index} >
                                                        <img src={profilemap?.image} alt={profilemap?.name} style={{ maxWidth: "70px", borderRadius: "50%" }} />
                                                        {state.isLogin ? (
                                                            <Link to={`/DetailProduct/${profilemap?.user_id}`} className='text-dark fs-5 fw-bold'>{profilemap?.fullname}</Link>
                                                        ) : (
                                                            <Link onClick={() => setShowLogin(true)} className='text-dark fs-5 fw-bold'>{profilemap?.fullname}</Link>
                                                        )}
                                                    </div>
                                                )
                                            )
                                        })
                                    }
                                </div>
                            )
                        )
                    })}
                </div>
            </Container >
            <Login show={showLogin} setShow={setShowLogin} />
        </div >
    );
};