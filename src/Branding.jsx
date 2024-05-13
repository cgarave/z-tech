export default function Branding() {

    return (
        <div className="relative h-full flex justify-center" >
            <div className="h-52 border-x-[0.5px] border-white 
                            absolute animate-line"></div>
            <div className="w-96 h-96 border border-white rounded-full flex justify-center items-center font-light text-xl text-white
                            absolute left-[26rem] top-10 animate-branding">
                <h1 className="animate-text1 relative -bottom-20">Branding</h1>
            </div>
            <div className="w-96 h-96 border border-white rounded-full flex justify-center items-center font-light text-xl text-white
                            absolute right-[26rem] top-10 animate-needs">
                <h1 className="animate-text2 relative -bottom-20">Your needs</h1>
            </div>
            <div className="w-96 h-96 border border-white rounded-full flex justify-center items-center font-light text-xl text-white
                            absolute bottom-20 animate-customers">
                <h1 className="animate-text3 relative -bottom-20">Your customers needs</h1>
            </div>
        </div>
    )
}
