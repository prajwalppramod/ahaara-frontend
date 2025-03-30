import { Button } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <div className='relative'>
      {/* Hero section */}
      {/* <section class="text-white body-font bg-[url(src/assets/bgimage.jpg)] bg-cover"> */}
            <section class="text-white body-font bg-[url(src/assets/bg.jpg)] bg-cover">


        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="container relative z-10 mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-5xl text-4xl mb-4 font-medium">Share More, Waste Less:
              <br class="hidden lg:inline-block" />Connecting Food, Creating Impact.
            </h1>
            <p class="mb-8 text-xl leading-relaxed">Join a community where extra food finds a purpose — give, receive, and make a difference.</p>
            <div class="flex justify-center">
              {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
              <Button variant='contained' color='success' size='large'>Share Food</Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section class="text-gray-600 body-font relative z-10">
        <div class="container px-5 py-10 mx-auto">
          <h1 className='text-white text-4xl pb-10'>How it works</h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-4 border-white rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="src/assets/how1.jpg" alt="blog" />
                <div class="p-6 bg-white">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">STEP 1</h2>
                  <h1 class="title-font text-lg font-medium text-black mb-3">Let Us Know</h1>
                  <p class="leading-relaxed text-black/60 mb-3">Use our website to inform us about the extra food you have.</p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-4 border-white rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="src/assets/how2.jpg" alt="blog" />
                <div class="p-6 bg-white">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">STEP 2</h2>
                  <h1 class="title-font text-lg font-medium text-black mb-3">We Pick It Up</h1>
                  <p class="leading-relaxed text-black/60 mb-3">Our team will come to collect the extra food from your location.</p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-4 border-white rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="src/assets/how3.jpg" alt="blog" />
                <div class="p-6 bg-white">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">STEP 3</h2>
                  <h1 class="title-font text-lg font-medium text-black mb-3">We Donate It</h1>
                  <p class="leading-relaxed text-black/60 mb-3">We then donate the extra food to those who need it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of food sharing */}
      <section class="relative z-10 text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 className='text-white text-4xl pb-10'>Benefits of food sharing</h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-white px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col justify-center items-center">
                <h2 class="tracking-widest text-3xl title-font font-medium text-gray-400 mb-2">♻️</h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Prevent Food Waste</h1>
                <p class="leading-relaxed mb-3">By donating extra food, you help reduce food waste and support sustainable practices.</p>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-white px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col justify-center items-center">
                <h2 class="tracking-widest text-3xl title-font font-medium text-gray-400 mb-2">😇</h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Helps Alleviate Hunger</h1>
                <p class="leading-relaxed mb-3">Sharing excess food with those in need helps them access necessary nutrition.</p>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-white px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col justify-center items-center">
                <h2 class="tracking-widest text-3xl title-font font-medium text-gray-400 mb-2">🌍</h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Promotes Community</h1>
                <p class="leading-relaxed mb-3">Sharing fosters a sense of solidarity, strengthening community bonds.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonial section */}
      <section class="text-gray-600 body-font relative z-10">
        <div class="container px-5 py-24 mx-auto">
          <h1 className='text-white text-4xl pb-10'>Testimonial</h1>
          <div class="flex flex-wrap -m-4">
  <div class="p-4 md:w-1/2 w-full">
    <div class="h-full bg-gray-100 p-8 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 76.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p class="leading-relaxed text-lg mb-6">This platform has been a game-changer for me. It’s heartwarming to know that the food I no longer need is helping someone in need!</p>
      <a class="inline-flex items-center">
        <img alt="testimonial" src="src/assets/person1.jpg" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
        <span class="flex-grow flex flex-col pl-4">
          <span class="title-font font-medium text-gray-900">Louis Caulfield</span>
          <span class="text-gray-500 text-sm">SOFTWARE ENGINEER</span>
        </span>
      </a>
    </div>
  </div>
  <div class="p-4 md:w-1/2 w-full">
    <div class="h-full bg-gray-100 p-8 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p class="leading-relaxed text-lg mb-6">I’ve never felt more connected with my community. It’s amazing to see how sharing food can create such a positive ripple effect.</p>
      <a class="inline-flex items-center">
        <img alt="testimonial" src="src/assets/person2.jpg" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
        <span class="flex-grow flex flex-col pl-4">
          <span class="title-font font-medium text-gray-900">Dr. Alper Kamu</span>
          <span class="text-gray-500 text-sm">PEDIATRICIAN</span>
        </span>
      </a>
    </div>
  </div>
</div>

        </div>
      </section>
    </div>
  )
}

export default Home