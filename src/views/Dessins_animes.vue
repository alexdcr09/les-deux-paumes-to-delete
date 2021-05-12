<template>
        <Header/>
            <main class="font-body">
                <div class="flex m-auto md:mt-0 mt-5 h-full md:h-screen justify-center">
                    <div class="sm:w-4/5 m-auto flex flex-wrap justify-center">
                        <h1 class="text-5xl text-blue font-bold uppercase md:text-6xl">
                           Dessins animés
                        </h1>
                        <h3 class="md:text-xl text-lg text-dark-900 font-medium md:font-bold mt-4 w-11/12 md:w-10/12">
                            Découvre des dessins animés à voir en illimité !
                            Alors installe toi confortablement et profite de la sélection que nous avons a fait pour toi !
                        </h3>
                    </div>
                    <div class="w-4/5 justify-center mx-auto 2xl:flex xl:flex lg:flex hidden">
                        <Illustration :isAnime="true" :isActivity="false" :isMusic="false"/>
                    </div>
                </div>
                <div>
                    <div v-if="videosPeppaPig.length > 0 && videosHistoiresAnimes.length > 0">
                        <BlocVideos :categorie="videosPeppaPig"/>
                        <BlocVideos :categorie="videosHistoiresAnimes"/>
                    </div>
                </div>
            </main>
        <Footer/>
</template>

<script>
import BlocVideos from '../components/BlocVideos.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Illustration from '../components/Illustration.vue'
import axios from 'axios'

// @ is an alias to /src

export default {
    name: 'Dessins_animes',
    components: {
        Header,
        BlocVideos,
        Footer,
        Illustration
    },
    data() {
        return {
            videosPeppaPig: [],
            videosHistoiresAnimes: [],
        }   
    },
    mounted() {
        this.fetchVideosPeppaPig();
        this.fetchVideosHistoiresAnimes();
    },
    methods: {
        fetchVideosPeppaPig() {
            axios
                .get('http://localhost:3000/videos/sous_categories/1')
                .then(response => {
                    this.videosPeppaPig = response.data
                })
        },
        fetchVideosHistoiresAnimes() {
            axios
                .get('http://localhost:3000/videos/sous_categories/7')
                .then(response => {
                    this.videosHistoiresAnimes = response.data
                    console.log(response)
                })
        },
  }
}
</script>