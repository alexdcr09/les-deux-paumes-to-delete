<template>
    <div class="inline-block m-auto w-11/12 mb-10" v-if="categorie">
            <div class="block">
            <h2 class="text-center sm:text-left my-4">
                <a href="#">
                    <span class="text-left text-blue hover:underline text-4xl font-bold py-1">
                        {{ categorie[0].name }} 
                    </span>
                </a>
            </h2>
        </div>
        <div class="flex flex-row flex-wrap justify-center sm:justify-between">
            <div v-for="item in categorie.slice(0, 4)" :key="item.id">
                <BlocInfo :info="item"/>
            </div>
        </div>
    </div>
</template>

<script>
import BlocInfo from './BlocInfo.vue'

export default {
        components: {
            BlocInfo
        },
        props : {
            categorie : Object
        }
}
</script>