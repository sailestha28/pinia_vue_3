<template>
  <aside class="bg-white rounded-[16px] gap-x-4 p-5 px-6 overflow-hidden">
    <div class="flex flex-wrap gap-x-4">
      <div class="block w-[44px] h-[44px] relative">
        <img
          src="@/assets/images/dashboard/yen.png"
          alt="total profit"
          class="absolute left-0 right-0 top-0 bottom-0"
        />
      </div>
      <div>
        <p class="text-[#23272E] text-[18px] font-semibold">Total Profit</p>
        <label class="text-[#8B909A] text-sm block mb-4 sml:mb-7"> Last 7 days </label>
      </div>
      <div class="w-full">
        <h2 class="text-[#23272E] text-2xl sml:text-[32px] mb-2 font-bold">50K</h2>
        <div class="flex items-center text-sm">
          <span class="text-[#1eb564] flex">
            <span class="relative top-[3px] mr-1"><up-arrow-icon /></span>
            8.56K
          </span>
          <span class="text-[#8B909A] ml-2">vs last 7 days</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import upArrowIcon from "../../icons/dashboard/upArrowIcon.vue";
export default {
  name: "ProfitChart",
  components: { upArrowIcon },
};
</script>

<style></style>
