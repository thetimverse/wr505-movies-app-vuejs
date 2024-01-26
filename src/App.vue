<script>
import { RouterLink, RouterView } from 'vue-router';
import HeaderNav from '@/components/HeaderNav.vue'
import { useSession } from "@/stores/session"
import { mapState, mapActions } from "pinia";

export default {
    data() {
        return {
        };
    },
    components: { HeaderNav },
    computed: {
        // bind this.loggedIn to useSession().loggedIn
        ...mapState(useSession, ["loggedIn"])
    },
    methods: {
        ...mapActions(useSession, ["logout"])
    },
}
</script>

<template>
  <HeaderNav></HeaderNav>
  <RouterView></RouterView>
  <footer class="h-9 bg-neutral-900 w-screen sticky bottom-0 mt-14 border-t border-neutral-600 flex justify-center items-center text-neutral-400">
    <p class="font-medium">Timothée Pluot &copy; 2024</p>
  </footer>
</template>

<style>
  body {
    color: #ececec;
    background-color: rgb(23, 23, 23);
    /* margin-bottom: 2em; */
  }
</style>
