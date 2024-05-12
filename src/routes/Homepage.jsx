
import ServicesCard from '../ServicesCard'
import Comments from '../Comments'
import TeamCard from '../TeamCard'

import zblue from '../assets/zblue.svg'
import zorange from '../assets/zorange.svg'
import star from '../assets/star.svg'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
import s5 from '../assets/s5.png'
import s6 from '../assets/s6.png'

import { comment } from 'postcss'

export default function Homepage() {
    return (
        <div className="overflow-hidden">
            <div className="w-full h-[70vh] bg-amber-100 text-[5rem] font-bold text-zinc-900
                            flex flex-col justify-center items-center">
                <h1>Software and Hardware</h1>
                <h1>Manufacturing and Trading</h1>
                <p className="text-lg font-normal w-2/3 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus aliquet tellus id venenatis. Aliquam accumsan efficitur nulla et dictum. Suspendisse arcu metus, tempus eu luctus non, posuere eget lacus. Proin rhoncus dolor at suscipit varius. Cras ut egestas arcu.
                    Donec accumsan at lacus at hendrerit. Vivamus egestas rhoncus enim eget lobortis.</p>
                <img src={zblue} className='absolute left-0 top-28' />
                <img src={zorange} className='absolute right-0 bottom-20' />
                <img src={star} className='absolute left-[15rem] bottom-[18rem] animate-bounce' />
                <img src={star} className='absolute right-[20rem] top-[12rem] w-5 animate-bounce' />
                <img src={star} className='absolute right-[20rem] bottom-[8rem] w-7 animate-bounce' />
            </div>
            <div className="flex justify-center">
                <div>
                    <svg className="h-[12rem] bg-zinc-900" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="#FEF3C7"></path>
                    </svg>
                </div>
            </div>
            <div className="w-full h-48 bg-zinc-900 flex items-center text-white font-bold text-[3rem]">
                <div className='flex flex-row gap-x-52 animate-slideRight'>
                    <h2>Logo</h2>
                    <h2>Logo</h2>
                    <h2>Logo</h2>
                    <h2>Logo</h2>
                    <h2>Logo</h2>
                    <h2 className='mr-52'>Logo</h2>
                </div>
                <div className='flex flex-row gap-x-52 animate-slideRight'>
                    <h2>Logo</h2>
                    <h2>Logo</h2>
                    <h2>Logo</h2>
                    <h2>Logo</h2>
                    <h2>Logo</h2>
                    <h2 className='mr-52'>Logo</h2>
                </div>
            </div>
            <div className="flex justify-center rotate-180">
                <div>
                    <svg className="h-[12rem] bg-zinc-900" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="#FEF3C7"></path>
                    </svg>
                </div>
            </div>
            <div className="w-full h-auto bg-amber-100 text-zinc-900
                            flex flex-col items-center relative">
                <h1 className='absolute top-[-80px] text-[3rem] font-bold'>Top Services</h1>
                <p className='text-lg font-normal text-center'>Our seasoned design and development team is here to assist you with anything from consultations to project delivery.</p>
                <div className='w-full h-auto py-10 flex gap-10 flex-wrap p-52 justify-center'>
                    <ServicesCard
                        image={s1}
                        title='Technical Consultancy'
                        description='Sell smarter and provide support faster in a single app.'
                        s1='Fully functional dashboard'
                        s2='Productivity Tools'
                        s3='Lead and account management' />
                    <ServicesCard
                        image={s2}
                        title='Technical Training and Services Provider'
                        description='Sell smarter and provide support faster in a single app.'
                        s1='Fully functional dashboard'
                        s2='Productivity Tools'
                        s3='Lead and account management' />
                    <ServicesCard
                        image={s3}
                        title='Embedded Systems Development'
                        description='Sell smarter and provide support faster in a single app.'
                        s1='Fully functional dashboard'
                        s2='Productivity Tools'
                        s3='Lead and account management' />
                    <ServicesCard
                        image={s4}
                        title='Electronics Manufacturing'
                        description='Sell smarter and provide support faster in a single app.'
                        s1='Fully functional dashboard'
                        s2='Productivity Tools'
                        s3='Lead and account management' />
                    <ServicesCard
                        image={s5}
                        title='Automotive System Innovation'
                        description='Sell smarter and provide support faster in a single app.'
                        s1='Fully functional dashboard'
                        s2='Productivity Tools'
                        s3='Lead and account management' />
                    <ServicesCard
                        image={s6}
                        title='Mechatronics'
                        description='Sell smarter and provide support faster in a single app.'
                        s1='Fully functional dashboard'
                        s2='Productivity Tools'
                        s3='Lead and account management' />
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <svg className="h-[12rem] bg-zinc-900" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="#FEF3C7"></path>
                    </svg>
                </div>
            </div>
            <div className="w-full h-[30rem] bg-zinc-900 flex flex-col justify-around items-center">
                <h1 className='text-4xl text-white font-semibold'>What our clients says</h1>
                <div id='comments' className='flex flex-row'>
                    <div className='flex flex-row animate-slideLeft'>
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                    </div>
                    <div className='flex flex-row animate-slideLeft'>
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                    </div>
                </div>
            </div>
            <div className="flex justify-center rotate-180">
                <div>
                    <svg className="h-[12rem] bg-zinc-900" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="#FEF3C7"></path>
                    </svg>
                </div>
            </div>
            <div className="w-full h-auto bg-amber-100 text-zinc-900
                            flex flex-col items-center relative">
                <h1 className='absolute top-[-80px] text-[3rem] font-bold'>Meet Our Expert Team</h1>
                <p className='text-lg font-normal text-center mb-10'>With over 50 years of combined experience, we’ve got a well-seasoned team at the helm.</p>
                <div className='w-full h-auto flex flex-wrap gap-x-10 px-52 justify-center transition mb-10'>
                    <div className='flex flex-col h-auto gap-y-10'>
                        <TeamCard />
                        <TeamCard />
                    </div>
                    <div className='flex flex-col h-auto gap-y-10'>
                        <TeamCard />
                        <TeamCard />
                    </div>
                    <div className='flex flex-col h-auto gap-y-10'>
                        <TeamCard />
                        <TeamCard />
                    </div>
                </div>
            </div>
            <footer className='w-full h-96 bg-zinc-900 flex flex-col justify-between p-10 relative'>
                <div className='flex flex-row text-white justify-evenly'>
                    <div>
                        <h4 className='font-bold'>Visit Us</h4>
                        <p className='text-zinc-400 text-sm'>New Delhi Office ( India )</p>
                        <p className='text-zinc-400 text-sm'>Philippines</p>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='font-bold'>Resources</h4>
                        <a className='text-zinc-400 text-sm' href="#">Community</a>
                        <a className='text-zinc-400 text-sm' href="#">Become a Partner</a>
                        <a className='text-zinc-400 text-sm' href="#">Our Technology</a>
                        <a className='text-zinc-400 text-sm' href="#">Documentation</a>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='font-bold'>Legal</h4>
                        <a className='text-zinc-400 text-sm' href="#">Terms and Condition</a>
                        <a className='text-zinc-400 text-sm' href="#">Privacy Policy</a>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center gap-y-5 text-white'>
                    <p className='font-bold'>Follow Us</p>
                    <div className='flex gap-x-5'>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                    </div>
                    <p className='text-xs'>© 2024 - Designed by Z Tech.</p>
                </div>
            </footer>
        </div>
    )
}