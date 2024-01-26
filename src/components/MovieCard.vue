<template>
  <div>
  	<RouterLink :to="'/movies/'+ film._id">
        <img class="rounded-xl mx-auto w-64 max-w-none" :src="getMediaContentUrl(film.mediaobject)" alt="">
        <p class="mt-3 mb-1 font-semibold text-base text-neutral-200 px-2">{{ film.title.length>27? film.title.slice(0,27)+'...': film.title }}</p>
        <p class="text-amber-400 px-2">{{ getStars(film.note) }}</p>
      </RouterLink>
      <div class="flex flex-row justify-center w-5/6 mx-auto mt-3 bg-slate-800 rounded-xl">
        <a @click="deleteFilm(film.id)" class="hover:bg-cyan-600 w-1/2 px-4 py-2 rounded-l-xl flex justify-center items-center cursor-pointer"><v-icon name="fa-pen"  /></a>
        <a class="hover:bg-red-700 w-1/2 px-4 py-2 rounded-r-xl flex justify-center items-center cursor-pointer"><v-icon name="fa-trash-alt"  /></a>
      </div>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import { useSession } from "@/stores/session"
import { mapState, mapActions } from "pinia";
import ApiService from '@/api/ApiService';

export default {
  data() {
    return {
    }
  },
    methods: {
      getStars(note) {
        if (note === "N/A") return "";
        let starsCount = Math.round(note / 2);
        return "★".repeat(starsCount) + "☆".repeat(5 - starsCount);
      },
      getMediaContentUrl(mediaObject) {
        // Assurez-vous que la propriété 'collection' existe et n'est pas vide
        if (mediaObject && mediaObject.collection && mediaObject.collection.length > 0) {
            return "http://127.0.0.1:8000"+ mediaObject.collection[0].contentUrl;
        }
      },
      async deleteMovie (id) {
        await ApiService.deleteMovie(id);
      },
      async handleDelete(id) {
        if (!this.loggedIn) {
          return (this.$router.push("login"));
        } else {
          console.log(this.loggedIn);
        }
        const response = await ApiService.deleteMovie(id);
        if (response.ok) {
          closeModal();
          window.location.reload();
          console.log('success');
        } else if (response.status === 401) {
          this.$router.push("login");
          console.log('error');
        } else {
          throw "Error while deleting";
        }
      },
      deleteFilm(id) {
            try {
                // const movieId = '/api/movies/';
                ApiService.deleteMovie(id);
                // console.log("film : ", response);
                console.log(this.film.id);
                console.log('success 2');

                // this.movie = response.data.movie;
                // console.log(this.movie);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
    },
    props: ['film'],
    computed: {
      ...mapState(useSession, ["loggedIn"])
    },
}
</script>
<style>

</style>