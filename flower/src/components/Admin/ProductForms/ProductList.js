import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './List.css';

const ProductsList = () => {

  const [products, setProducts] = React.useState();

  React.useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    axios.get(`http://localhost:8080/items/viewproducts`)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(`error ${error}`);
      })
  }

  const deleteProduct = (id) => {
    axios.get(`http://localhost:8080/items/deleteproduct/${id}`)
      .then(function (res) {
        console.log('product deleted')
      })
  }

  return (
    <>


      <div className='container-table'>

        <h3 className="title">Product List</h3>
        <table className="product-table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>ID</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Category</th>
              <th colSpan='3'>Actions</th>
              
            </tr>
          </thead>
          <tbody>

            {products && products.map((data, index) => {
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
                    {data.price}
                  </td>
                  <td>
                    {data.category}
                  </td>
                  <td>
                    <Link to={`/view/${data._id}`} className="view"
                      data-toggle="modal"><i class='fas fa-eye'></i></Link>
                  </td>
                  <td>
                    <Link to={`/edit/${data._id}`} className="edit"
                      data-toggle="modal"><i class='fas fa-pen'></i></Link>
                  </td>
                  <td>
                    <Link to="/admin" onClick={() => deleteProduct(data._id)} className="delete"><i class='fas fa-trash-alt'></i></Link>
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

export default ProductsList