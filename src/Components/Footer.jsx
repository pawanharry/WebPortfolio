import React from 'react'
import logo from '../../src/assets/logooo.png'


function Footer() {
  return (
    <>
   <footer class="flex flex-col space-y-10 justify-center m-10">
    <hr/>

<nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
    <a class="hover:text-gray-900" href="#">About</a>
    <a class="hover:text-gray-900" href="#">Experience</a>
    <a class="hover:text-gray-900" href="#">Skills</a>
    <a class="hover:text-gray-900" href="#">Projects</a>
    <a class="hover:text-gray-900" href="#">Education</a>
    <a class="hover:text-gray-900" href="#">Contact</a>
</nav>

<div class="flex justify-center space-x-5">
    <a href="https://github.com/pawanharry" target="_blank" rel="noopener noreferrer">
    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github"/>
    </a>
    <a href="https://www.linkedin.com/in/pawandeep-kour/" target="_blank" rel="noopener noreferrer">
        <img src={"https://img.icons8.com/fluent/30/000000/linkedin-2.png"} />
    </a>
    <a href="https://dribbble.com/pawan260" target="_blank" rel="noopener noreferrer">
    <img width="30" height="30" src="https://img.icons8.com/color/48/dribbble.png" alt="dribbble"/>
    </a>
    <a href="https://www.behance.net/pawandeepkour260" target="_blank" rel="noopener noreferrer">
    <img width="30" height="30" src="https://img.icons8.com/color/48/behance.png" alt="behance"/>
    </a>
    
</div>
<p class="text-center text-gray-700 font-medium">&copy; 2024 Pawandeep kour All rights reservered.</p>
</footer>
    </>
  )
}

export default Footer