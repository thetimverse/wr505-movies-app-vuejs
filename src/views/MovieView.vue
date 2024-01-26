<script>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import ApiService from '@/api/ApiService.js';
import ActorCard from '@/components/ActorCard.vue';

export default {
    components: {ActorCard},
    data() {
        return {
            movie: {},
        };
    },
    methods: {
        async getMovie() {
            try {
                const movieId = '/api/movies/' + this.$route.params.id;
                const response = await ApiService.getMovieById(movieId);
                // console.log("film : ", response);
                // console.log(movieId);

                this.movie = response.data.movie;
                // console.log(this.movie);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        releaseDateFormatted(date) {
          const d = new Date(date).toLocaleDateString();
          return d;
        },
        getStars(note) {
          if (note === "N/A") return "";
          let starsCount = Math.round(note / 2);
          return "★".repeat(starsCount) + "☆".repeat(5 - starsCount);
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
        this.getMovie();
    },
};
</script>

<template>
  <div v-if="movie" class="pt-5 px-20 mt-5 max-md:px-3">
    <div class="flex flex-row items-center gap-10 mb-7">
      <img :src="getImageUrl(movie.mediaobject.collection[0].contentUrl)" class="w-64 rounded-xl shadow-md shadow-neutral-800">
      <div class="flex flex-col gap-1">
        <h1 class="font-bold text-5xl">{{ movie.title }}</h1>
        <p class="mt-4 text-amber-400 mb-7 text-3xl">{{ getStars(movie.note) }}</p>
        <p class="uppercase text-neutral-400">{{ releaseDateFormatted(movie.releaseDate) }} • Directed by <span class="font-semibold text-neutral-300 capitalize ml-2">{{ movie.director }}</span></p>
        <ul v-if="movie.categories" class="flex flex-row gap-2 text-neutral-300 mt-3">
          <li v-for="category in movie.categories.collection" :key="category.id" class="px-4 py-1 bg-slate-800 rounded-md">{{ category.name }}</li>
        </ul>
        <div class="flex flex-row items-center mt-5 gap-5">
          <a :href="movie.website" class="px-4 py-1 bg-slate-700 w-fit rounded-lg text-sm uppercase tracking-wide"><v-icon name="fa-play" scale="0.7" /> Trailer</a>
          <p class="text-neutral-400">{{ movie.duration }} mins</p>
        </div>
      </div>
    </div>
    <p class="text-neutral-400">{{ movie.description }}</p>
    <div class="my-8 bg-slate-800 text-neutral-300 rounded-xl flex flex-row justify-center py-4 w-1/2 mx-auto">
      <p class="border-r-2 border-neutral-900 px-14">Budget : ${{ movie.budget }}</p>
      <p class="px-14">Box-office : ${{ movie.boxOffice }}</p>
    </div>
    <h2 class="font-semibold text-2xl mb-5">Cast</h2>
    <div class="flex flex-row gap-10" v-if="movie.actors">
      <ActorCard v-for="actor in movie.actors.collection" :key="actor._id" class="w-1/5" :actor="actor" />
    </div>
  </div>
</template>

<style scoped>

</style>