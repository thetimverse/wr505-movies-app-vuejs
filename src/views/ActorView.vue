<script>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import ApiService from '@/api/ApiService.js';
import MovieCard from '@/components/MovieCard.vue';

export default {
    components: {MovieCard},
    data() {
        return {
            actor: {},
        };
    },
    methods: {
        async getActor() {
            try {
                const actorId = '/api/actors/' + this.$route.params.id;
                const response = await ApiService.getActorById(actorId);
                console.log("Information sur acteur : ", response);
                console.log(actorId);

                this.actor = response.data.actor;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        releaseDateFormatted(date) {
          const d = new Date(date).toLocaleDateString();
          return d;
        },
        getImageUrl(contentUrl) {
          return contentUrl ? `http://127.0.0.1:8000${contentUrl}` : '';
        },
        showDot() {
          if (2 >= this.movie.categories.collection.length) {
            return " • "
          } else {
            return ""
          };
        },
    },
    created() {
        this.getActor();
    },
};
</script>

<template>
  <div v-if="actor" class="pt-5 px-20 mt-5 max-md:px-3">
    <div class="flex flex-row items-center gap-10 mb-7">
      <img :src="getImageUrl(actor.image.contentUrl)" class="w-64 rounded-xl shadow-md shadow-neutral-800">
      <div class="flex flex-col gap-3">
        <h1 class="font-bold text-5xl">{{ actor.firstname }} {{ actor.lastname }}</h1>
        <p class="text-neutral-400 capitalize">{{ releaseDateFormatted(actor.dob) }} • {{ actor.nationality }}</p>
      </div>
    </div>
    <h2 class="font-semibold text-2xl mb-5">Filmography</h2>
    <div class="flex flex-row gap-10 flex-wrap justify-between" v-if="actor.movies">
        <MovieCard v-for="film in actor.movies.collection" :film="film" :key="film._id" />
    </div>
  </div>
</template>

<style scoped>

</style>