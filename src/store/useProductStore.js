import { defineStore } from "pinia";
import axios from "axios"
export const useProductStore = defineStore("productStore", {
    state: () => ({
        products: [],
        loading: false,
        productDetail: null
    }),
    getters: {
        getProducts(state) {
            return state.products
        }
    },
    actions: {
        async fetchProducts() {
            try {
                this.loading = true
                const data = await axios.get('https://dummyjson.com/products')
                this.products = data.data
                this.loading = false
            }
            catch (error) {
                this.loading = false
                console.log(error)
            }
        },
        async fetchProductDetail(id) {
            try {
                this.loading = true
                const data = await axios.get(`https://dummyjson.com/products/${id}`)
                this.productDetail = data.data
                this.loading = false
            }
            catch (error) {
                this.loading = false
                console.log(error)
            }
        },
        async addProduct(form) {
            console.log(form);
            try {
                this.loading = true
                const data = await axios.post(`https://dummyjson.com/products/add`, {

                })
                this.productDetail = data.data
                this.loading = false
            }
            catch (error) {
                this.loading = false
                console.log(error)
            }
        }
    },
})