
import React, { useState } from "react";
import book from '../../src/assets/bookHaven.png'
import luxe from '../../src/assets/luxeRide.png'
import port from '../../src/assets/portfolio.png'
import wed from '../../src/assets/weddingBuzz.png'


import workoutgym from '../../src/assets/workoutgym.png';
import fragrance from '../../src/assets/fragrance.png';
import moneyVest from '../../src/assets/moneyVest.png';
import music from '../../src/assets/music.png';

import weddingBuzz from '../../src/assets/wedding.png'

function Projects() {

    
        const [showCard, setShowCard] = useState("all");
      
        const handleProject = (category) => {
          setShowCard(category);
        };
  return (
    <>
      <section id="projects" className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]  dark:bg-dark">
      <div className='bg-teal-500 text-white flex justify-center'>
  <h3 className='text-center text-6xl p-5 italic'>Projects</h3>
</div>
        <div className="container mx-auto ">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
               
                <h2 className="text-dark mb-3 pt-6 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Recent Projects
                </h2>
               
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                   Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("frontend")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "frontend"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Frontend
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("backend")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "backend"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Backend
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("app")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "app"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    App
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref={book}
              category="Frontend"
              title="BookHaven"
              button="View Details"
              buttonHref="https://pawanharry.github.io/BookStore/"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={luxe}
              category="Frontend"
              title="LuxeRide"
              button="View Details"
              buttonHref="https://pawanharry.github.io/CarRental/"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={port}
              category="Frontend"
              title="Portfolio"
              button="View Details"
              buttonHref="https://pawanharry.github.io/portfolio/"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={wed}
              category="Frontend"
              title="Wedding Buzz"
              button="View Details"
              buttonHref="https://pawanharry.github.io/WeddingBuzz/"
              showCard={showCard}
            />
        
            <PortfolioCard
              ImageHref={workoutgym}
              category="design"
              title="Workout and gym"
              button="View Details"
              buttonHref="https://www.figma.com/proto/k1zfcMOCpHRdyaHgzq7bjY/Untitled?node-id=34-251&t=R3a6Iz9czxqoT2MU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=34%3A532&show-proto-sidebar=1"
              showCard={showCard}
            />

            <PortfolioCard
              ImageHref={fragrance}
              category="design"
              title="fragrance"
              button="View Details"
              buttonHref="https://www.figma.com/proto/31oxjus1xbMPZQqVBmfUOh/Untitled?node-id=2-2&t=Zqhh6mkh68nFiyPA-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
              showCard={showCard}
            />

<PortfolioCard
              ImageHref={moneyVest}
              category="design"
              title="Moneyvest"
              button="View Details"
              buttonHref="https://www.figma.com/proto/Ykt2Hx3880Uvc2QS0h9HE6/Untitled?node-id=2-2&t=G3zVJCLI6Yesq6pp-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2"
              showCard={showCard}
            />

<PortfolioCard
              ImageHref={music}
              category="design"
              title="Podcast"
              button="View Details"
              buttonHref="https://www.figma.com/proto/wL0mKTFGR2CbbtVP6IW0TN/Untitled?node-id=1-2&t=aEoH0HMs1bArhDk1-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
              showCard={showCard}
            />

<PortfolioCard
              ImageHref={weddingBuzz}
              category="design"
              title="WeddingBuzz"
              button="View Details"
              buttonHref="https://www.figma.com/proto/YIjT7HWlebX9kMCYl6VW9e/WEDDING-BUZZ?node-id=4-2&t=2ophtncK5KXSRI7Q-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A2"
              showCard={showCard}
            />

          </div>
        </div>
      </section>
    </>
  );
};


const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12 ">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative outline outline-offset-2 outline-pink-500  z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};













export default Projects