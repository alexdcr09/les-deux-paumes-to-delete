<template>
    <header class="relative z-50">
            <nav class="flex items-center justify-between justify-items-end flex-wrap p-2">
                <div class="flex items-center flex-no-shrink text-white mr-6">
                    <router-link to="/" class="inline-block px-2 py-1 font-semibold rounded">
                        <img class="h-10" src="../assets/logo.png" alt="Logo">
                    </router-link>
                </div>
                <div class="block sm:hidden">
                <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-blue hover:border-blue">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
                </div>
                <div :class="open ? 'block': 'hidden'" class="w-full flex-grow justify-end sm:flex sm:items-center sm:w-auto">
                    <div class="text-sm">
                            <router-link to="/Dessins_animes" class="no-underline block sm:inline-block sm:mt-0 mx-5 px-2 py-1 font-bold text-xl text-blue rounded-full">DESSINS ANIMÉS</router-link>
                            <router-link to="/Activites" class="no-underline block sm:inline-block sm:mt-0 mx-5 px-2 py-1 font-bold text-xl text-blue rounded-full">ACTIVITÉS</router-link>
                            <router-link to="/Musique" class="no-underline block sm:inline-block sm:mt-0 mx-5 px-2 py-1 font-bold text-xl text-blue rounded-full">MUSIQUE</router-link>
                            <div class="no-underline block sm:inline-block sm:mt-0 mx-5 px-2 py-1 relative">
                                <a :class="{ hoverbtnbis : isOpen }" @click="isOpen = !isOpen" class="cursor-pointer rounded-full text-blue font-bold text-xl text-center sm:mt-0 p-1">
                                L'ASSOCIATION
                                    <svg width="10" viewBox="0 0 198 112" xmlns="http://www.w3.org/2000/svg" class="inline-block fill-current h-6 align-middle ml-0">
                                        <path d="M194.325 3.98513C191.877 1.53554 188.976 0.311768 185.623 0.311768H12.3759C9.02223 0.311768 6.12295 1.53554 3.67336 3.98513C1.22378 6.43743 0 9.3367 0 12.6884C0 16.0394 1.22378 18.9386 3.67336 21.3889L90.2974 108.013C92.7497 110.463 95.649 111.689 99 111.689C102.351 111.689 105.253 110.463 107.701 108.013L194.325 21.3882C196.771 18.9386 198 16.0394 198 12.6877C198 9.3367 196.771 6.43743 194.325 3.98513Z"/>
                                    </svg>
                                </a>
                                <transition name="fade" appear>
                                <div class="absolute w-auto" v-if="isOpen">
                                    <div class="text-left text-lg text-blue font-bold flex flex-col bg-white rounded-b-lg px-2">
                                        <div class="hover:underline">
                                            <router-link to="/Qui_sommes_nous">
                                            Qui sommes-nous
                                            </router-link>
                                        </div>
                                        <div class="hover:underline">
                                            <router-link to="/Contact">
                                            Contact
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                </transition>
                            </div>
                    </div>
                </div>
            </nav>
        </header>
</template>


<script>

export default {
    data() {
        return {
            open: false,
            isOpen: false,
        }
    },
    methods: {
        toggle() {
        this.open = !this.open
    }
  }
}
</script>

<style>

    .hoverbtnbis {
        border-top-left-radius: 1rem !important;
        border-top-right-radius: 1rem !important;
        border-bottom-right-radius: 0px !important;
        border-bottom-left-radius: 0px !important;
        background-color: #FFFFFF !important;
        color: #4D00FF !important;
    ;}

</style>