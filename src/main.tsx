import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home";
import Product from "./pages/Product";
import User from "./pages/User";
import Login from './pages/Login';
import Layout from './components/Layout';

import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Setup the child for elements */}
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path='users' element={<User />} />
        <Route path="products" element={<Product />} />
      </Route>

      {/* setup login page */}
      <Route path='/login' element={<Login />} />
    </>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
