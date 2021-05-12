<template>
    <a :class="{ hoverbtn : isOpen }" @click="isOpen = !isOpen" class="cursor-pointer rounded-full text-blue sm:text-white font-bold hover:font-bold text-xl text-center hover:text-blue hover:bg-white sm:mt-0 p-1">
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
</template>

<script>
export default {
  name: 'dropdown',
  data () {
    return {
      isOpen: false,
    }
  },
}
</script>

<style>

    .hoverbtn {
        border-top-left-radius: 1rem !important;
        border-top-right-radius: 1rem !important;
        border-bottom-right-radius: 0px !important;
        border-bottom-left-radius: 0px !important;
        background-color: #ffffff !important;
        color: #4D00FF !important;
    ;}

    
</style>