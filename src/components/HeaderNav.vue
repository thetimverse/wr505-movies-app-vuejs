<script>
import { useSession } from "@/stores/session"
import { mapState, mapActions } from "pinia";
import { RouterLink } from 'vue-router';
import { ref, onMounted } from "vue";

// const token = ref("");
// onMounted(() => {
// 	token.value = localStorage.getItem("token");
// });
export default {
    data() {
        return {
        };
    },
    computed: {
        // bind this.loggedIn to useSession().loggedIn
        ...mapState(useSession, ["loggedIn", "user"])
    },
    methods: {
        ...mapActions(useSession, ["logout"]),
        deconnection(){
            this.logout()
            this.$router.push("login")
        },
        getPicture(icon) {
            return "http://127.0.0.1:8000/uploads//" + this.user.icon;
        },
    }
}

</script>

<template>
    <header className="flex flex-row justify-between items-center py-5 px-10 w-screen sticky">
        <!-- <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="50" height="50" /> -->
        <div class="text-white text-3xl font-bold">Letterbox<span class="text-violet-700 text-3xl font-bold">d</span></div>
        <nav>
            <ul className="flex flex-row justify-around items-center gap-10 text-neutral-300">
                <li>
                    <RouterLink :to="{name: 'home'}" class="font-medium hover:text-violet-600"><v-icon name="fa-home" /> Home</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{name: 'movies'}" class="font-medium hover:text-violet-600"><v-icon name="fa-film" /> Movies</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{name: 'actors'}" class="font-medium hover:text-violet-600"><v-icon name="fa-user-friends" /> Actors</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{name: 'categories'}" class="font-medium hover:text-violet-600"><v-icon name="fa-list-ul" /> Categories</RouterLink>
                </li>
                <!-- <li v-if="!token" class="bg-violet-800 py-2 px-6 rounded-full cursor-pointer hover:bg-violet-900 text-white">
                    <RouterLink :to="{name: 'login'}" class="font-semibold"><v-icon name="fa-user" /> Log in</RouterLink>
                </li> -->
                <li v-if="!loggedIn">
                    <RouterLink :to="{name: 'login'}" class="font-semibold bg-violet-800 py-3 px-8 tracking-wide rounded-full cursor-pointer hover:bg-violet-900 text-white"><v-icon name="fa-user" /> Log in</RouterLink>
                </li>
                <li v-else class="flex flex-row items-center gap-3">
                    <p class="font-medium">Hello {{ user.username }}</p>
                    <RouterLink :to="{name: 'profile'}"><div class="h-10 w-10 overflow-hidden rounded-full"><img :src="getPicture()" alt="" class="w-10"></div></RouterLink>
                    <a @click="deconnection()" class="font-semibold bg-violet-800 py-2 px-3 tracking-wide rounded-full cursor-pointer hover:bg-violet-900 text-white"><v-icon name="fa-sign-out-alt" /></a> 
                </li>
            </ul>

        </nav>
  </header>
</template>

<style></style>