import { useEffect } from 'react'
import zblue from '../assets/zblue.svg'
import zorange from '../assets/zorange.svg'
import star from '../assets/star.svg'
import anim2 from '../assets/anim2.json'
import Lottie from 'lottie-web' //to import this, you need to 'npm i lottie-web' on terminal
export default function ServicesPage() {

    useEffect(() => {
        Lottie.loadAnimation({
            container: document.getElementById('animate'),
            loop: false,
            renderer: 'svg',
            animationData: anim2,
        });
    }, [])

    return (
        <div className='overflow-hidden'>
            <div className="w-full h-[70vh] bg-amber-100 text-zinc-900
                            flex flex-col items-center">
                <div className='py-20 px-72 w-full flex flex-row justify-between'>
                    <div className='w-1/2 leading-none text-[8rem] font-extrabold'>
                        <h1>What</h1>
                        <h1>We</h1>
                        <h1>Build?</h1>
                    </div>
                    <div className='w-1/2 flex justify-center items-center overflow-hidden'>
                        <div id="animate" className='w-[24rem] h-[24rem]'></div>
                    </div>
                </div>
                <div className='flex flex-row gap-x-20 px-72 z-10'>
                    <article>
                        <h3 className='font-bold'>Responsive Website Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dignissimos. Voluptatum esse nulla, necessitatibus nisi optio blanditiis sequi molestiae atque odio officiis amet, tenetur quisquam quod fuga non quia veritatis!</p>
                    </article>
                    <article>
                        <h3 className='font-bold'>Interactive Website Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dignissimos. Voluptatum esse nulla, necessitatibus nisi optio blanditiis sequi molestiae atque odio officiis amet, tenetur quisquam quod fuga non quia veritatis!</p>
                    </article>
                    <article>
                        <h3 className='font-bold'>Mobile-first Website Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dignissimos. Voluptatum esse nulla, necessitatibus nisi optio blanditiis sequi molestiae atque odio officiis amet, tenetur quisquam quod fuga non quia veritatis!</p>
                    </article>
                </div>
                <div className='w-full relative top-0 bg-red-400'>
                    <img src={zblue} className='absolute -left-48 -bottom-10' />
                    <img src={zorange} className='absolute -right-24 bottom-96' />
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <svg className="h-[12rem] bg-zinc-900" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="#FEF3C7"></path>
                    </svg>
                </div>
            </div>
            <div className='h-screen w-full bg-zinc-900'>

            </div>
        </div>
    )
}