import React from 'react'
import pic from '../../src/assets/heroo.png'


function Hero() {
  return (
    <>





    <div id='hero' className='ml-65 pl-5 mt-10  pb-8'>
    <section class="pt-12 bt-10 pb-10 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
                <div class="self-center lg:col-span-6">
                    <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">Hey 👋 I am Pawandeep Kour, Front End Developer.</h1>
                    <p class="mt-5 text-base font-normal leading-7 text-gray-500">I enjoy transforming creative ideas into beautiful, responsive, and user-friendly interfaces.</p>
                    <div class="relative inline-flex mt-9 group">
                        <div class="absolute "></div>

                        <a
                            href="#projects"
                            title=""
                            class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                            role="button"
                        >
                            Checkout My Work
                        </a>
                    </div>
                </div>

                

                <div class="ml-5 pl-5 self-end lg:col-span-4">
                    <img class="w-18 h-15 mx-auto" src={pic} alt="" />
                </div>
            </div>
        </div>
    </section>

    </div>
    </>
  )
}

export default Hero