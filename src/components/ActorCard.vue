<template>
    <RouterLink :to="'/actors/'+ actor._id" class="w-60">
        <img class="rounded-b-none rounded-t-xl mx-auto w-full" :src="getMediaContentUrl(actor.image)" alt="">
        <p class="mb-1 py-4 px-4 rounded-b-xl font-semibold text-base text-black mx-auto bg-neutral-200">{{ actor.firstname }} {{ actor.lastname }}</p>
    </RouterLink>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    props: ['actor'],
    methods: {
        getMediaContentUrl(mediaObject) {
            if (mediaObject) {
                return "http://127.0.0.1:8000"+ mediaObject.contentUrl;
            }
        },
    },
}
</script>
<style>
    
</style>