import { useEffect } from 'react'
import zblue from '../assets/zblue.svg'
import zorange from '../assets/zorange.svg'
import star from '../assets/star.svg'
import anim2 from '../assets/anim2.json'
import Lottie from 'lottie-web' //to import this, you need to 'npm i lottie-web' on terminal
import Brand from '../Branding'

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
                <Brand />
            </div>
            <section className='h-screen w-full bg-amber-100 text-zinc-900'>
                <h1 className='text-[5rem] font-bold text-center pt-20 pb-10'>Why Choose Us?</h1>
                <p className='text-lg font-normal text-center pb-10'>Our team of experts uses the latest technologies and innovative strategies to bring your vision to life.</p>
                <div className='p-10 flex flex-row justify-evenly'>
                    <div className='flex flex-col gap-y-20'>
                        <div className='flex flex-col items-center'>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="58" height="58" rx="9" stroke="black" stroke-width="2" />
                                <path d="M35.3859 37.8559C35.3859 38.0599 35.3049 38.2555 35.1606 38.3997C35.0163 38.544 34.8206 38.625 34.6165 38.625H25.3836C25.1796 38.625 24.9839 38.544 24.8396 38.3997C24.6953 38.2555 24.6142 38.0599 24.6142 37.8559C24.6142 37.652 24.6953 37.4564 24.8396 37.3121C24.9839 37.1679 25.1796 37.0869 25.3836 37.0869H34.6165C34.8206 37.0869 35.0163 37.1679 35.1606 37.3121C35.3049 37.4564 35.3859 37.652 35.3859 37.8559ZM34.6165 34.0106H25.3836C25.1796 34.0106 24.9839 34.0916 24.8396 34.2359C24.6953 34.3801 24.6142 34.5757 24.6142 34.7797C24.6142 34.9836 24.6953 35.1793 24.8396 35.3235C24.9839 35.4677 25.1796 35.5487 25.3836 35.5487H34.6165C34.8206 35.5487 35.0163 35.4677 35.1606 35.3235C35.3049 35.1793 35.3859 34.9836 35.3859 34.7797C35.3859 34.5757 35.3049 34.3801 35.1606 34.2359C35.0163 34.0916 34.8206 34.0106 34.6165 34.0106ZM39.7812 28.0792L30.5483 18.8504C30.4024 18.706 30.2054 18.625 30.0001 18.625C29.7948 18.625 29.5977 18.706 29.4519 18.8504L20.219 28.0792C20.1146 28.1904 20.0438 28.3289 20.0149 28.4786C19.986 28.6283 20 28.7831 20.0555 28.9252C20.1143 29.0651 20.2133 29.1846 20.34 29.2684C20.4666 29.3522 20.6153 29.3967 20.7672 29.3962H24.6142V31.7034C24.6142 31.9074 24.6953 32.103 24.8396 32.2472C24.9839 32.3915 25.1796 32.4725 25.3836 32.4725H34.6165C34.8206 32.4725 35.0163 32.3915 35.1606 32.2472C35.3049 32.103 35.3859 31.9074 35.3859 31.7034V29.3962H39.233C39.3849 29.3967 39.5335 29.3522 39.6602 29.2684C39.7868 29.1846 39.8858 29.0651 39.9447 28.9252C40.0001 28.7831 40.0142 28.6283 39.9852 28.4786C39.9563 28.3289 39.8855 28.1904 39.7812 28.0792Z" fill="black" />
                            </svg>
                            <h4 className='text-normal font-semibold'>We evolve over time</h4>
                        </div>
                        <div className='flex flex-col items-center'>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="58" height="58" rx="9" stroke="black" stroke-width="2" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5993 29.6003C22.3262 29.6003 21.1053 29.0946 20.2051 28.1944C19.3049 27.2942 18.7992 26.0732 18.7992 24.8001C18.7992 23.5271 19.3049 22.3061 20.2051 21.4059C21.1053 20.5057 22.3262 20 23.5993 20C24.8724 20 26.0933 20.5057 26.9935 21.4059C27.8937 22.3061 28.3995 23.5271 28.3995 24.8001C28.3995 26.0732 27.8937 27.2942 26.9935 28.1944C26.0933 29.0946 24.8724 29.6003 23.5993 29.6003ZM36.3997 29.6003C35.1266 29.6003 33.9057 29.0946 33.0055 28.1944C32.1053 27.2942 31.5996 26.0732 31.5996 24.8001C31.5996 23.5271 32.1053 22.3061 33.0055 21.4059C33.9057 20.5057 35.1266 20 36.3997 20C37.6728 20 38.8937 20.5057 39.7939 21.4059C40.6941 22.3061 41.1999 23.5271 41.1999 24.8001C41.1999 26.0732 40.6941 27.2942 39.7939 28.1944C38.8937 29.0946 37.6728 29.6003 36.3997 29.6003ZM23.5993 32.8004C25.4156 32.7982 27.2115 33.1836 28.8671 33.9308C30.5226 34.678 31.9996 35.7698 33.1996 37.1333V39.2006H13.999V37.1333C15.199 35.7698 16.676 34.678 18.3316 33.9308C19.9871 33.1836 21.783 32.7982 23.5993 32.8004ZM36.3997 39.2006V35.9237L35.5997 35.0165C34.989 34.324 34.3198 33.6853 33.5996 33.1076C34.5189 32.9029 35.4579 32.7998 36.3997 32.8004C38.216 32.7982 40.0119 33.1836 41.6675 33.9308C43.323 34.678 44.8 35.7698 46 37.1333V39.2006H36.3997Z" fill="black" />
                            </svg>
                            <h4 className='text-normal font-semibold'>We work as per client desire</h4>
                        </div>
                        <div className='flex flex-col items-center'>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="58" height="58" rx="9" stroke="black" stroke-width="2" />
                                <path d="M32.121 28.4799C31.9334 28.2924 31.6791 28.1871 31.414 28.1871C31.1488 28.1871 30.8945 28.2924 30.707 28.4799L30 29.1859C29.8155 29.3769 29.5948 29.5293 29.3508 29.6341C29.1068 29.7389 28.8443 29.7941 28.5788 29.7964C28.3132 29.7987 28.0498 29.7481 27.8041 29.6475C27.5583 29.5469 27.335 29.3984 27.1472 29.2107C26.9594 29.0229 26.8109 28.7996 26.7103 28.5538C26.6098 28.308 26.5592 28.0446 26.5615 27.7791C26.5638 27.5135 26.6189 27.2511 26.7238 27.0071C26.8286 26.763 26.9809 26.5424 27.172 26.3579L32.802 20.7259C34.1349 20.4227 35.5295 20.5475 36.7874 21.0824C38.0453 21.6174 39.1026 22.5354 39.8088 23.7058C40.5151 24.8762 40.8344 26.2394 40.7213 27.6017C40.6082 28.964 40.0685 30.2559 39.179 31.2939L37.071 33.4289L32.121 28.4799ZM21.161 22.4679C22.1957 21.4332 23.5492 20.7778 25.0025 20.6076C26.4559 20.4374 27.9241 20.7623 29.17 21.5299L25.757 24.9439C25.0178 25.6816 24.5964 26.6792 24.5829 27.7234C24.5694 28.7677 24.9648 29.7758 25.6847 30.5324C26.4046 31.289 27.3919 31.734 28.4355 31.7724C29.4792 31.8108 30.4964 31.4395 31.27 30.7379L31.414 30.6009L35.657 34.8429L31.414 39.0859C31.0389 39.4608 30.5303 39.6714 30 39.6714C29.4696 39.6714 28.961 39.4608 28.586 39.0859L21.16 31.6599C19.9411 30.4409 19.2563 28.7877 19.2563 27.0639C19.2563 25.3401 19.9421 23.6868 21.161 22.4679Z" fill="black" />
                            </svg>
                            <h4 className='text-normal font-semibold'>Longer Relations, Stronger Relations</h4>
                        </div>
                        <div className='flex flex-col items-center'>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="58 " height="58" rx="9" stroke="black" stroke-width="2" />
                                <path d="M30 17.5C23.1075 17.5 17.5 23.1075 17.5 30V35.1787C17.5 36.4587 18.6212 37.5 20 37.5H21.25C21.5815 37.5 21.8995 37.3683 22.1339 37.1339C22.3683 36.8995 22.5 36.5815 22.5 36.25V29.8213C22.5 29.4897 22.3683 29.1718 22.1339 28.9374C21.8995 28.7029 21.5815 28.5713 21.25 28.5713H20.115C20.81 23.7338 24.9725 20 30 20C35.0275 20 39.19 23.7338 39.885 28.5713H38.75C38.4185 28.5713 38.1005 28.7029 37.8661 28.9374C37.6317 29.1718 37.5 29.4897 37.5 29.8213V37.5C37.5 38.8787 36.3787 40 35 40H32.5V38.75H27.5V42.5H35C37.7575 42.5 40 40.2575 40 37.5C41.3787 37.5 42.5 36.4587 42.5 35.1787V30C42.5 23.1075 36.8925 17.5 30 17.5Z" fill="black" />
                            </svg>
                            <h4 className='text-normal font-semibold'>Available 24/7</h4>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-20'>
                        <div className='flex flex-col items-center'>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="58" height="58" rx="9" stroke="black" stroke-width="2" />
                                <path d="M42 19.5H41.5V20V36L42.4961 36.062L43.5 28.0311V36C43.5 36.3978 43.342 36.7794 43.0607 37.0607C42.7794 37.342 42.3978 37.5 42 37.5H34H33.5V38V42V42.5H34H37.5V43.5H22.5V42.5H26H26.5V42V38V37.5H26H18C17.6022 37.5 17.2206 37.342 16.9393 37.0607C16.658 36.7794 16.5 36.3978 16.5 36V20C16.5 19.6022 16.658 19.2206 16.9393 18.9393C17.2206 18.658 17.6022 18.5 18 18.5H42C42.6531 18.5 43.2087 18.9174 43.4146 19.5H42ZM42.5 20.5H43.4336L42.5 27.9689V20.5ZM32 42.5H32.5V42V38V37.5H32H28H27.5V38V42V42.5H28H32Z" fill="black" stroke="black" />
                                <path d="M33.1495 27.3578L33.2082 27.6429H33.4993H34.6429V28.3571H33.4993H33.2082L33.1495 28.6422C33.0666 29.0443 32.907 29.4267 32.6793 29.7683L32.5169 30.0119L32.7239 30.219L33.5356 31.0307L33.0307 31.5356L32.219 30.7239L32.0119 30.5169L31.7683 30.6793C31.4267 30.907 31.0443 31.0666 30.6422 31.1495L30.3571 31.2082V31.4993V32.6429H29.6429V31.4993V31.2082L29.3578 31.1495C28.9557 31.0666 28.5733 30.907 28.2317 30.6793L27.9881 30.5169L27.781 30.7239L26.9693 31.5356L26.4644 31.0307L27.2761 30.219L27.4831 30.0119L27.3207 29.7683C27.093 29.4267 26.9334 29.0443 26.8505 28.6422L26.7918 28.3571H26.5007H25.3571V27.6429H26.5007H26.7918L26.8505 27.3578C26.9334 26.9557 27.093 26.5733 27.3207 26.2317L27.4831 25.9881L27.2761 25.781L26.4644 24.9693L26.9693 24.4644L27.781 25.2761L27.9881 25.4831L28.2317 25.3207C28.5733 25.093 28.9557 24.9334 29.3578 24.8505L29.6429 24.7918V24.5007V23.3571H30.3571V24.5007V24.7918L30.6422 24.8505C31.0443 24.9334 31.4267 25.093 31.7683 25.3207L32.0119 25.4831L32.219 25.2761L33.0307 24.4644L33.5356 24.9693L32.7239 25.781L32.5169 25.9881L32.6793 26.2317C32.907 26.5733 33.0666 26.9557 33.1495 27.3578ZM30 30.5H30.0004C30.6631 30.4993 31.2985 30.2358 31.7671 29.7671C32.2358 29.2985 32.4993 28.6631 32.5 28.0004V28C32.5 27.5055 32.3534 27.0222 32.0787 26.6111C31.804 26.2 31.4135 25.8795 30.9567 25.6903C30.4999 25.5011 29.9972 25.4516 29.5123 25.548C29.0273 25.6445 28.5819 25.8826 28.2322 26.2322C27.8826 26.5819 27.6445 27.0273 27.548 27.5123C27.4516 27.9972 27.5011 28.4999 27.6903 28.9567C27.8795 29.4135 28.2 29.804 28.6111 30.0787C29.0222 30.3534 29.5055 30.5 30 30.5Z" fill="white" stroke="white" stroke-width="0.714286" />
                            </svg>

                            <h4 className='text-normal font-semibold'>Fully Integrated Services</h4>
                        </div>
                        <div className='flex flex-col items-center'>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="58" height="58" rx="9" stroke="black" stroke-width="2" />
                                <path d="M39 25.5625C39 26.6671 38.1046 27.5625 37 27.5625H34.0576C33.1629 27.5625 32.4375 26.8371 32.4375 25.9424L25.0854 30.8438L32.4375 35.7451C32.4375 34.8504 33.1629 34.125 34.0576 34.125H37C38.1046 34.125 39 35.0204 39 36.125V38.6875C39 39.7921 38.1046 40.6875 37 40.6875H34.4375C33.3329 40.6875 32.4375 39.7921 32.4375 38.6875V37.3242L24.5625 32.0742V32.125C24.5625 33.2296 23.6671 34.125 22.5625 34.125H20C18.8954 34.125 18 33.2296 18 32.125V29.5625C18 28.4579 18.8954 27.5625 20 27.5625H22.5625C23.6671 27.5625 24.5625 28.4579 24.5625 29.5625V29.6133L32.4375 24.3633V23C32.4375 21.8954 33.3329 21 34.4375 21H37C38.1046 21 39 21.8954 39 23V25.5625Z" fill="black" />
                            </svg>

                            <h4 className='text-normal font-semibold'>Complete control over facilities</h4>
                        </div>
                        <div className='flex flex-col items-center'>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="58" height="58" rx="9" stroke="black" stroke-width="2" />
                                <path d="M43.625 41.5L38.5 36.375C39 35.125 38.75 33.5 37.625 32.5C36.5 31.375 34.875 31.125 33.5 31.75L35.875 34.125L34.125 35.875L31.625 33.375C31 34.75 31.25 36.375 32.375 37.625C33.5 38.75 35 39 36.25 38.5L41.375 43.625C41.625 43.875 42 43.875 42.125 43.625L43.375 42.375C43.75 42 43.75 41.625 43.625 41.5ZM31.25 40H17.5V37.5C17.5 34.75 22 32.5 27.5 32.5C28.125 32.5 28.75 32.5 29.25 32.625C28.875 33.375 28.75 34.125 28.75 35C28.75 37 29.75 38.875 31.25 40ZM27.5 20C24.75 20 22.5 22.25 22.5 25C22.5 27.75 24.75 30 27.5 30C30.25 30 32.5 27.75 32.5 25C32.5 22.25 30.25 20 27.5 20Z" fill="black" />
                            </svg>

                            <h4 className='text-normal font-semibold'>Front-End and Back-End Customization</h4>
                        </div>
                        <div className='flex flex-col items-center'>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="58" height="58" rx="9" stroke="black" stroke-width="2" />
                                <path d="M41.451 22.0278C41.3461 21.9166 41.2177 21.8267 41.0737 21.7637C40.9297 21.7007 40.7733 21.666 40.6142 21.6618C38.1427 21.6018 35.0153 19.1478 32.9476 18.1848C31.6704 17.5918 30.8271 17.2008 30.1939 17.0978C30.0653 17.0804 29.9347 17.0807 29.8062 17.0988C29.173 17.2018 28.3297 17.5928 27.0536 18.1858C24.9859 19.1478 21.8585 21.6018 19.387 21.6618C19.2278 21.6662 19.0713 21.701 18.9271 21.764C18.783 21.827 18.6543 21.9167 18.5491 22.0278C18.331 22.2569 18.2185 22.5564 18.2357 22.8618C18.7667 32.8848 22.6382 39.0878 29.4314 42.6928C29.608 42.7858 29.804 42.8338 29.999 42.8338C30.1939 42.8338 30.3899 42.7858 30.5676 42.6928C37.3608 39.0878 41.2313 32.8848 41.7633 22.8618C41.7815 22.5564 41.6693 22.2567 41.451 22.0278ZM36.0491 25.9698L30.3167 33.8248C30.111 34.1068 29.7879 34.2938 29.468 34.2938C29.1471 34.2938 28.7907 34.1308 28.5656 33.9218L24.525 30.1688C24.393 30.0458 24.319 29.8793 24.319 29.7058C24.319 29.5322 24.393 29.3657 24.525 29.2428L25.5233 28.3138C25.656 28.1918 25.8352 28.1233 26.0219 28.1233C26.2086 28.1233 26.3878 28.1918 26.5205 28.3138L29.1482 30.7538L33.7133 24.4968C33.8189 24.3536 33.9812 24.255 34.1649 24.2226C34.3485 24.1902 34.5384 24.2266 34.6933 24.3238L35.8617 25.0598C36.0161 25.1577 36.1225 25.3084 36.1576 25.4789C36.1927 25.6494 36.1537 25.8259 36.0491 25.9698Z" fill="black" />
                            </svg>

                            <h4 className='text-normal font-semibold'>More reliability</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className='h-screen w-full bg-zinc-900 text-white'>
                <h1 className='text-[5rem] font-bold text-center pt-20 pb-20'>Design Principles We Follow</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <article className='w-80 h-96 p-8 border border-white rounded-md'><h4 className='text-lg font-semibold h-14 mb-10'>We reduce choices for your clients</h4><p className='text-justify'>According to Hick’s law, more choices you give to the user, lesser for them to make a decision. By maintaining the visual design elements lesser, such as buttons, it increases the chances of user action on your website.</p></article>
                    <article className='w-80 h-96 p-8 border border-white rounded-md'><h4 className='text-lg font-semibold h-14 mb-10'>We make the design familiar</h4><p className='text-justify'>According to Jakob’s law, users expect the website to work the same way as other websites. Building a product that has the same functionality with other popular products will create good user experience.</p></article>
                    <article className='w-80 h-96 p-8 border border-white rounded-md'><h4 className='text-lg font-semibold h-14 mb-10'>Consistent branding throughout your website</h4><p className='text-justify'>We keep the branding color, essence, and style, consistent throughout the website. This makes the first impression long lasting, making the user experience memorable.</p></article>
                    <article className='w-80 h-96 p-8 border border-white rounded-md'><h4 className='text-lg font-semibold h-14 mb-10'>We use CTAs to your advantage</h4><p className='text-justify'>A responsive and interactive design is not worth if it doesn’t convert. We use powerful Call to Actions(CTAs) to help the user engage and take actions relevant to your business goals.</p></article>
                </div>
            </section>
        </div>
    )
}