import React from 'react'
import logo from '../../src/assets/logooo.png'

function Hero() {
  return (
    <>
    <div>
    <div class="relative pt-48 pb-12 overflow-hidden bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
  

    <div class="absolute inset-y-0 right-0">
        <img class="object-cover w-full h-full max-w-4xl origin-left opacity-50 xl:opacity-100 lg:scale-110 lg:-translate-x-8" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/hero/5/background.png" alt="" />
    </div>

    <div class="relative">
        <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div class="w-full text-right lg:w-2/3 xl:w-1/2 md:text-left">
                <p class="font-sans text-base font-normal tracking-tight uppercase text-white">Hi, I am </p>
                <h1 class="mt-6 tracking-tighter text-white">
                    <span class="font-sans font-normal text-7xl">Pawandeep Kour</span><br /><br/>
                    <span class="font-serif italic font-normal text-4xl">Frontend Developer</span>
                </h1>
                
                <div class="flex items-center justify-end mt-8 space-x-3 md:justify-start sm:space-x-4">
                    <a
                        href="#"
                        title=""
                        class="
                            text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                        role="button"
                    >
                        See Projects
                    </a>

                    
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
    </>
  )
}

export default Hero