import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios"
export const useUserStore = defineStore("userStore", {
    state: () => ({
        users: [],
    }),
    getters: {
        getUsers(state) {
            return state.users
        }
    },
    actions: {
        async fetchUsers() {
            try {
                const data = await axios.get('https://dummyjson.com/users')
                this.users = data.data
            }
            catch (error) {
                console.log(error)
            }
        }
    },
})