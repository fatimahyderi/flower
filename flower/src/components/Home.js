import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Footer from './Partials/Footer';
import Header from './Partials/Header';
import Sidebar from './Partials/Sidebar';

function Home(props) {
    const {onAdd} = props
    const [products, setProducts] = React.useState();

  React.useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    axios.get(`${process.env.REACT_APP_SERVER_PATH}/items/viewproducts`)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(`error ${error}`);
      })
  }
  const [productdata,setProductData] = React.useState(products)
    const filterResult = (catItem) => {
        const result = products.filter((curData) => {
            return curData.category === catItem;
        });
        setProductData(result)
    }
    console.log(productdata)
    return (
        <>
            <div id="templatemo_wrapper_sp">
                <div id="templatemo_header_wsp">
                    <div id="templatemo_header" class="header_subpage">
                        <div id="site_title"><Link to="#">Floral Shop</Link></div>
                        <Header />

                    </div>
                </div>
                <div id="templatemo_main_wrapper">
                    <div id="templatemo_main">
                        <Sidebar filterResult={filterResult} />

                        <div id="content" class="right">
                            <h2>Welcome to Floral Shop</h2>
                            <p>Floral Shop is free website template by templatemo. Sed in suscipit risus, eget consectetur justo. Praesent lacinia, nisi quis commodo consectetur, diam magna laoreet felis, Link pulvinar mauris enim in felis. Phasellus in mauris velit. In pellentesque massa in nisl auctor pellentesque. Donec fermentum convallis purus, id luctus nulla tempus in. Aliquam diam nibh, consectetur quis fringilla facilisis, egestas sed odio. Validate <Link to="http://validator.w3.org/check?uri=referer" rel="nofollow"><strong>XHTML</strong></Link> &amp; <Link to="http://jigsaw.w3.org/css-validator/check/referer" rel="nofollow"><strong>CSS</strong></Link>.</p>

                            {products && products.map((data, key) => {
                            return (
                                <>
                            <div class="product_box" key={key}>
                                <Link to="productdetail.html"><img src={`./assets/images/product/${data.image}`} alt="floral set 1" /></Link>
                                <h3>{data.name}</h3>
                                <p class="product_price">{data.price}</p>
                                <p class="add_to_cart">
                                    <Link to={`/productdetail/${data._id}`}>Detail</Link>
                                    <Link to="" onClick={() => onAdd(data)}>Add to Cart</Link>
                                </p>
                            </div>
                            </>
                            )
                        })}

                           

                            <div class="blank_box">
                                <Link to="#"><img src={`./assets/images/free_shipping.jpg`} alt="Free Shipping" /></Link>
                            </div>
                        </div>
                        <div class="cleaner"></div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Home