import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import '../ProductForms/List.css';

function Category(props) {
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
      <div className='container-table'>

        <h3 className="title">Categories</h3>
        <table className="product-table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>ID</th>
              <th>Category Name</th>
              <th>Category Description</th>



            </tr>
          </thead>
          <tbody>

            {categories && categories.map((data, index) => {
              return (

                <tr key={index}>
                  <td>
                    {index + 1}
                  </td>

                  <td>
                    {data._id}
                  </td>
                  <td>
                    {data.name}
                  </td>
                  <td>
                    {data.cat_description}
                  </td>

                </tr>


              )
            })}

          </tbody>
        </table>

      </div>
    </>
  )
}

export default Category