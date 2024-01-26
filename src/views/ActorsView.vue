<template>
    <div class="px-20 my-10 max-md:px-3">
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-2xl font-semibold">Actors</h2>
            <button @click="openMovieModal" class="font-semibold bg-violet-800 py-2 px-6 tracking-wide cursor-pointer rounded-lg hover:bg-violet-900 text-white">Add actor</button>
        </div>
        <Search @updatedSearch="query" :totalCount="totalCount"></Search>
        <ActorModal ref="movieModal"/> 
        <div class="flex flex-row justify-between items-center gap-10 flex-wrap">
            <ActorCard :actor="actor" v-for="actor in this.actors" :key="actor._id"></ActorCard>
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
import ActorCard from '@/components/ActorCard.vue';
import Pagination from '@/components/Pagination.vue';
import ActorModal from "@/components/ActorModal.vue";
import Search from '@/components/Search.vue';

export default {
    components: {ActorCard, Pagination, Search, ActorModal},
    data() {
      return {
        query: '',
        actors: [],
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
            this.getActors(this.variables)
        },
    },
    methods: {
        // async query() {
        //   if(this.query.length > 3) {
        //     this.films = await FilmService.search(this.query)
        //   }
        // },
        async getActors (variables) {
            this.error = null
            try {
                const response = await ApiService.getActors(variables)
                
                this.actors = response.data.actors.collection
                this.lastPage = response.data.actors.paginationInfo.lastPage
                this.totalCount = response.data.actors.paginationInfo.totalCount 
                // console.log(this.actors)
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
            this.getActors(this.variables)
        },
        updatePage(page) {
            this.variables.page = page;
            this.getActors(this.variables);
        },
    },
    mounted() {
      this.getActors(this.variables)
    }
}
</script>