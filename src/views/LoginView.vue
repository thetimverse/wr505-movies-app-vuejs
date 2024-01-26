<script>
import {RouterLink} from 'vue-router'
import { useSession } from "@/stores/session"
import UserService from '@/api/UserService.js'


  export default {
    props: {
        loggedIn: Boolean
    },
    data() {
        return {
            username: '',
            password: '',
            icon: '',
            error: ''
        };
    },
    methods: {
        async login () {
            this.error = null;
            try {
                const response = await UserService.login({ username: this.username, password: this.password })
                const session = useSession();
                session.login({ user: { username: response.user.username, icon: response.user.icon }, token: response.token });
                this.$router.push('/')
            } catch (error) {
                this.error = error.toString()
            }
        }
    }
}
</script>

<template>
      <div class="h-full">
        <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <!-- <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> -->
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-300">Sign in to your account</h2>
            </div>
        
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                
                <form class="space-y-6" @submit.prevent="login">
                <div>
                    <label for="username" class="block text-sm font-medium leading-6 text-neutral-300">Email address</label>
                    <div class="mt-2">
                    <input id="email" name="username" v-model="username" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
        
                <div>
                    <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-neutral-300">Password</label>
                    <div class="text-sm">
                        <a href="#" class="font-semibold text-teal-500 hover:text-teal-400">Forgot password?</a>
                    </div>
                    </div>
                    <div class="mt-2">
                    <input id="password" name="password" v-model="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
        
                <div>
                    <button type="submit" class="flex w-1/3 justify-center mx-auto rounded-3xl bg-violet-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>

                <p>{{ error }}</p>
                </form>

                <hr class="w-1/3 my-14 text-center block mx-auto border-neutral-500">

                <div class="text-sm text-center">
                    <p >Don't have an account yet?</p>
                    <router-link :to="{name: 'register'}" class="font-semibold text-teal-500 hover:text-teal-400">Register</router-link>
                </div>
            </div>

        </div>
    </div>
</template>
