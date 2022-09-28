import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

function Sidebar(props) {
    const { filterResult } = props
    const [category, setCategory] = useState();

    useEffect(() => {
        const getCategoryData = () => {
            axios.get(`${process.env.REACT_APP_SERVER_PATH}/items/categoryFormData`)
                .then(function (response) {
                    setCategory(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                });
        }

        getCategoryData();
    }, []);

  return (
    <>
     <div id="sidebar" class="left">
                            <div class="sidebar_box"><span class="bottom"></span>
                                <h3>Categories</h3>
                                <div class="content">
                                    <ul class="sidebar_list">
                                    {category && category.map((data, key) => {
                                    return (
                                        <>
                                            <li value={data.name} onClick={() => filterResult(data.name)}>{data.name}</li>
                                        </>
                                    )
                                })}
                                    </ul>
                                </div>
                            </div>
                            <div class="sidebar_box"><span class="bottom"></span>
                                <h3>Weekly Special</h3>
                                <div class="content special">
                                    <img src={process.env.PUBLIC_URL + `/assets/images/product/02.jpg`} alt="Flowers" />
                                    <Link to="#">Citrus Burst Bouquet</Link>
                                    <p>
                                        Price:
                                        <span class="price normal_price">$160</span>&nbsp;&nbsp;
                                        <span class="price special_price">$100</span>
                                    </p>
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default Sidebar