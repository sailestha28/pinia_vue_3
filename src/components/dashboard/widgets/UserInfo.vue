<template>
  <aside class="bg-white rounded-[16px] gap-x-4 p-5 px-6 overflow-hidden">
    <div class="flex flex-wrap">
      <div class="w-full mb-5 sml:mb-0 sml:w-1/3 sm:px-5 flex items-center">
        <div class="flex gap-x-4 items-center">
          <div class="w-[72px] h-[72px] relative rounded-full overflow-hidden">
            <img
              src="@/assets/images/avatar_2.png"
              alt="total profit"
              class="absolute left-0 right-0 top-0 bottom-0 object-cover"
            />
          </div>
          <div class="flex justify-center flex-col">
            <h3 class="text-[#23272E] text-[18px] font-semibold leading-4">Robert Fox</h3>
            <p class="text-[#8B909A] text-sm block">robert@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2 sml:w-1/3 relative">
        <div
          class="hidden sml:block bg-[#DBDADE] absolute left-0 top-0 w-[1px] h-[calc(100%)]"
        ></div>
        <div
          class="hidden sm:block bg-[#DBDADE] absolute right-0 top-0 w-[1px] h-[calc(100%)]"
        ></div>
        <div class="sm:px-5">
          <h2 class="uppercase text-[#8B909A] text-[13px] mb-2">PERSONAL INFORMATION</h2>
          <div class="text-[#23272E] text-sm">
            <div class="mb-2">
              <label for="" class="inline-block w-1/2">Contact Number</label>
              <span>(201) 555-0124 </span>
            </div>
            <div class="mb-2">
              <label for="" class="inline-block w-1/2">Date of Birth</label>
              <span>1 Jan, 1985</span>
            </div>
            <div>
              <label for="" class="inline-block w-1/2"> Member Since</label>
              <span> 3 March, 2023</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 sm:mt-0 w-full sm:w-1/2 sml:w-1/3 sm:px-5">
        <h2 class="uppercase text-[#8B909A] text-[13px] mb-2">Shipping Address</h2>
        <p class="text-[#23272E] text-sm">3517 W. Gray St. Utica, Pennsylvania 57867</p>
        <ul class="flex justify-between mt-5">
          <li>
            <div>
              <h4 class="text-[#23272E] font-bold text-2xl">150</h4>
              <p class="text-[#8B909A] text-sm">Total Order</p>
            </div>
          </li>
          <li>
            <div>
              <h4 class="text-[#23272E] font-bold text-2xl">140</h4>
              <p class="text-[#8B909A] text-sm">Completed</p>
            </div>
          </li>
          <li>
            <div>
              <h4 class="text-[#23272E] font-bold text-2xl">10</h4>
              <p class="text-[#8B909A] text-sm">Canceled</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <v-tabs
      v-model="tab"
      align-with-title
      :scroll-offset="0"
      hide-slider
      class="mt-3 sml:mt-2"
    >
      <v-tab value="all">All Orders</v-tab>
      <v-tab value="completed">Completed</v-tab>
      <v-tab value="cancelled">Cancelled</v-tab>
    </v-tabs>
  </aside>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      tab: "all",
    };
  },
  watch: {
    tab: function (newVal, oldVal) {
      this.switchTab();
    },
  },
  methods: {
    switchTab() {
      this.$emit("childValueTab", this.tab);
    },
  },
};
</script>

<style></style>
