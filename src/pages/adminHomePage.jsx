import { Link } from 'react-router-dom';
import { BsGraphUp, BsBox, BsCart, BsPeople } from 'react-icons/bs';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Products from './admin/products.jsx'; 


export default function AdminHomePage() {
    return (
        <div className="bg-blue-200 w-full h-screen flex">
            <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center p-4">
                <Link 
                    className="flex flex-row items-center text-white text-lg mb-4 hover:text-yellow-400 hover:scale-105 transition-all duration-300" 
                    to="/admin/dashboard"
                >
                    <BsGraphUp className="mr-2" /> Dashboard
                </Link>
                <Link 
                    className="flex flex-row items-center text-white text-lg mb-4 hover:text-yellow-400 hover:scale-105 transition-all duration-300" 
                    to="/admin/products"
                >
                    <BsBox className="mr-2" /> Products
                </Link>
                <Link 
                    className="flex flex-row items-center text-white text-lg mb-4 hover:text-yellow-400 hover:scale-105 transition-all duration-300" 
                    to="/admin/orders"
                >
                    <BsCart className="mr-2" /> Orders
                </Link>
                <Link 
                    className="flex flex-row items-center text-white text-lg mb-4 hover:text-yellow-400 hover:scale-105 transition-all duration-300" 
                    to="/admin/customers"
                >
                    <BsPeople className="mr-2" /> Customers
                </Link>
            </div>

           <div className="w-[80%] h-screen bg-red-600">
            <Routes>
             <Route path="/dashboard" element={<h1>Dashboard</h1>} />
             <Route path="/products" element={<Products/>} />
             <Route path="/orders" element={<h1>Orders</h1>} />
             <Route path="/customers" element={<h1>Customers</h1>} />
             <Route path="/*" element={<h1>404 error</h1>} />
            </Routes>
           </div>
        </div>
    );
}
