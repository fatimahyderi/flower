import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Footer from './Partials/Footer';
import Header from './Partials/Header';
import Sidebar from './Partials/Sidebar';

function Checkout(props) {
    const nav = useNavigate();
    const { cart,clearCart } = props;
    const itemPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
    const grandtotal = itemPrice
    const cartproduct_id2 = []
    cart.map((item) => {
        cartproduct_id2.push(item._id)
    })
    const cartproduct_id = cartproduct_id2
    const [user, setUser] = useState({
        email: "", address: "", firstname: "", lastname: "", phonenumber: ""
    });

    let name, value;

    const handleInputs = (e) => {
        
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]:value});

    }
    
    const PostData =  (e) => {
        e.preventDefault()
        let formdata = new FormData(e.target);
        const url = "http://localhost:8080/items/order"
        fetch(url, {
            method: "POST",
            body: new URLSearchParams(formdata)
        }).then(res => res.json()).then(response => {
            const orderid = response._id
            clearCart()
            nav(`/order/${orderid}`)
        }).catch(function (response) {
            //handle error
          });
        } 
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
                        <Sidebar />

                        <div id="content" class="right checkout_details_area mt-50 clearfix">
                            <h2 >Checkout</h2>

                            <h3>BILLING DETAILS</h3>
                            
                            <h3>TOTAL AMOUNT: <strong>{itemPrice}</strong></h3>

                            <form onSubmit={PostData} className="checkout_details_area mt-50 clearfix">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="first_name">First Name <span>*</span></label>
                                        <input type="text" className="form-control" name='firstname' id="first_name" value={user.firstname} onChange={handleInputs} required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="last_name">Last Name <span>*</span></label>
                                        <input type="text" className="form-control" name='lastname' id="last_name" value={user.lastname} onChange={handleInputs} required />
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label htmlFor="street_address">Address <span>*</span></label>
                                        <input type="text" className="form-control" name='address' id="street_address2" value={user.address} onChange={handleInputs} required />
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label htmlFor="phone_number">Phone No <span>*</span></label>
                                        <input type="number" className="form-control" name='phonenumber' id="phone_number" min="0" value={user.phonenumber} onChange={handleInputs} required />
                                    </div>
                                    <div className="col-12 mb-4">
                                        <label htmlFor="email_address">Email Address <span>*</span></label>
                                        <input type="email" className="form-control" name='email' id="email_address" value={user.email} onChange={handleInputs} required />
                                    </div>
                                    <input type="hidden" id="custId" name="totalamount" value={grandtotal}></input>
                                    <input type="hidden" id="custId" name="product" value={cartproduct_id}></input>

                                    <button  className="orderbtn" type='submit'>Place Order</button>
                                </div>
                            </form>

                            <div class="cleaner h40"></div>

                        
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

export default Checkout