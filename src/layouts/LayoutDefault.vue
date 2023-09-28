<template>
  <div class="bg-[#F5F5F5] h-[100vh]">
    <SideBar />
    <main
      role="main"
      class="px-4 sm:px-7"
      :class="[
        'overflow-y-auto h-[100vh] transition-all duration-500',
        !this.$store.state.isMenuOpen
          ? 'xlg:w-[calc(100%-260px)] xlg:ml-[260px]'
          : 'xlg:ml-[110px] xlg:w-[calc(100%-110px)]',
      ]"
    >
      <TopBar />
      <div class="mb-5 sm:mb-7">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import TopBar from "@/components/topbar/TopBar.vue";
import SideBar from "@/components/sidebar/SideBar.vue";

export default {
  name: "LayoutDefault",
  components: { TopBar, SideBar },
};
</script>
