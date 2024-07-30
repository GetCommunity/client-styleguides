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
        <h2 class='font-bold text-1xl py-6 text-stone-800 text-center'>
          Pacific Communities
        </h2>
        <div class='flex flex-wrap items-center justify-center gap-4'>
          <div class='w-32 h-32 text-white text-center bg-pacificcommunities-primary-blue-light flex items-baseline justify-center'></div>
          <div class='w-32 h-32 text-white text-center bg-pacificcommunities-primary-blue-dark flex items-baseline justify-center'></div>
          <div class='w-32 h-32 text-white text-center bg-pacificcommunities-primary-gray flex items-baseline justify-center'></div>
        </div>
        <div class='flex flex-wrap items-center justify-center gap-4 mt-4'>
          <div class='w-32 h-32 text-white text-center bg-pacificcommunities-secondary-yellow flex items-baseline justify-center'></div>
          <div class='w-32 h-32 text-white text-center bg-pacificcommunities-secondary-green flex items-baseline justify-center'></div>
          <div class='w-32 h-32 text-white text-center bg-pacificcommunities-secondary-magenta flex items-baseline justify-center'></div>
          <div class='w-32 h-32 text-white text-center bg-pacificcommunities-secondary-red flex items-baseline justify-center'></div>
          <div class='w-32 h-32 text-white text-center bg-pacificcommunities-secondary-orange flex items-baseline justify-center'></div>
        </div>
        <h2 class='font-bold text-1xl py-6 text-stone-800 text-center mt-4'>
          Toll Brothers
        </h2>
        <div class='flex flex-wrap items-center justify-center gap-4 mt-4'>
          <div class='w-32 h-32 text-white text-center bg-tollbrothers-primary-blue-dark flex items-baseline justify-center'></div>
          <div class='w-32 h-32 text-white text-center bg-tollbrothers-primary-white flex items-baseline justify-center'></div>
          <div class='w-32 h-32 text-white text-center bg-tollbrothers-primary-tan flex items-baseline justify-center'></div>
          <div class='w-32 h-32 text-white text-center bg-tollbrothers-primary-blue-light flex items-baseline justify-center'></div>
        </div>
        <div class='flex flex-wrap items-center justify-center gap-4 mt-4'>
          <div class='w-32 h-32 text-white text-center bg-tollbrothers-accent-blue flex items-baseline justify-center'></div>
          <div class='w-32 h-32 text-white text-center bg-tollbrothers-accent-tan flex items-baseline justify-center'></div>
          <div class='w-32 h-32 text-white text-center bg-tollbrothers-accent-magenta flex items-baseline justify-center'></div>
        </div>
      </div>
    </>
  );
};

export default App;
