import React from 'react'
import Header from "./defaultLayout/Header";
import Sidebar from "./defaultLayout/Sidebar";


function DefaultLayout(props){
    return(<div className="w-full container mx-auto">

        <Header/>
       <div className="w-full  flex items-center">
           <div className="w-1/5">
               <Sidebar/>
           </div>
           <div className="w-4/5">
               {props.children}
          </div>
       </div>

    </div>)
}export default DefaultLayout
