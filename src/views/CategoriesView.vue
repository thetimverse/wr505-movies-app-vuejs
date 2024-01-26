<template>
    <div class="px-20 mt-10 max-md:px-3">
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-2xl font-semibold">Categories</h2>
            <button @click="openMovieModal" class="font-semibold bg-violet-800 py-2 px-6 tracking-wide cursor-pointer rounded-lg hover:bg-violet-900 text-white">Add category</button>
        </div>
        <Search @updatedSearch="query" :totalCount="totalCount"></Search>
        <MovieModal ref="movieModal"/> 
        <ul class="flex flex-row flex-wrap items-center gap-10">
          <li v-for="category in categories" :key="categories._id" class="bg-neutral-800 px-8 py-4 rounded-lg">
            <h2 class="font-bold text-xl">{{ category.name }}</h2>
            <!-- <div class="flex flex-row flex-wrap justify-between items-center gap-10 overflow-x-scroll max-md:overflow-scroll">
                <MovieCard :film="film" v-for="film in category.movies" :key="film._id"></MovieCard>
            </div> -->
            </li>
        </ul>
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
    categories: [],
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
      this.getCategories(this.variables)
  },
},
methods: {
  async getCategories(variables) {
    this.error = null
    try {
        const response = await ApiService.getCategories(variables)
        // console.log(response);
        this.categories = response.data.categories.collection
        // this.films = response.data.categories.collection[0].movies
        this.lastPage = response.data.categories.paginationInfo.lastPage
        this.totalCount = response.data.categories.paginationInfo.totalCount 
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
      this.variables.name = query
      this.getCategories(this.variables)
  },
  updatePage(page) {
      this.variables.page = page;
      this.getCategories(this.variables);
  },
},

mounted() {
  this.getCategories(this.variables)
}
}
</script>
<style>

</style>