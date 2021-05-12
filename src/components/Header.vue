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
                        <router-link to="/Dessins_animes" class="no-underline block sm:inline-block sm:mt-0 mx-5 px-2 py-1 font-bold text-xl text-blue hover:text-blue hover:bg-white rounded-full sm:text-white">DESSINS ANIMÉS</router-link>
                        <router-link to="/Activites" class="no-underline block sm:inline-block sm:mt-0 mx-5 px-2 py-1 font-bold text-xl text-blue hover:text-blue hover:bg-white rounded-full sm:text-white">ACTIVITÉS</router-link>
                        <router-link to="/Musique" class="no-underline block sm:inline-block sm:mt-0 mx-5 px-2 py-1 font-bold text-xl text-blue hover:text-blue hover:bg-white rounded-full sm:text-white">MUSIQUE</router-link>
                        <div class="no-underline block sm:inline-block sm:mt-0 mx-5 px-2 py-1 relative">
                            <Dropdown/>
                        </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    import Dropdown from '../components/Dropdown.vue'

export default {
    name: 'Header',
    components: {
    Dropdown,
    },
    data() {
        return {
            services: [
            {
            title: 'Qui sommes nous',
            link: '/Qui_sommes_nous'
            },
            {
            title: 'A propos',
            link:'#'
            },
            {
            title: 'Contact',
            link: '#'
            }
            ],
        open: false,
        }
    },
    methods: {
        toggle() {
        this.open = !this.open
    }
  }
}
</script>

