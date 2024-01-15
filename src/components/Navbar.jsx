
const Navbar = () => {

  return (
    <div className="flex justify-between items-center px-6 py-4">
     <img src="/img/master.png" alt="logo" width={80} height={80} />

     <div>
     <div className="border-slate-300 w-full h-full"/>
      </div>
      
      <div className="hidden md:flex justify-between items-center">

      <div className="mr-4">
      <ul className="flex items-center justify-between capitalize md:text-lg">
      <li className="px-2 cursor-pointer hover:text-orange-400">features</li>
      <li className="px-2 cursor-pointer hover:text-orange-400">pricing</li>
      <li className="px-2 cursor-pointer hover:text-orange-400">support</li>
      <li className="px-2 cursor-pointer hover:text-orange-400">contact</li>
      <li className=""></li>
      </ul>
      </div>
   
     
     
      </div>

      <div className="flex items-center justify-between ml-8">
      <button className="mx-3 px-4 py-2 border rounded-full text-black hidden md:block">Login</button>
      <button className="px-3 py-2 bg-orange-400 text-white border-none rounded-full hover:text-orange-400 hover:bg-slate-100">Get Started</button>
      </div>
      
      </div>
  )
}

export default Navbar
