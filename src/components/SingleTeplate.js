import React from "react";


function SingleTemplate(props){
    return(

        <div className="w-full pb-8">
            <div className="w-full  h-96 mt-8">
                <img src="/reactjs-notion-clone/img/img2.png" alt="img2" className="w-full h-full object-cover"/>
            </div>
            <div className="mt-5 flex items-center justify-between w-full">
                <div className="">
                    <p className="flex items-center truncate font-semibold">GRID’s startup runway calculator
                        <span className="ml-2">
                            <svg viewBox="0 0 16 16" className="w-4 h-4" style={{width: '15px', height: '15px', display: 'flex', fill: 'rgb(4, 4, 4)', flexShrink: 0}}><path d="M8.384 15.285c4.153 0 7.58-3.428 7.58-7.573 0-4.146-3.434-7.573-7.587-7.573C4.231.139.811 3.566.811 7.712c0 4.145 3.428 7.573 7.573 7.573zM6.26 11.58c-.447.344-.937 0-.754-.542l.835-2.49-2.139-1.53c-.41-.301-.293-.916.293-.91l2.622.03.799-2.512c.168-.527.754-.527.922 0l.806 2.512 2.622-.03c.593-.006.696.616.293.91L10.42 8.54l.835 2.497c.183.55-.307.886-.761.542l-2.117-1.545-2.117 1.545z" /></svg>
                        </span>
                    </p>
                    <p className="text-gray-500">Grid</p>
                </div>
                <img className="w-10 h-10 rounded-full object-cover" src="https://www.notion.so/cdn-cgi/image/format=auto,width=1080,quality=100/https://images.ctfassets.net/spoqsaf9291f/151Y0x11VkR5DRQxBS4OM7/728fc1168e1bc70da1c18696e8a4e683/Pitch-Logo2.png" alt=""/>

            </div>
            <p className="text-gray-500 line-clamp-2">Track all sales prospects in one place and ensure you’re focused on the deals that matter the most.</p>
        </div>

        )
}export default SingleTemplate
