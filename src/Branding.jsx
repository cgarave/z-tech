export default function Branding() {

    return (
        <div className="relative h-full flex justify-center" >
            <h1 className="text-white text-xl font-light mt-10 opacity-0 animate-line">Your Website</h1>
            <div className="h-0 border-x-[0.5px] border-white 
                            absolute translate-y-20 animate-line"></div>
            <div className="w-96 h-96 border border-white rounded-full flex justify-center items-center font-light text-xl text-white
                            absolute -translate-x-60 translate-y-10 animate-branding">
                <h1 className="animate-text1 relative -bottom-20">Branding</h1>
            </div>
            <div className="w-96 h-96 border border-white rounded-full flex justify-center items-center font-light text-xl text-white
                            absolute translate-x-60 translate-y-10 animate-needs">
                <h1 className="animate-text2 relative -bottom-20">Your needs</h1>
            </div>
            <div className="w-96 h-96 border border-white rounded-full flex justify-center items-center font-light text-xl text-white
                            absolute translate-y-[28rem] animate-customers">
                <h1 className="animate-text3 relative -bottom-20">Your customers needs</h1>
            </div>
        </div>
    )
}


// export default function Branding() {

//     return (
//         <div className="relative h-full flex justify-center" >
//             <div className="h-52 border-x-[0.5px] border-white 
//                             relative translate-y-20 animate-line"></div>
//             <div className="w-96 h-96 border border-white rounded-full flex justify-center items-center font-light text-xl text-white
//                             absolute -translate-x-40 translate-y-28">
//                 <h1 className="animate-text1 relative -bottom-20">Branding</h1>
//             </div>
//             <div className="w-96 h-96 border border-white rounded-full flex justify-center items-center font-light text-xl text-white
//                             absolute translate-x-40 translate-y-28">
//                 <h1 className="animate-text2 relative -bottom-20">Your needs</h1>
//             </div>
//             <div className="w-96 h-96 border border-white rounded-full flex justify-center items-center font-light text-xl text-white
//                             absolute translate-y-[24rem]">
//                 <h1 className="animate-text3 relative -bottom-20">Your customers needs</h1>
//             </div>
//         </div>
//     )
// }
