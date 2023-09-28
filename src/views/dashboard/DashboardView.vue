<template>
  <section>
    <div class="flex gap-3 flex-wrap sml:flex-nowrap">
      <div class="w-full sm:w-1/2 sml:w-[40%] xxxl:w-[35%]">
        <SalesAndCosts />
      </div>
      <div class="w-full sm:w-[calc(50%-12px)] sml:w-[25%]">
        <ProfitChart />
      </div>
      <div class="w-full sml:w-[35%] xxxl:w-[40%]">
        <CountryChart />
      </div>
    </div>
    <div class="mt-4">
      <UserInfo @childValueTab="setTabValue" />
    </div>
    <TabStatus :tabVal="tabValue" />
  </section>
</template>
<script>
import TabStatus from "@/components/dashboard/TabStatus.vue";
import UserInfo from "@/components/dashboard/widgets/UserInfo.vue";
import CountryChart from "@/components/dashboard/widgets/CountryChart.vue";
import ProfitChart from "@/components/dashboard/widgets/ProfitChart.vue";
import SalesAndCosts from "@/components/dashboard/widgets/SalesAndCosts.vue";
export default {
  name: "DashboardView",
  components: { TabStatus, UserInfo, CountryChart, ProfitChart, SalesAndCosts },
  data() {
    return {
      tabValue: "all",
    };
  },
  methods: {
    setTabValue(data) {
      this.tabValue = data;
    },
  },
};
</script>
