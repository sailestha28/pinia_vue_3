import { defineStore } from "pinia";
import axios from "axios"
export const useCategoryStore = defineStore("categoryStore", {
    state: () => ({
        categories: [],
        productList: [],
        loading: false,
    }),
    getters: {
        getCategory(state) {
            return state.categories
        }
    },
    actions: {
        async fetchCategories() {
            try {
                this.loading = true
                const data = await axios.get('https://dummyjson.com/products/categories')
                this.categories = data.data
                this.loading = false
            }
            catch (error) {
                this.loading = false
                console.log(error)
            }
        },
        async fetchCategoryProducts(category) {
            try {
                this.loading = true
                const data = await axios.get(`https://dummyjson.com/products/category/${category}?limit=15`)
                this.productList = data.data
                this.loading = false
            }
            catch (error) {
                this.loading = false
                console.log(error)
            }
        }

    },
})