import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RoootLayout from "./RootLayout";
import AboutMaster from "./AboutMaster";
import SiteMain from "./SiteMain";

const router = createBrowserRouter([
  {
    path:'/',
    element: <RoootLayout/>,
    errorElement: <SiteMain/>,
    children:[
      {path: '/', element:<SiteMain/>},
      {path: '/aboutMaster', element:<AboutMaster/>}
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
