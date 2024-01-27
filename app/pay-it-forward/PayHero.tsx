import Image from "next/image"

const PayHero = () => {
  return (
    <section className="pt-24 bg-white">
    <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-center  md:w-11/12 xl:w-9/12 ">
            <h1 className="mb-8 text-2xl inline-flex items-center font-extrabold leading-none tracking-normal text-green-600 md:text-6xl md:tracking-tight">
                <span>DoDigi </span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-slate-400 to-purple-600 "> - Pay it forward</span> 
            </h1>
            <p className="px-0 mb-8 text-lg text-slate-600 md:text-xl lg:px-24">
            Empowering of the next generation of female founders by mentoring girls in high school for personal and professional development.
            </p>
            
            <div className="w-full mx-auto my-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
                <div className="relative overflow-hidden shadow-2xl">
                    <div className="flex items-center flex-none px-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-b-none h-11 rounded-xl">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                    <Image src='/programs/payit.jpg' width={2000} height={1500} alt='hero_img' />
                </div>
            </div>
        </div>
        </div>
    </div>
</section>
  )
}

export default PayHero