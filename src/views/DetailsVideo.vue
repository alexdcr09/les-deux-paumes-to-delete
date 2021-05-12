<template>
    <HeaderBlanc/>
        <div class="m-5">
            <h2 class="text-4xl font-bold">titre = {{ video.title }}</h2>
        </div>
        <div id="container" class="flex justify-center mx-auto w-10/12 my-10">
            <div class="mx-auto justify-center flex">
                <iframe
                    width="560" height="315"
                    :src="video.src"
                    allowFullScreen
                ></iframe>
            </div>
            <div class="w-2/4 mx-auto flex flex-col my-20 content-center">
                <p class="text-left text-gray-600">
                    {{ video.texte}}
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center inline-block align-middle lg:justify-start">
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
        </div>
    <Footer/>
</template>

<script>
import HeaderBlanc from '../components/HeaderBlanc.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'
// @ is an alias to /src

export default {
    name: 'Home',
    components: {
        HeaderBlanc,
        Footer
    },
    data() {
        return {
            video : Object
        }
    },
    mounted() {
        this.fetchVideo();
    },    
    methods: {
        fetchVideo() {
            axios
                .get(`http://localhost:3000/videos/${this.$route.params.id}`)
                .then(response => {this.video = response.data; })
        },
    }
}
</script>
