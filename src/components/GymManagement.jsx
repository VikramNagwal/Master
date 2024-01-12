

const GymManagement = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-2 md:px-4 py-2 my-8 capitalize">

     <div className="md:px-4 pb-6 md:p-0 px-2 mb-4 md:mb-0 flex-1 flex flex-col justify-between">
     <h1 className="text-2xl md:text-5xl font-bold capitalize md:leading-snug">AI for seamless gym<br /><span className="border-b-4 border-blue-500 py-1">management</span></h1>
     <p className="md:text-xl md:leading-normal mt-4">occaecat esse sed incididunt sunt consectetur laborum est sed dolore lorem reprehenderit ea velit consequat cupidatat cillum.</p>

     <div className="py-4">
     <ul>
     <li className="flex items-center p-2"><div className="rounded-full mr-4 border border-black p-2 w-10 h-10 flex justify-center items-center hover:bg-orange-400 hover:text-white hover:border-none font-semibold cursor-pointer duration-300">1</div><div><p><span className="font-semibold md:text-lg">member personalization </span><br /> utilize ai algorithms to analyze members performance</p></div></li>
     <li className="flex items-center p-2"><div className="rounded-full mr-4 border border-black p-2 w-10 h-10 flex justify-center items-center hover:bg-orange-400 hover:text-white hover:border-none font-semibold cursor-pointer duration-300">2</div><div><p> <span className="font-semibold md:text-lg">predictive equipment maintenance</span> <br /> utilize ai algorithms to analyze members performance</p></div></li>
     <li className="flex items-center p-2"><div className="rounded-full mr-4 border border-black p-2 w-10 h-10 flex justify-center items-center hover:bg-orange-400 hover:text-white hover:border-none font-semibold cursor-pointer duration-300">3</div><div><p><span className="font-semibold md:text-lg">automated attendance tracking</span><br />utilize ai algorithms to analyze members performance</p></div></li>
     </ul>
     </div>
     </div> 
     <div className="hidden md:block">
     <img src="https://img.freepik.com/free-photo/sport-fitness-health-exercise-bikes-fitness-center_613910-20283.jpg?size=626&ext=jpg&uid=R123667877&ga=GA1.1.719611258.1704690894&semt=sph" alt="gym" className=" rounded-md"/>
     </div>
    </div>
  )
}

export default GymManagement
