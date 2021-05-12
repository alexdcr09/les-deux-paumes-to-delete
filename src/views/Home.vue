<template>
    <div>
        <Header/>
            <main class="font-body">
                <IllustrationHome/>
                <div>
                    <div v-if="videosActivites.length > 0 && videosAnimes.length > 0 && videosMusique.length > 0">
                        <BlocVideos :categorie="videosActivites"/>
                        <BlocVideos :categorie="videosAnimes"/>
                        <BlocVideos :categorie="videosMusique"/>
                    </div>
                </div>
            </main>
             <!-- <Modal/> -->
        <Footer/>
    </div>
</template>

<script>
import BlocVideos from '../components/BlocVideos.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import IllustrationHome from '../components/IllustrationHome.vue'
//import Modal from '../components/Modal.vue'
import axios from 'axios'

// @ is an alias to /src

export default {
    name: 'Home',
    components: {
        Header,
        BlocVideos,
        Footer,
        IllustrationHome,
       // Modal
    },
    data() {
        return {
            videosAnimes: [],
            videosActivites: [],
            videosMusique: [],
        }   
    },
    mounted() {
        this.fetchVideosAnimes();
        this.fetchVideosActivites();
        this.fetchVideosMusique();
    },
    methods: {
        async fetchVideosAnimes() {
            const response = await axios
                .get('http://localhost:3000/videos/categories/1')
                    this.videosAnimes = response.data
                    console.log(response)
        },
        fetchVideosActivites() {
            axios
                .get('http://localhost:3000/videos/categories/2')
                .then(response => {
                    this.videosActivites = response.data
                    console.log(response)
                })
        },
        fetchVideosMusique() {
            axios
                .get('http://localhost:3000/videos/categories/3')
                .then(response => {
                    this.videosMusique = response.data
                    console.log(response)
                })
        },
  }
}
</script>