import React from 'react'
import pic from '../../src/assets/MEE.jpeg'
import chart from '../../src/assets/chart.png'

function Aboutme() {
  return (
    <>


<body class="font-poppins bg-black relative">
  <div id="container" class="p-20 w-auto flex px-24 justify-center relative">
    
      <div id="container" class="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
          <div class="mr-10">
             <img
               class="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
               src={pic}
               alt="image of myself"
             />
          </div>
          <div class="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
      <h1 class="text-white font-bold text-3xl mt-6 mb-8">
        Hey it's me, Pawandeep kour
      </h1>
     

      <p class="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
      I'm a passionate front-end developer with a knack for creating visually stunning and user-friendly web interfaces. With a solid foundation in HTML, CSS, and JavaScript, and expertise in frameworks like React and Vue, I bring ideas to life with clean, efficient code. My goal is to craft seamless digital experiences that delight users and drive engagement. Whether it's developing responsive websites or optimizing UI/UX design, I thrive on turning complex problems into elegant solutions. Let's build something amazing together!
      </p>

     

      <div id="social" class="flex flex-wrap justify-start items-center gap-4">
        <a rel="noopener" target="_blank" href="https://github.com/iam-aydin" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
            <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg" width="20px" height="20px" alt="Github" />
            <span>Visit my Github</span>
        </a>
        <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/aydin-vesali-moghaddam-82a860275/" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
            <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg" width="20px" height="20px" alt="LinkedIn" />
            <span>Follow me on Linkedin</span>
        </a>
        <a rel="noopener" target="_blank" href="https://twitter.com/ichbinaydin" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
            <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/" width="20px" height="20px" alt="Twitter" />
            <span>Follow me on Twitter</span>
        </a>
    </div>
    </div>
         
         
    </div>
  </div>
  <div class="px-4 mx-auto sm:px-6 bg-grey-100 lg:px-8 max-w-7xl pb-8">
            <div class="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 pb-8 gap-x-6 gap-y-8 lg:max-w-none">
                <div class="self-center lg:col-span-4">
                    <h1 class="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">Part Coder</h1>
                    <ul className='pt-10'>
                        <li class=" font-bold text-white">UI Design</li>
                        <li class=" font-bold text-white">UX Design</li>
                        <li class=" font-bold text-white">Interactive</li>
                        <li class=" font-bold text-white">Wireframing</li>
                        <li class=" font-bold text-white">Prototyping</li>
                    </ul>
                   
                       
                </div>
                <div class="self-end lg:col-span-5">
                    <img class="w-18 h-15 mx-auto" src={chart} alt="" />
                </div>

                <div class="self-center lg:col-span-3">
                    <h1 class="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">Part Designer</h1>
                    <ul className='pt-10'>
                        <li  class=" font-bold text-white">Frontend Development</li>
                        <li class=" font-bold text-white">HTML </li>
                        <li class=" font-bold text-white">CSS</li>
                        <li class=" font-bold text-white">Javascript</li>
                        
                    </ul>
                  
                </div>

               
            </div>
        </div>
</body>



    </>
  )
}

export default Aboutme