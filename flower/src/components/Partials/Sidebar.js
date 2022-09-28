import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

function Sidebar() {
    // Getting products from database
	const [product, getProduct] = useState([]);
	const getProductData = () => {
		axios.get(`${process.env.REACT_APP_SERVER_PATH}/items`)
			.then(function (response) {
				// handle success
				console.log(response.data)
				getProduct(response.data);
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
		getProductData()
	}, []);

    const [productdata,setProductData] = useState(product)
    const filterResult = (catItem) => {
        const result = product.filter((curData) => {
            return curData.category === catItem;
        });
        setProductData(result)
    }
    console.log(productdata)
    //Getting Categories from database

	const [categories, getCategories] = useState([]);
	const getCategoriesData = () => {
		axios.get(`${process.env.REACT_APP_SERVER_PATH}/items/category`)
			.then(function (response) {
				// handle success
				getCategories(response.data);
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
		getCategoriesData()
	}, []);

  return (
    <>
     <div id="sidebar" class="left">
                            <div class="sidebar_box"><span class="bottom"></span>
                                <h3>Categories</h3>
                                <div class="content">
                                    <ul class="sidebar_list">
                                    {categories && categories.map((data, key) => {
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