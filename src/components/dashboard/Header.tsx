import icon from "../../assets/Tailwind CSS.svg"
function Header(){
    return(
        <div className="bg-[#005] flex justify-between items-center">
          <div className="text-[#fff] flex items-cetner gap-p-4 ">
            <h1 className="w-[40px] h-[40px] mr-2">
            <img src={icon} width={100} height={100}></img>
             </h1>
             <h4 className="text-[#fff] text-[24px]">tailwinds</h4>
            </div>
           
          <div>
            
                <ul className="text-[#fff] flex gap-6">
                    <li>DOCS</li>
                    <li>COMPONENTS</li>
                    <li>BLOG</li>
                    <li>SHOWCASE</li>
                </ul>
            
          </div>
          <div>
            <button className="text-[#fff] text-[14px] p-4 pl-[10px] py-[4px] border-3 border-amber-400 ">Sign Up</button>
          </div>
        </div>
    )
}

export default Header