import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider,  } from 'react-router-dom'
import myCreaterouter from './Route/Route'
// import MainLayout from './Layouts/MainLayout'
// import Home from './Pages/Home/Home'
// import Products from './Pages/Products/Products'

// const myCreaterouter = createBrowserRouter([
  // {
  //   path:'/',
  //   element: <div>This is my </div>
  // },
  // {
  //   path:'/products',
  //   element: <div>Products page</div>
  // }

// const myCreaterouter = createBrowserRouter([
//     {
//       path: '/',
//       element: <MainLayout></MainLayout>,
//       children: [
//         {
//           path: '/',
//           element: <Home></Home>
//         },
//         {
//           path:'/products',
//           element: <Products></Products>
//         }
//       ]
//     }
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreaterouter}></RouterProvider>
  </React.StrictMode>,
)
