

const Partners = () => {

    const partnerNames = [
        {
            id: 1,
            name:'ubx customs',
        },
        {
            id: 2,
            name:'join cag',
        },
        {
            id: 3,
            name:'fitness',
        },
        {
            id: 4,
            name:'rld',
        },
        {
            id: 5,
            name:'arrow fabric',
        },
        {
            id: 6,
            name:'panda fitness',
        },
        {
            id: 7,
            name:'ubx customs',
        },
        {
            id: 8,
            name:'st Courier',
        },
    ]

  return (
    <div className="px-2 md:px-4 py-6 my-8 capitalize">
    <p className="text-center text-xl md:text-5xl font-bold py-2 md:py-4 my-4 md:my-8">our partners</p>
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 " >
      {
        partnerNames.map((items) => (
            <div key={items.id} className="rounded-md capitalize border border-black md:hover:bg-orange-400 md:hover:text-white md:hover:border-none cursor-pointer duration-300">
            <p className="p-2 font-semibold">{items.name}</p>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default Partners
