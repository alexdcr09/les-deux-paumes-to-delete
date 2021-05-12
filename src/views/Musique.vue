<template>
    <div class="">
        <Header/>
            <main class="font-body">
                <div class="flex m-auto md:mt-0 mt-5 h-full md:h-screen justify-center">
                    <div class="sm:w-4/5 m-auto flex flex-wrap justify-center">
                        <h1 class="text-5xl text-blue font-bold uppercase md:text-6xl">
                            MUSIQUE
                        </h1>
                        <h3 class="md:text-xl text-lg text-dark-900 font-medium md:font-bold mt-4 w-11/12 md:w-10/12">
                            Soyez les premiers à soutenir notre projet et à proposer le meilleur contenu vidéo pour nos enfants !
                        </h3>
                    </div>
                    <div class="w-4/5 justify-center mx-auto 2xl:flex xl:flex lg:flex hidden">
                        <Illustration :isAnime="false" :isActivity="false" :isMusic="true"/>
                    </div>
                </div>
                <div>
                    <div v-if="videosComptines.length > 0 && videosChansons.length > 0">
                        <BlocVideos :categorie="videosComptines"/>
                        <BlocVideos :categorie="videosChansons"/>
                    </div>
                </div>
            </main>
        <Footer/>
    </div>
</template>

<script>
import BlocVideos from '../components/BlocVideos.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Illustration from '../components/Illustration.vue'
import axios from 'axios'

// @ is an alias to /src

export default {
    name: 'Home',
    components: {
        Header,
        BlocVideos,
        Footer,
        Illustration
    },
    data() {
        return {
            videosComptines: [],
            videosChansons: [],
        }   
    },
    mounted() {
        this.fetchVideosComptines();
        this.fetchVideosChansons();
    },
    methods: {
        fetchVideosComptines() {
            axios
                .get('http://localhost:3000/videos/sous_categories/5')
                .then(response => {
                    this.videosComptines = response.data
                    console.log(response)
                })
        },
        fetchVideosChansons() {
            axios
                .get('http://localhost:3000/videos/sous_categories/6')
                .then(response => {
                    this.videosChansons = response.data
                })
        },
  }
}
</script>