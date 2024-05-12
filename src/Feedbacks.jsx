import img1 from './assets/img1.png'

function handleClick() {
    let stars = document.querySelectorAll('#stars svg');

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            //flex-row-reverse is added so the position of stars got reversed also.
            //for(let i = 0; i < 5; i++){
            //    stars[i].classList.remove('fill-yellow-300', 'stroke-black')
            //}
            //for(let i = 0; i <= index; i++){
            //    stars[i].classList.add('fill-yellow-300', 'stroke-black')
            //}

            for (let i = 4; i >= 0; i--) {
                stars[i].classList.remove('fill-yellow-300', 'stroke-black')
            }
            for (let i = 4; i >= index; i--) {
                stars[i].classList.add('fill-yellow-300', 'stroke-black')
            }
        })
    })
}

export default function Feedbacks() {

    return (
        <div className="flex flex-col items-center
                        w-[50rem] h-60 p-14 bg-white rounded-xl relative">
            <img src={img1} className='w-24 absolute -top-10' />
            <div id='stars' className='flex flex-row-reverse mt-4 mb-4'> {/*used flex-row-reverse to use peer-hover*/}
                <svg onMouseEnter={handleClick} className='peer/s0 hover:fill-yellow-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                <svg onMouseEnter={handleClick} className='peer/s1 peer-hover/s0:fill-yellow-300 hover:fill-yellow-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                <svg onMouseEnter={handleClick} className='peer/s2 peer-hover/s0:fill-yellow-300 peer-hover/s1:fill-yellow-300 hover:fill-yellow-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                <svg onMouseEnter={handleClick} className='peer/s3 peer-hover/s0:fill-yellow-300 peer-hover/s1:fill-yellow-300 peer-hover/s2:fill-yellow-300 hover:fill-yellow-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                <svg onMouseEnter={handleClick} className='peer/s4 peer-hover/s0:fill-yellow-300 peer-hover/s1:fill-yellow-300 peer-hover/s2:fill-yellow-300 peer-hover/s3:fill-yellow-300 hover:fill-yellow-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
            </div>
            <p className="text-sm text-black text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus aliquet tellus id venenatis. Aliquam accumsan efficitur nulla et dictum. Suspendisse arcu metus, tempus eu luctus non, posuere eget lacus. Proin rhoncus dolor at suscipit varius. Cras ut egestas arcu. Donec accumsan at lacus at hendrerit. Vivamus egestas rhoncus enim eget lobortis.</p>
        </div>
    )
}