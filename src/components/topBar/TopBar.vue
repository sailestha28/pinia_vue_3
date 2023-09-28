<template>
  <header>
    <div class="py-5 flex justify-between items-center">
    <div class="flex items-center gap-x-2">
    <button class="xlg:hidden" @click="toggleMenu">
      <v-icon dark>
        mdi-format-list-bulleted-square
      </v-icon>
    </button>

      <h1 class="text-[#23272E] font-bold">
        {{ title }}
      </h1>
          </div>
      <div class="flex items-center gap-x-6">
        <div class="relative">
          <NotificationIcon />
          <div class="absolute left-[14px] bottom-2">
            <span
              class="bg-[#EA5455] text-white text-[13px] font-semibold inline-block rounded-full h-[18px] w-[18px] text-center"
              >4</span
            >
          </div>
        </div>
        <div>
          <div class="relative h-[38px] w-[38px] rounded-full">
            <img
              src="@/assets/images/avatar.png"
              alt="Avatar Logo"
              width="38"
              height="38"
              class="absolute left-0 right-0 top-0 bottom-0"
            />
            <div
              class="absolute right-[1px] bottom-[1px] w-3 h-3 bg-[#28C76F] border-[3px] border-white rounded-full"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NotificationIcon from "../icons/topbar/NotificationIcon.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "TopBar",

  computed: {
    title() {
      let componentTitle = null;
      if (this.$route.path === "/") {
        componentTitle = "Dashboard";
      } else if (this.$route.path === "/order-management") {
        componentTitle = "Order Management";
      } else if (this.$route.path === "/brand") {
        componentTitle = "Brand";
      } else if (this.$route.path === "/product-create") {
        componentTitle = "Create Product";
      } else if (this.$route.path === "/product-list") {
        componentTitle = "Product Lists";
      }
      return componentTitle;
    },
     ...mapState(["isMenuOpen"]),
  },
  components: { NotificationIcon },
  mounted() {
    this.loadMenuState();
  },
  methods: {
        ...mapMutations(["toggleMenu"]),
    saveMenuState() {
      localStorage.setItem("isMenuOpen", JSON.stringify(this.isMenuOpen));
    },
    loadMenuState() {
      const savedState = localStorage.getItem("isMenuOpen");
      if (savedState !== null) {
        this.$store.state.isMenuOpen = JSON.parse(savedState);
      }
    },
  },
};
</script>

<style></style>
