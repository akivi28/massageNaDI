import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RoootLayout from "./RootLayout";
import AboutMaster from "./AboutMaster";
import SiteMain from "./SiteMain";
import Services from "./Services";
import Contact from "./Contact";

const router = createBrowserRouter([
  {
    path:'/',
    element: <RoootLayout/>,
    errorElement: <SiteMain/>,
    children:[
      {path: '/', element:<SiteMain/>},
      {path: '/aboutMaster', element:<AboutMaster/>},
      {path: '/services', element:<Services/>},
      {path: '/contacts', element:<Contact/>}
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      {/* <SiteMain/> */}
    </>
  )
}

export default App
