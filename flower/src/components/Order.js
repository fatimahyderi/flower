import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
import axios from 'axios';
import Header from './Partials/Header';
import { Link } from 'react-router-dom';


function Order() {
    const { id } = useParams();
    const [order, getOrder] = useState([]);
    const getOrderData = () => {
        axios.get(`${process.env.REACT_APP_SERVER_PATH}/items/orderdata/${id}`)
            .then(function (response) {
                // handle success
                getOrder(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(() => {
        getOrderData()

    }, []);

    return (
        <>
        <div id="templatemo_wrapper_sp">
                <div id="templatemo_header_wsp">
                    <div id="templatemo_header" class="header_subpage">
                        <div id="site_title"><Link to="#">Floral Shop</Link></div>
                        <Header />

                    </div>
                </div>
                
            <div align="center" >
                <p style={{ color: "red", fontWeight: "700", fontSize: '50px' }}>Thankyou For Shopping {order.firstname}</p>
            </div>
            <div className="esd-block-image es-p5t" align="center" ><Link target="_blank"
                to="https://viewstripo.email"><img className="adapt-img" src="https://tlr.stripocdn.email/content/guids/CABINET_6504dbdad7218f39814ebc2d2809d700/images/66511530704969948.png"
                    alt="Your order is on its way" title="Your order is on its way" width="600" /></Link></div>

            <div className="esd-block-text es-m-txt-c es-p5t es-p10b" align="center">
                <h2>Your order no is {order._id}</h2>


            </div>
            <div align="center">
                <h2>Total Amount {order.totalamount}</h2>

            </div>

            </div>
            
            






        </>


    )
}

export default Order