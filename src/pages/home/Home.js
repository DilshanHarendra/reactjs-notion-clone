import React from "react";
import TemplateOfMonth from "./TeplatesOfMonth";
import SingleTemplate from "../../components/SingleTeplate";


function Home(props){
    return(<div className="px-5 md:px-8 pb-8">
         <div className="md:w-3/6 mx-auto">
             <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/pages/templates/hero-illustration.png" alt="" className="w-40 mx-auto object-cover"/>
             <h1 className="font-semibold text-4xl md:text-6xl text-center mt-2">Template Gallery</h1>
             <p className="text-gray-500 text-xl text-center mt-2">Real Notion pages made by our team and community. Try new setups or share your own.</p>

         </div>

        <div className="md:hidden block py-8 border-b border-b-2 border-gray-200">
            <select name="" id="" className="form-select w-2/4">
                <option value="">Notion Pick</option>
                <option value="">Design</option>
                <option value="">Education</option>
                <option value="">Freelance</option>
                <option value="">Personal</option>
            </select>
        </div>

        <h3 className="font-semibold text-xl mt-10">Templates of the month</h3>

        <TemplateOfMonth/>

        <hr className="border border-gray-200 mt-10"/>

        <div className="flex justify-between items-center mt-10">
            <div className="w-3/5">
                <h2 className="font-semibold text-2xl">Notion Picks</h2>
                <p className="mt-3 text-gray-500">Standout templates from the community, curated by the Notion team. Try the most effective workflows to organize your work and life. And discover new, creative ways to use Notion.</p>
            </div>
            <img className="object-cover w-40 h-40" src="https://www.notion.so/cdn-cgi/image/format=auto,width=1080,quality=100/https://images.ctfassets.net/spoqsaf9291f/4KP79KeSodBtAt9Zls9Dl3/f805a039e001198f5d24207a68a7ff48/notion-picks-badge.png" alt=""/>
        </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8">
          {[1,2,3,4,5,6,7,8].map(item=><SingleTemplate key={item} />)}
      </div>


    </div>)
}export default Home
