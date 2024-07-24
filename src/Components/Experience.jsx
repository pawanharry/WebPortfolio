import React from 'react'

function Experience() {
  return (
    <>
  <div>
  <div className='bg-teal-500 text-white flex justify-center'>
  <h3 className='text-center text-6xl p-5 italic'>EXPERIENCE</h3>
</div>
    <div className='flex flex-col  bg-gradient-to-b from-gray-50 via-white to-gray-50'>
    <div class="m-5">
  <div class="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
    
    <div class="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
      <h3 class="text-sm text-gray-600">Freelance Projects</h3>
      <a href="#" class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">  Frontend Engineer </a>
      <ul class="overflow-hidden pr-7 text-sm">
        <li>
        Designed and developed custom websites for various clients, delivering high-quality projects on time and within budget.</li>
       <li> Utilized HTML, CSS, JavaScript, and frameworks such as React and Vite.js to create responsive and interactive web applications.</li>
       <li> Worked closely with clients to understand their needs and translate them into functional and aesthetically pleasing websites.</li>
        <li>Improved clients' website performance and SEO, resulting in an average 30% increase in web traffic.</li>
        <li>Managed all aspects of project lifecycle, from initial consultation to final delivery and ongoing maintenance.
        </li>
      </ul>

      <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
        <div class="">Experience:<span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> 2022-2023 </span></div>
        <div class="">Location:<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">Remote</span></div>
      </div>
    </div>
  </div>
</div>

<div class="m-5">
  <div class="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
   
    <div class="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
      <h3 class="text-sm text-gray-600">Creative shell technologies ltd</h3>
      <a href="#" class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"> Jr. Frontend Engineer </a>
      <ul class="overflow-hidden pr-7 text-sm">
        <li>
        Developed and maintained responsive websites using HTML, CSS, and JavaScript.</li>
       <li> Assisted in building and maintaining web applications using Vue.js, leading to a 40% reduction in page load times.</li>
       <li> Collaborated with design teams to create visually appealing and user-friendly interfaces.</li>
        <li>Developed reusable components and optimized code for scalability, reducing development time for future projects by 25%.</li>
        <li>Participated in design and development sprints, ensuring project deadlines were met, which contributed to a 100% on-time project delivery rate.
        </li>
      </ul>

      <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
        <div class="">Experience:<span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> 2020-2022 </span></div>
        <div class="">Location<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">Delhi</span></div>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>

    </>
  )
}

export default Experience