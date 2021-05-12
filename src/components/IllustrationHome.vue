<template>
    <div class="flex lg:h-screen justify-center h-full">
        <div class="sm:m-auto flex flex-wrap justify-center md:w-3/5 mt-2">
            <h1 class="text-4xl text-blue font-bold sm:text-6xl">
                LES DEUX PAUMES
            </h1>
            <h3 class="text-3xl text-dark-900 font-bold sm:mt-4">
                FAITES PARTIS DE L’AVENTURE !
            </h3>
            <p class="text-dark-900 font-medium mx-5 sm:mx-20 sm:text-xl text-sm ">
                Soyez les premiers à soutenir notre projet et à proposer le meilleur contenu vidéo pour nos enfants !
            </p>
            <div class="sm:mt-4 sm:ml-3 mt-4 flex justify-center">
                <a href="https://laparoleauxsourds.fr/faire-un-don/" target="_blank"  class="w-72 flex items-center rounded-full justify-center px-8 py-3 font-bold text-xl text-white hover:text-gray-100 bg-blue hover:rounded-2xl hover:rounded-full border-white border-4 hover:border-blue hover:bg-white hover:text-blue md:py-4 md:text-xl md:px-10">
                    FAITES UN DON
                </a>
            </div>
        </div>
        <div class="w-4/5 justify-center mx-auto 2xl:flex xl:flex lg:flex hidden">
            <div id="containerbghome" class="md:w-5/6"/>
            <router-link to="/Dessins_animes">
                <img src="../assets/laptop.png" alt="ordinateur" class="absolute z-10 laptop h-28">
            </router-link>
            <router-link to="/Activites">
                <img src="../assets/toque.png" alt="toque" class="absolute z-10 toque h-32 top-52 right-60">
            </router-link>
            <router-link to="/Activites">
                <img src="../assets/cook.png" alt="ingrédients de cuisine" class="absolute z-10 cook h-43 top-96 right-66">
            </router-link>
            <router-link to="/Activites">
                <img src="../assets/book.png" alt="Livre avec un stylo" class="absolute z-10 cook h-44 top-20 right-12">
            </router-link>
            <router-link to="/Activites">
                <img src="../assets/art.png" alt="kit d'art" class="absolute z-10 cook h-44 right-1/3 top-40">
            </router-link>
            <router-link to="/Dessins_animes">
                <img src="../assets/film.png" alt="Film" class="absolute z-10 cook h-32 top-2/4 right-12">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'IllustrationHome',
  props: ['title', 'items'],
  data () {
    return {
      
    }
  }
}
</script>

<style>

    #containerbghome {
        background-image: url('../assets/bg.png');
        background-repeat: no-repeat;
        background-position: top right;
        background-size: contain;
        width:60%;
        height: 115vh;
        position: absolute;
        z-index: 0;
        top:0;
        right:0;
    }

    .toque {
        animation: 3s infinite alternate floating;
    }

    .laptop {
         animation: 3s infinite alternate floating;
    }

    .cook {
         animation: 4s infinite alternate floating;
    }
   
    @keyframes floating {
        0% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(-10px);
        }
        100% {
            transform: translatey(0px);
        }
    }
</style>