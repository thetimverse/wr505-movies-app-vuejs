<template>
    <div class="px-20 my-10 max-md:px-3">
        <div class="flex flex-col items-center gap-5">
            <h2 class="text-2xl font-semibold mb-4">Profile</h2>
            <div class="h-64 w-64 overflow-hidden rounded-full"><img :src="getPicture()" alt="" class="w-64"></div>
            <p class="font-medium">{{ user.username }}</p>
            <a @click="deconnection()" class="font-semibold bg-violet-800 py-2 px-4 tracking-wide rounded-full cursor-pointer hover:bg-violet-900 text-white">Log out <v-icon name="fa-sign-out-alt" /></a> 
        </div>
    </div>
</template>
<script>
import { useSession } from "@/stores/session"
import { mapState, mapActions } from "pinia";

export default {
    data() {
        return {
        };
    },
    computed: {
        ...mapState(useSession, ["loggedIn", "user"])
    },
    methods: {
        ...mapActions(useSession, ["logout"]),
        deconnection(){
            this.logout()
            this.$router.push("login")
        },
        getPicture() {
            return "http://127.0.0.1:8000/uploads//" + this.user.icon;
        },
    }
}
</script>
