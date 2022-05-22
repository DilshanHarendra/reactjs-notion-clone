import React from 'react'
import {Link} from "react-router-dom";

function Sidebar(){
    return(<div className="w-full overflow-y-auto border-r border-r-2 border-gray-200 bg-white pb-8 pl-4">
        <form action="">
            <div style={{width:'95%'}} className=" relative ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute top-2 left-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input placeholder="Search" className=" w-full  form-input placeholder:text-gray-500  border border-gray-200 outline-none focus:border-none focus:outline-none  pl-8 py-2" type="text"/>
            </div>

        </form>

        <p className="uppercase text-xs py-6">Browse by category</p>

        <Link to="/" className="flex items-center text-lg pb-1 hover:text-red-500">
            <span>Notion Picks</span>
            <span className="ml-2">
                    <svg viewBox="0 0 16 16" className="notionPick" style={{width: '15px', height: '15px', display: 'flex', fill: 'rgb(4, 4, 4)', flexShrink: 0}}><path d="M8.384 15.285c4.153 0 7.58-3.428 7.58-7.573 0-4.146-3.434-7.573-7.587-7.573C4.231.139.811 3.566.811 7.712c0 4.145 3.428 7.573 7.573 7.573zM6.26 11.58c-.447.344-.937 0-.754-.542l.835-2.49-2.139-1.53c-.41-.301-.293-.916.293-.91l2.622.03.799-2.512c.168-.527.754-.527.922 0l.806 2.512 2.622-.03c.593-.006.696.616.293.91L10.42 8.54l.835 2.497c.183.55-.307.886-.761.542l-2.117-1.545-2.117 1.545z" /></svg>
            </span>
        </Link>

        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            How Notion uses Notion
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            Design
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            Education
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            Freelance
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            Health & wellness
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            Home & living
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            HR & people
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            Marketing
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            Nonprofit
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            Planning
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            Product
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            Reading & writing
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            Sales
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            Support
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            Startup
        </Link>
        <Link to="/" className="block text-lg py-1 hover:text-red-500">
            <span>📮</span>
            <span className="ml-2">Submit your own</span>
        </Link>




    </div>)
}export default Sidebar
