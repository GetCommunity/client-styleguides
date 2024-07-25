import type { Component } from 'solid-js';
import './index.css';

const App: Component = () => {
  return (
    <>
      <div class='max-w-screen-lg m-auto'>
        <p class='text-tollbrothers-primary-blue-dark text-2xl font-tollbrothers-primary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus at
          impedit pariatur recusandae adipisci, maxime delectus reiciendis mollitia quia
          incidunt saepe tempore excepturi cumque blanditiis ducimus vero laudantium.
          Quos!
        </p>
      </div>
      <div class='max-w-3xl mx-auto my-24'>
        <h1 class='font-bold text-3xl pb-6 text-stone-800 text-center'>
          Tailwind CSS Button Plugin Tutorial
        </h1>
        <div class='flex flex-wrap items-center justify-center gap-4'>
          <div class='w-32 h-32 text-white text-center bg-getcommunity-red flex items-baseline justify-center'>
            bg-getcommunity-red
          </div>
          <div class='w-32 h-32 text-white text-center bg-getcommunity-orange flex items-baseline justify-center'>
            bg-getcommunity-orange
          </div>
          <div class='w-32 h-32 text-white text-center bg-getcommunity-yellow flex items-baseline justify-center'>
            bg-getcommunity-yellow
          </div>
          <div class='w-32 h-32 text-white text-center bg-getcommunity-green flex items-baseline justify-center'>
            bg-getcommunity-green
          </div>
          <div class='w-32 h-32 text-gray-900 text-center bg-getcommunity-blue-light flex items-baseline justify-center'>
            bg-getcommunity-blue-light
          </div>
          <div class='w-32 h-32 text-white text-center bg-getcommunity-blue-dark flex items-baseline justify-center'>
            bg-getcommunity-blue-dark
          </div>
          <div class='w-32 h-32 text-gray-900 text-center bg-getcommunity-brown-light flex items-baseline justify-center'>
            bg-getcommunity-brown-light
          </div>
          <div class='w-32 h-32 text-white text-center bg-getcommunity-brown-dark flex items-baseline justify-center'>
            bg-getcommunity-brown-dark
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
