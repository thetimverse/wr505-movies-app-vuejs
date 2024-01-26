<script>
import { useSession } from "@/stores/session"
import UserService from '@/api/UserService.js'


  export default {
    props: {
        loggedIn: Boolean
    },
    data() {
        return {
            email: '',
            password: '',
            error: ''
        };
    },
    methods: {
        async register () {
            this.error = null;
            try {
                const response = await UserService.register({
                email: this.email,
                password: this.password,
                })
                // useSession permet de se connecter directement après inscription
                const session = useSession();
                session.login({ user: response.user, token: response.token });
                this.$router.push('/login')
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
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-300">Create your account</h2>
        </div>
    
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            
            <form class="space-y-6" @submit.prevent="register">
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-neutral-300">Email address</label>
                <div class="mt-2">
                <input id="email" name="email" v-model="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-neutral-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
    
            <div>
                <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-neutral-300">Password</label>
                </div>
                <div class="mt-2">
                <input id="password" name="password" v-model="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
    
            <div>
                <button type="submit" class="flex w-1/3 justify-center mx-auto rounded-3xl bg-violet-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
            </div>

            <p>{{ error }}</p>
            </form>
        </div>
        </div>
    </div>
</template>
