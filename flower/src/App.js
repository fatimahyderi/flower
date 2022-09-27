import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios'
import Home from './components/Home';
import About from './components/About';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Faqs from './components/Faqs';
import Productdetail from './components/Productdetail';
import Products from './components/Products';
import Cart from './components/Cart';
import Admin from './components/Admin/AdminPanel/Admin';
import AddProductForm from './components/Admin/ProductForms/AddProductForm';
import CategoryForm from './components/Admin/ProductForms/CategoryForm';
import SingleProductTable from './components/Admin/ProductForms/SingleProductTable';
import EditProductForm from './components/Admin/ProductForms/EditProductForm';
import Order from './components/Order';



const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")
function App() {
  // Getting products from database
	const [product, getProduct] = useState([]);
	const getProductData = () => {
		axios.get(`http://localhost:8080/items`)
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

  //Getting Categories from database

	const [categories, getCategories] = useState([]);
	const getCategoriesData = () => {
		axios.get(`http://localhost:8080/items/category`)
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


	// Cart system
	const [cart, setCart] = useState(cartFromLocalStorage);
	const onAdd = (product) => {
		const exist = cart.find((x) => x._id === product._id);
		if (exist) {
			setCart(cart.map((x) =>
				x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x))
		} else {
			setCart([...cart, { ...product, qty: 1 }])
		}
		// setCart([...cart, product]);
		// console.log(product)
	}
	const onRemove = (product) => {
		const exist = cart.find((x) => x._id === product._id);
		if (exist.qty === 1) {
			setCart(cart.filter((x) => x._id !== product._id));
		} else {
			setCart(
				cart.map((x) =>
					x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x)
			)
		}
		//setCart(cart.filter((productInCart) => productInCart !== product))
	}

	const clearCart = () => {
		setCart(cart.length = [])
	}

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart])

	const cartState = useState([]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home onAdd={onAdd} cart={cart}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/productdetail/:id" element={<Productdetail onAdd={onAdd}/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart cart={cart} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path="/admin" element={<Admin product={product} categories={categories}/>} />
        <Route path="/product-form" element={<AddProductForm />} />
        <Route path="/category" element={<CategoryForm />} />
        <Route exact path="/view/:id" element={<SingleProductTable />} />
        <Route exact path="/edit/:id" element={<EditProductForm /> } />
        <Route path="/order/:id" element={<Order />} />

      </Routes>

    </>
  );
}

export default App;
