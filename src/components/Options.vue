<template>
    <div class="z-50 fixed top-1/4 right-0 bg-white rounded-l-2xl">
        <div :style="{ fontSize: postFontSize + 'em' }" class="w-12 m-3">
            <img @enlarge-text="postFontSize += 0.1"
            src="../assets/up.png" alt="agrandissement texte">
            teesttt
        </div>
        <div class="w-12 m-3">
            <img src="../assets/down.png" alt="diminution texte">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Options',
    data () {
  }
}
</script>
