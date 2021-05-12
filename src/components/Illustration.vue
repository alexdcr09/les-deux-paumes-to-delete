<template>
    <div :class="{ activityClass: isActivity, animeClass: isAnime, MusicClass: isMusic}">
        <br>
    </div>
</template>

<script>
export default {
    name: 'IllustrationHome',
    props: {
        isAnime: Boolean,
        isActivity: Boolean,
        isMusic: Boolean,
    },
    
    data () {
        return {
        }
    },
}
</script>

<style>

    .animeClass {
        background-image: url('../assets/bg_bd.png');
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

    .activityClass {
        background-image: url('../assets/bg_activites.png');
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

    .MusicClass {
        background-image: url('../assets/bg_musique.png');
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

    .container_contact {
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