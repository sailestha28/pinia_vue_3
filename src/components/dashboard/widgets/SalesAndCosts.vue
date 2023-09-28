<template>
  <aside class="bg-white rounded-[16px] p-5 overflow-hidden">
    <div class="flex flex-wrap">
      <div class="px-4 sml:px-5 sml:pr-9 flex items-center">
        <div class="block w-[74px] h-[74px] relative">
          <img
            src="@/assets/images/dashboard/business-and-finance.png"
            alt="total sales chart"
            class="absolute left-0 right-0 top-0 bottom-0"
          />
        </div>
      </div>
      <div class="pl-4 sml:pl-8 relative">
        <div
          class="bg-[#DBDADE] absolute left-0 top-[10%] w-[1px] h-[calc(100%-10%)]"
        ></div>
        <p class="text-[#23272E] text-[18px] font-semibold">Total Sales & Costs</p>
        <label class="text-[#8B909A] text-sm block mb-4 sml:mb-7"> Last 7 days </label>
        <h2 class="text-[#23272E] text-2xl sml:text-[32px] mb-2 font-bold">$350K</h2>
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
  components: { upArrowIcon },
  name: "SalesAndCosts",
};
</script>
