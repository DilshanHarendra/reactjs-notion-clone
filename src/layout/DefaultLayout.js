import React from 'react'
import Header from "./defaultLayout/Header";
import Sidebar from "./defaultLayout/Sidebar";
import Footer from "./defaultLayout/Footer";


function DefaultLayout(props){




    return(<div  className="w-full  max-h-screen overflow-y-auto relative">

        <Header/>
       <div  className="w-full  mt-24 container mx-auto  flex items-start ">
           <div className="md:block hidden md:w-1/5">
               <Sidebar/>
           </div>
           <div  className="w-full md:w-4/5">
               {props.children}
          </div>
       </div>

        <div>
            <Footer/>
        </div>

    </div>)
}export default DefaultLayout
