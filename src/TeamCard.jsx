import img2 from './assets/img2.png'
//h-80
export default function TeamCard(props) {

    return (
        <div className="group w-72 bg-white h-80 rounded-xl overflow-hidden relative hover:h-[30rem] duration-300
                        flex flex-col items-center justify-between gap-y-4 p-5">
            <img src={img2} className='rounded-full border-4 border-yellow-300 h-52 z-10' />
            <h1 className='text-lg font-semibold z-10'>Bryan O'brien</h1>
            <h2 className='text-xs font-semibold z-10'>PROJECT MANAGER</h2>
            <p className='text-xs text-justify z-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eaque nisi ipsa inventore voluptates, illo fugit perspiciatis soluta commodi magni itaque reiciendis iure voluptatem, non incidunt impedit quis maxime autem.</p>
            <div className='flex flex-row justify-evenly w-full z-10'>
                <svg className='cursor-pointer hover:fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                <svg className='cursor-pointer hover:fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
                <svg className='cursor-pointer hover:fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
            </div>
            <div className='h-52 w-52 bg-yellow-300 rounded-full absolute group-hover:scale-[4] transition duration-300'></div>
        </div>
    )
}

