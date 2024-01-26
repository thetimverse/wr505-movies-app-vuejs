<template>
        <div class="px-20 mt-10 max-md:px-3">
          <div class="flex justify-between items-center mb-5">
            <h2 class="text-2xl font-semibold">Movies</h2>
            <button @click="openMovieModal" class="font-semibold bg-violet-800 py-2 px-6 tracking-wide cursor-pointer rounded-lg hover:bg-violet-900 text-white">Add movie</button>
          </div>
          <Search @updatedSearch="query" :totalCount="totalCount"></Search>
          <MovieModal ref="movieModal"/> 
          <div class="flex flex-row flex-wrap justify-between items-center gap-10 max-md:overflow-scroll">
            <MovieCard :film="film" v-for="film in this.films" :key="film._id"></MovieCard>
          </div>
          <Pagination
            :current-page="variables.page"
            :last-page="lastPage"
            @update-page="updatePage"
          ></Pagination>
        </div>
</template>

<script>
import ApiService from '../api/ApiService';
import MovieCard from '@/components/MovieCard.vue';
import MovieModal from "@/components/MovieModal.vue";
import Search from '@/components/Search.vue';
import Pagination from '@/components/Pagination.vue';

export default {
    components: {MovieCard, MovieModal, Search, Pagination},
    data() {
      return {
        query: '',
        films: [],
        totalCount: null,
        variables: 
        {
            page: parseInt(this.$route.query.page) || 1,
            itemsPerPage: 20,
            orderBy: "id",
        },
        lastPage: 0,
      }
    },
    watch: {
      '$route.query.page'(newPage) {
          this.variables.page = parseInt(newPage) || 1
          this.getMovies(this.variables)
      },
    },
    methods: {
      async getMovies(variables) {
        this.error = null
        try {
            const response = await ApiService.getMovies(variables)
            // console.log(response);
            this.films = response.data.movies.collection
            this.lastPage = response.data.movies.paginationInfo.lastPage
            this.totalCount = response.data.movies.paginationInfo.totalCount 
            // console.log(this.films)
        } catch (error) {
            this.error = error.toString()
            console.log(this.error)
        }
      },
      openMovieModal() {
        this.$refs.movieModal.openModal();
        // console.log("open modal")
      },
      search(query) {
          this.variables.title = query
          this.getMovies(this.variables)
      },
      updatePage(page) {
          this.variables.page = page;
          this.getMovies(this.variables);
      },
    },
    
    mounted() {
      this.getMovies(this.variables)
    }
}
</script>
<style>
    
</style>