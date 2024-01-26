<script>
import SliderHome from '@/components/SliderHome.vue';
import MovieCard from '@/components/MovieCard.vue';
import ActorCard from '@/components/ActorCard.vue';
import ApiService from '@/api/ApiService';

export default {
    components: {SliderHome, MovieCard, ActorCard},
    data() {
      return {
        films: [],
        actors: []
      };
    },
  
    mounted() {
      this.fetchData();
    },
  
    methods: {
      async fetchData() {
          try {
              const response = await ApiService.getLastMovie();
              const response2 = await ApiService.getLastActor();
                      // console.log(response);
                      // console.log(response2);
              this.films = response.data.movies.collection;
              this.actors = response2.data.actors.collection;
              // console.log(this.films);
              // console.log(this.actors);
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      },

    },
  
    computed: {

    }
}
</script>

<template>
    <main>
        <div class="w-full flex flex-row items-center justify-start px-20 full-image">
          <div class="w-1/3 text-white">
            <h1 class="text-7xl font-semibold mb-7">Discover new things</h1>
            <p class="mb-7">Explore the world of cinema in a new way. Find films to watch, actors and their filmography and find new things to watch through categories. Start the experience now.</p>
            <a href="#movieList" class="bg-violet-800 py-3 px-8 rounded-full cursor-pointer hover:bg-violet-900 text-white text-lg font-semibold">Explore</a>
          </div>
        </div>

        <div id="movieList" class="px-20 pt-10 mt-10 max-md:px-3">
          <h2 class="text-2xl font-semibold mb-4">Movies</h2>
          <div class="w-full flex flex-row justify-between">
            <MovieCard :film="film" v-for="film in films" :key="film._id" />
          </div>
        </div>

        <div class="px-20 my-10 max-md:px-3">
          <h2 class="text-2xl font-semibold mb-4">Actors</h2>
          <div class="w-full flex flex-row justify-between">
            <ActorCard :actor="actor" v-for="actor in actors" :key="actor._id" />
          </div>
        </div>

    </main>
</template>

<style scoped>
.full-image {
    height: 700px;
    width: 100vw;
    background-image: linear-gradient(to left, rgba(23, 23, 23, 0.3), rgba(23, 23, 23, 0.85), rgba(23, 23, 23, 1) 90%), url('https://www.themoviedb.org/t/p/original/1jITxVJhkiFJuQuj8NcPLmDNtJg.jpg');
    background-size: cover;
}
img {
  width:100%;
}
</style>
