
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-2 md:px-6 py-4 md:mb-6">

  <div className="flex-1 flex flex-col justify-between px-2 py-6 md:px-4 capitalize">

     <h1 className="text-2xl md:text-6xl font-bold capitalize md:leading-snug md:my-6">Shape your body,<br />Transform your <span className="text-orange-400">Life</span></h1>
     
          <p className="md:text-xl md:leading-normal mt-4">loin commodo irure Excepteur culpa lorem dolore laborum adipiscing adipiscing culpa tempor elit eu pariatur aliquip anim. do elit aute ipsum nostrud qui do est elit consequat in dolor minim deserunt ut lorem ipsum. culpa ipsum incididunt id non ipsum fugiat id enim sunt. <span></span> <img src="/img/curve-arrow.png" alt="arrow" width={100} height={100} className="rotate-90" /></p>
    
  {/* button div */}
     <div className="text-center md:text-start">
     <button className="px-3 py-2 bg-orange-400 text-white border-none rounded-full hover:text-orange-400 hover:bg-slate-100">join now</button>
     <button className="mx-3 px-4 py-2 border rounded-full text-black">watch video</button>
     </div>
  {/* stat div */}
     <div className="uppercase flex justify-between items-center px-8 my-4 py-4 md:max-w-[60%] border border-black p-4 rounded-md">
     <p><span className="text-xl md:text-2xl font-bold">30+</span><br/>project completed</p>
     <p><span className="text-xl md:text-2xl font-bold">980+</span><br/>project done</p>
     </div>

   </div>

     <div>
     <img src="https://img.freepik.com/free-photo/athletic-person-exercising-working-out_23-2150989827.jpg?t=st=1704690908~exp=1704694508~hmac=1b3416267892eee1d2f9e6c01efaa9dff707b88777e0f9447d54aa850fff8689&w=740" alt="gym"
     className="rounded-md" title="image by freepik" />
     </div>
    </div>
  )
}

export default Hero
