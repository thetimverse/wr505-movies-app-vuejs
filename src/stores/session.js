import { defineStore } from "pinia";

export const useSession = defineStore('session', {
  persist: true,
  state: () => {
    return {
      user: {
        username: null,
        icon: null
      },
      loggedIn: false,
      token: null,
    }
  },
  actions: {
    login({user, token}) {
      if (user && token) {
        this.loggedIn = true
        this.token = token
        this.user = {
          username: user.username,
          icon: user.icon
        }
        return {
          error : false
        }
      } 
      return {
        error: true,
        errorMsg: 'Email or password incorrect'
      }
    },
    logout() {
      this.loggedIn = false
      this.user = null
      this.token = null
    }
  }
})
