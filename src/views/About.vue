<template>
  <Header/>
  <div class="mx-auto my-10 w-10/12">
    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 text-center m-5">This is an example video page</h1>
    <p class="text-center text-gray-600">
                Nulla facilisi. Nullam et egestas enim, a rutrum metus. Nulla vitae accumsan arcu. Nulla facilisi. Donec leo risus, tempus vitae suscipit eu, efficitur nec dui. Nunc bibendum augue malesuada nulla egestas fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla et pulvinar dui, eu maximus sem. In aliquam eros erat. Praesent convallis neque quis augue convallis, at pellentesque sapien egestas.
    </p>
  </div>
  <div id="container" class="flex justify-center mx-auto w-10/12 my-5">
        <div class="w-2/4 mx-auto justify-center flex">
            <div class="w-max">
                <iframe class="" width="500" height="500" src="https://www.youtube.com/watch?v=10" frameborder="0" ></iframe>
            </div>
        </div>
  </div>
  <div class="flex justify-center mx-auto w-10/12 mb-5">
    <div class="sm:mt-8 sm:flex sm:justify-center inline-block align-middle lg:justify-start">
        <div class="rounded-md shadow">
          <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            Lorem Ipsum
          </a>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
            En savoir plus
          </a>
        </div>
      </div>  
  </div>
  <Footer/>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
