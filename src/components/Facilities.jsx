import { TfiCheckBox } from "react-icons/tfi";


const Facilities = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between my-8 px-2 md:px-4 py-6 capitalize">

      <div className="flex-1 flex flex-col justify-between md:px-4 pb-6 md:p-0 px-2 mb-4 md:mb-0">

      <h1 className="text-2xl md:text-5xl font-bold md:leading-snug md:mb-6">GymMaster simplifying<br /><span className="border-b-4 border-blue-500">fitness</span> management.</h1>

      <p className="md:text-xl md:leading-normal mt-4">loremest consectetur amet pariatur in eiusmod eu dolore ad non ex nulla in ullamco nisi quis nostrud.loremest consectetur amet in eiusmod eu dolore ad non exercitation ex nulla in ullamco nisi quis nostrud.</p>

      <div className="flex flex-col justify-between">
      <ul className="flex justify-between items-center py-6 md:px-4 px-2 text-lg font-semibold">
      <div>
      <li className="flex items-center mb-4"><TfiCheckBox />unique facilities</li>
      <li className="flex items-center"><TfiCheckBox />flexible time</li></div>

      <div>
      <li className="flex items-center mb-4"><TfiCheckBox />effective cost</li>
      <li className="flex items-center"><TfiCheckBox />modern equipments</li></div>
      </ul>

      <div className="mx-auto text-center mt-4 py-4">
      <button className="px-3 py-2 bg-orange-400 text-white border-none rounded-full hover:text-orange-400 hover:bg-slate-100">see more</button>
      </div>

      </div>
      </div>

      <div className="flex-1">
      <img src="https://img.freepik.com/free-photo/close-up-athlete-training_23-2150845530.jpg?t=st=1704699182~exp=1704702782~hmac=41f2fddd4ad694bfd2afa4864acd2a63819316739a7ac0b654c5467b2c9df2af&w=996" alt="gym2" 
      className="rounded-md"
      title="image by freepik"/>
      </div>
    </div>
  )
}

export default Facilities
