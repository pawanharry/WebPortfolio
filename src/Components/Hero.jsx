import React from 'react'
import pic from '../../src/assets/heroo.png'


function Hero() {
  return (
    <>
    <div className='mt-5 pt-5 pb-8'>
    <section class="pt-12 bt-10 pb-10 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
                <div class="self-center lg:col-span-4">
                    <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">Hey 👋 I am Pawandeep Kour, Front End Developer.</h1>
                    <p class="mt-5 text-base font-normal leading-7 text-gray-500">I enjoy transforming creative ideas into beautiful, responsive, and user-friendly interfaces.</p>
                    <div class="relative inline-flex mt-9 group">
                        <div class="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                        <a
                            href="#"
                            title=""
                            class="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                            role="button"
                        >
                            Checkout My Work
                        </a>
                    </div>
                </div>

                <div class="self-end lg:order-last lg:pb-20 lg:col-span-3">
                    <p class="text-xs font-bold tracking-widest text-gray-500 uppercase">⚡️ Latest Projects</p>

                    <div class="mt-6 space-y-6 lg:space-y-8">
                        <div class="relative overflow-hidden">
                            <div class="flex items-start lg:items-center">
                                <img class="object-cover w-12 h-12 rounded-lg shrink-0" src={pic} alt="" />
                                <p class="ml-5 text-base font-bold leading-6 text-gray-900">
                                    <a href="#" title="">
                                        Ecoomerce WEbsite for Watches
                                        <span class="absolute inset-0" aria-hidden="true"></span>
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="relative overflow-hidden">
                            <div class="flex items-start lg:items-center">
                                <img class="object-cover w-12 h-12 rounded-lg shrink-0" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-2.png" alt="" />
                                <p class="ml-5 text-base font-bold leading-6 text-gray-900">
                                    <a href="#" title="">
                                        Wedding Buzz, Website for event organizers
                                        <span class="absolute inset-0" aria-hidden="true"></span>
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="relative overflow-hidden">
                            <div class="flex items-start lg:items-center">
                                <img class="object-cover w-12 h-12 rounded-lg shrink-0" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-3.png" alt="" />
                                <p class="ml-5 text-base font-bold leading-6 text-gray-900">
                                    <a href="#" title="">
                                        BookHaven, Ecommerce website for books
                                        <span class="absolute inset-0" aria-hidden="true"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="self-end lg:col-span-5">
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