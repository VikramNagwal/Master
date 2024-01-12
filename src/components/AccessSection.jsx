import { TfiCheck } from "react-icons/tfi";

const AccessSection = () => {

const imageData = [
    {
        id:1,
        src: "https://img.freepik.com/free-photo/portrait-boxing-fighter_23-2151059740.jpg?ga=GA1.1.719611258.1704690894&semt=ais_ai_generated"
    },
    {
        id:2,
        src: "https://img.freepik.com/free-photo/close-up-athlete-training_23-2150845500.jpg?ga=GA1.1.719611258.1704690894&semt=ais_ai_generated"
    },
    {
        id:3,
        src: "https://img.freepik.com/free-photo/athletic-man-practicing-gymnastics-keep-fit_23-2150989901.jpg?ga=GA1.1.719611258.1704690894&semt=ais_ai_generated"
        
    }
]

  return (
    <div className="flex flex-col md:flex-row justify-between px-2 md:px-4 py-2 my-8 capitalize">
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4" >
     {imageData.map((data) => (
        <img key={data.id} src={data.src} alt="gym" width={200} className="rounded-md h-full" />
     ))}
      </div>
      <div className="flex-1 flex flex-col justify-between md:ml-8 md:pl-6 ml-8">
      <h1 className="text-2xl md:text-5xl md:leading-snug font-bold">Secure 24/7 Access, Easy<br /> <span className="border-b-4 border-blue-500 lowercase">and</span> convenient.</h1>

      <p className="md:text-xl md:leading-normal mt-4">Excepteur velit nostrud irure adipiscing do enim nostrud ut qui labore sed quis cupidatat tempor lorem minim.</p>

      <div className="flex flex-col justify-between my-4 p-2">
      <div className="flex flex-col justify-between">
      <p className="flex items-center font-semibold text-lg"><TfiCheck className="mx-2 text-white bg-green-400 rounded-t-full"/> robust security measures</p>
      <p>accessible 24 hours a day, and 7 weeks</p>
      </div>
      <div className="flex flex-col justify-between">
      <p className="flex items-center text-lg font-semibold"><TfiCheck className="mx-2 text-white bg-green-400 rounded-t-full"/>continuos availability</p>
      <p>implementation advanced security protocols to ensure</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default AccessSection
