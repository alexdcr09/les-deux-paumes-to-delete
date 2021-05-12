<template>
        <Header/>
            <main class="font-body">
                <div class="flex m-auto h-full md:mt-0 mt-5 md:h-screen justify-center">
                    <div class="w-4/5 m-auto flex flex-wrap justify-center">
                        <h1 class="text-5xl text-blue font-bold uppercase md:text-6xl">
                           Activités
                        </h1>
                        <h3 class="md:text-xl text-lg text-dark-900 font-medium md:font-bold mt-4 w-12/12 md:w-10/12">
                            Ici, apprendre en s'amusant c'est possible !
 Tu trouveras des activités à faire à la maison pour passer de bon moments: l’apprentissage, des recettes de cuisine, DIY à la maison. 
Alors découvre ce que nous avons sélectionné rien que pour toi !
                        </h3>
                    </div>
                    <div class="w-4/5 justify-center mx-auto 2xl:flex xl:flex lg:flex hidden">
                        <Illustration :isAnime="false" :isActivity="true" :isMusic="false"/>
                    </div>
                </div>
                <div>
                    <div v-if="videosCuisine.length > 0 && videosApprendre.length > 0">
                        <BlocVideos :categorie="videosCuisine"/>
                        <BlocVideos :categorie="videosApprendre"/>
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
            videosCuisine: [],
            videosApprendre: [],
        }   
    },
    mounted() {
        this.fetchVideosCuisine();
        this.fetchVideosApprendre();
    },
    methods: {
        fetchVideosCuisine() {
            axios
                .get('http://localhost:3000/videos/sous_categories/3')
                .then(response => {
                    this.videosCuisine = response.data
                })
        },
        fetchVideosApprendre() {
            axios
                .get('http://localhost:3000/videos/sous_categories/4')
                .then(response => {
                    this.videosApprendre = response.data
                    console.log(response)
                })
        },
  }
}
</script>