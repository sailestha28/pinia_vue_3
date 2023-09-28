<template>
  <aside class="bg-white rounded-[16px] gap-x-4 p-5 px-6 overflow-hidden">
    <div class="flex flex-wrap">
      <ul class="flex gap-y-4 flex-col w-full">
        <li v-for="(item, index) in data" :key="index">
          <div class="flex gap-x-4 items-center">
            <div class="block w-[34px] h-[34px] relative rounded-full overflow-hidden">
              <img
                v-if="item.country === 'Brazil'"
                src="/src/assets/images/dashboard/brazil.png"
                alt="total profit"
                class="absolute left-0 right-0 top-0 bottom-0 object-cover"
              />
              <img
                v-if="item.country === 'United States'"
                src="/src/assets/images/dashboard/usa.png"
                alt="total profit"
                class="absolute left-0 right-0 top-0 bottom-0 object-cover"
              />
              <img
                v-if="item.country === 'Australia'"
                src="/src/assets/images/dashboard/australia.png"
                alt="total profit"
                class="absolute left-0 right-0 top-0 bottom-0 object-cover"
              />
            </div>
            <div class="flex flex-col w-[90px]">
              <h3 class="text-[#4B465C] font-semibold text-[15px] leading-[1.3]">
                {{ item.number }}
              </h3>
              <span class="text-[#8B909A] text-[12px]">
                {{ item.country }}
              </span>
            </div>
            <div class="w-[calc(100%-85px-34px)]">
              <div class="flex items-center gap-x-2">
                <div class="relative w-[calc(100%-75px)]">
                  <div class="w-full bg-[#E9E7FD] h-[6px] rounded-10"></div>
                  <div
                    class="bg-[#0F60FF] rounded-10 absolute left-0 top-0 h-full"
                    :style="'width:' + item.value + '%'"
                  ></div>
                </div>
                <p class="flex flex-row items-center gap-x-1 text-xs font-semibold">
                  <template v-if="item.status === 'up'">
                    <green-up-arrow />
                    <span class="text-[#28C76F]">
                      {{ item.value }}
                      %
                    </span>
                  </template>
                  <template v-else>
                    <red-down-arrow />
                    <span class="text-[#EA5455]">
                      {{ item.value }}
                      %
                    </span>
                  </template>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
import GreenUpArrow from "../../icons/dashboard/greenUpArrow.vue";
import redDownArrow from "../../icons/dashboard/redDownArrow.vue";
export default {
  components: { redDownArrow, GreenUpArrow },
  name: "CountryChart",
  data() {
    return {
      data: [
        {
          id: 0,
          country: "United States",
          number: "30K",
          value: 25.8,
          status: "up",
          image: "/src/assets/images/dashboard/usa.png",
        },
        {
          id: 1,
          country: "Brazil",
          number: "26K",
          value: 16.2,
          status: "down",
          image: "/src/assets/images/dashboard/brazil.png",
        },
        {
          id: 2,
          country: "Australia",
          number: "17K",
          value: 11.9,
          status: "down",
          image: "/src/assets/images/dashboard/australia.png",
        },
      ],
    };
  },
};
</script>

<style></style>
