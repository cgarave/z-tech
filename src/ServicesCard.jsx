
export default function ServicesCard(props) {
    return (
        <div className="w-72 bg-white h-80 rounded-xl overflow-hidden 
                        flex flex-col items-center justify-between
                        group hover:ring-4 hover:ring-opacity-30 hover:ring-black">
            <div className='h-full w-full flex flex-col overflow-hidden'>
                <img src={props.image} className='transition duration-150 ease-in-out group-hover:-translate-y-full' />
                <div className='flex flex-col gap-y-2 p-5
                                transition duration-150 ease-in-out group-hover:-translate-y-44'>
                    <h1 className='font-semibold text-blue-500 text-center h-10'>{props.title}</h1>
                    <p className='text-zinc-900 text-xs text-center mb-5 hidden group-hover:block'>{props.description}</p>
                    <div className='hidden group-hover:block'>
                        <h1 className='font-semibold text-zinc-900 text-xs text-center mb-4'>Services</h1>
                        <p className='font-normal text-zinc-900 text-xs text-center'>{props.s1}</p>
                        <p className='font-normal text-zinc-900 text-xs text-center'>{props.s2}</p>
                        <p className='font-normal text-zinc-900 text-xs text-center'>{props.s3}</p>
                    </div>
                </div>
            </div>
            <button className='btn bg-zinc-900 text-white hover:bg-yellow-400 hover:text-zinc-900 mb-5'>Enquire Now</button>
        </div>
    )
}