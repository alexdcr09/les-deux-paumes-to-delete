<template>
    <HeaderBlanc/>
       <main class="font-body">
                <div class="flex m-auto h-screen justify-center">
                    <div class="w-4/5 m-auto flex flex-wrap justify-center bg-white-100 sm:bg-red-500">
                        <h1 class="text-6xl text-blue font-bold uppercase">
                           NOUS CONTACTER
                        </h1>
                    </div>
                    <div class="w-4/5 flex justify-center mx-auto">
                        compoenent maps
                    </div>
                </div>
            </main>
        <Footer/>
</template>

<script>
import Footer from '../components/Footer.vue'
import HeaderBlanc from '../components/HeaderBlanc.vue'

// @ is an alias to /src

export default {
    name: 'Contact',
    components: {
        HeaderBlanc,
        Footer,
    },
    data() {
        return {
        }
    },
}   
</script>
