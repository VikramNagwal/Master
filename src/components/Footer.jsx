import { GoPaperAirplane } from "react-icons/go";
import { FiPhoneForwarded } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-slate-950 text-white capitalize px-2 md:px-4 py-8 flex flex-col md:flex-row justify-between">
    <div>
    <h1 className="text-xl md:text-4xl font-bold">master</h1>
    <p className="py-2">trust worthy gym management software</p>
    </div>

    <div className="my-6 md:my-0">
    <p className="font-semibold text-lg mb-4">gymMaster features</p>
       <ul>
       <li>24/7 gym access control</li>
       <li>integrated billing</li>
       <li>member&apos;s app</li>
       <li>POS & inventory</li>
       </ul>
    </div>

    <div className="hidden md:block">
    <p className="font-semibold text-lg mb-4">products</p>
       <ul>
       <li>hardware</li>
       <li>custom branded key fobs</li>
       <li>custom development</li>
       <li>pricing</li>
       </ul>
    </div>

    <div className="hidden md:block">
    <p className="text-lg font-semibold mb-4">gymMaster support</p>
       <ul>
       <li>resources</li>
       <li>support</li>
       <li>app setup guide</li>
       <li>app introduction</li>
       </ul>
    </div>

    <div>
    <p className="text-xl">subscribe</p>
    <input type="text" maxLength={30} className="px-2 py-1 border border-white rounded-md border-b-2 mb-2"/>
    <p className="flex items-center my-2"><GoPaperAirplane /> johndoe@gmail.com</p>
    <p className="flex items-center"><FiPhoneForwarded /> 526,5522,411</p>
    </div>
      
    </div>
  )
}

export default Footer
