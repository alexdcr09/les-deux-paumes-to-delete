<template>
    <div class="w-full" v-if="info">
        <router-link :to="`/DetailsVideo/${info.id}`" class="hover:underline">
            <img :src="info.miniature" class="w-60 rounded">
            <p id ="textvideo" class="text-left text-black text-base w-auto max-w-min font-medium mt-2"> {{ info.title }} </p>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    }
}
</script>

<style>
    #textvideo {
        min-width: fit-content;
    }
</style>