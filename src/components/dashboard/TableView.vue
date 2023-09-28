<template>
	<div class="mt-0">
		<div class="mb-5 flex flex-wrap sm:flex-nowrap gap-x-4">
			<div class="mb-5 sm:mb-0 w-full sm:w-3/5 flex gap-x-4">
				<div class="min-w-[150px]">
					<v-select
						v-model="filter.status"
						:items="statusData"
						label=""
						placeholder="Status: All"
						density="compact"
						class="normal-v-select"
					>
						<template v-slot:item="{ item, props }">
							<v-list-item
								v-bind="props"
								@click.prevent="
									() => getDataOnStatus(filter.status)
								"
							>
								<template v-slot:title>
									{{ item.raw }}
								</template>
							</v-list-item>
						</template>
					</v-select>
				</div>
				<div class="w-[200px]">
					<v-text-field
						v-model="filter.search"
						density="compact"
						variant="solo"
						class="v-text-filed"
						append-inner-icon="mdi-magnify"
						placeholder="Search"
						single-line
						hide-details
						@change.prevent="() => getDataOnSearch(filter.search)"
					></v-text-field>
				</div>
			</div>
			<div class="flex sm:justify-end w-full">
				<div class="w-full max-w-[350px] sm:w-[250px]">
					<VueDatePicker
						class="vue_date_picker"
						placeholder="Filter by date range"
						v-model="dateRange"
						format="dd MMMM, yyyy"
						range
						@cleared="() => filterByDate"
					/>
				</div>
			</div>
		</div>

		<v-data-table
			:headers="headers"
			:items="data"
			class="text-[#23272E] text-[15px] rounded-10 rounded-bl-[0px] rounded-br-[0px] overflow-hidden bg-transparent"
			item-key="name"
			:loading="loading"
			loading-text="Loading... Please wait"
			:items-per-page="itemsPerPage"
			:mobile-breakpoint="950"
			v-model:page="page"
			:search="filter.search"
			:footer-props="{
				'items-per-page-text': 'products per page',
			}"
		>
			<template v-slot:column.id="{ column }">
				<span class="text-[#8B909A] text-base">
					{{ column.title.toUpperCase() }}
				</span>
			</template>
			<template v-slot:item.brand="{ item }">
				<router-link
					class="text-blue"
					:to="`/product/${item?.selectable?.id}`"
				>
					{{ item?.selectable?.brand }}
				</router-link>
			</template>
			<template v-slot:item.name="{ item }">
				<router-link
					class="text-blue"
					:to="`/category/${item?.selectable?.name}`"
				>
					{{ item?.selectable?.name }}
				</router-link>
			</template>

			<template v-slot:item.date="{ item }">
				<div class="flex gap-x-1">
					{{ formatDate(item?.selectable?.date) }}
				</div>
			</template>
			<template v-slot:item.action="{ item }">
				<div class="flex gap-x-1">
					<router-link :to="`/product/${item?.selectable?.id}`">
						<button class="text-[#0F60FF]" type="button">
							View
						</button>
					</router-link>
				</div>
			</template>

			<template v-slot:bottom>
				<div
					class="flex justify-between bg-white border-lb-[20px] vDataTable_footer"
				>
					<div class="w-[300px] flex items-center gap-x-2">
						<p class="text-[#8B909A] text-xs">Showing</p>
						<v-select
							v-model="itemsPerPage"
							:items="perPageOptions"
							label=""
							placeholder="Status: All"
							density="compact"
							class="normal-v-select"
						></v-select>
						<span class="text-[#8B909A] text-xs">
							of {{ tableData.length }}
						</span>
					</div>

					<v-pagination
						class="text-xs"
						v-model="page"
						:length="pageCount"
						:total-visible="5"
					></v-pagination>
				</div>
			</template>
		</v-data-table>
	</div>
</template>

<script setup>
import moment from "moment";
import { VDataTable } from "vuetify/labs/VDataTable";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";

const props = defineProps({
	column: {
		type: Array,
	},
	data: {
		type: Array,
	},
	loading: {
		type: Boolean,
	},
});
const tableData = ref(props.data);

const filter = ref({ status: null, search: null });
const headers = ref(props.column);
const dateRange = ref(null);
const statusData = ["All", "Pending", "Cancelled", "Completed"];
const perPageOptions = ref([5, 10, 15, 20, 25, 50]);
const page = 1;
const pageCount = ref(null);
const itemsPerPage = ref(10);

const formatDate = (value) => {
	if (!value) return "";
	return moment(String(value)).format("D MMMM, YYYY");
};

const onSearch = () => {
	setTimeout(() => {
		const filterData = props.data.filter((item) =>
			item.customer
				.toLowerCase()
				.includes(filter.value.search.toLowerCase())
		);

		props.data = filterData;
		pageCount.value = Math.ceil(props.data.length / itemsPerPage.value);
	}, 10);
};

// export default {
// 	props: { column: Array, filterValue: String, dataList: Array || object },

// 	data() {
// 		return {
// 			onData: this.data,
// 			date: null,
// 			dateRange: null,
// 			filter: { status: null, search: null },
// 			page: 1,
// 			itemsPerPage: 10,
// 			perPageOptions: [5, 10, 15, 20, 25, 50],
// 			loading: false,
// 			headers: this.column || [],
// 			statusData: ["All", "Pending", "Cancelled", "Completed"],
// 			tableData: [],
// 			pageCount: null,
// 		};
// 	},
// 	watch: {
// 		column: function (newValue, oldValue) {
// 			this.headers = newValue;
// 		},
// 		dataList: function (newValue, oldValue) {
// 			console.log(newValue, oldValue);
// 		},
// 		filterValue: function (newValue, oldValue) {
// 			this.getDataOnFilter();
// 		},
// 		itemsPerPage: function (newValue, oldValue) {
// 			this.getDataOnFilter();
// 		},
// 		dateRange: function (newValue, oldValue) {
// 			this.filterByDate();
// 		},
// 	},
// 	mounted() {
// 		this.getDataOnFilter();
// 	},

// 	methods: {
// 		formatDate(value) {
// 			if (!value) return "";
// 			return moment(String(value)).format("D MMMM, YYYY");
// 		},
// 		onSearch() {
// 			setTimeout(() => {
// 				const filterData = this.onData.filter((item) =>
// 					item.customer
// 						.toLowerCase()
// 						.includes(this.filter.search.toLowerCase())
// 				);
// 				console.log(filterData);
// 				this.tableData = filterData;
// 				this.pageCount = Math.ceil(
// 					this.tableData.length / this.itemsPerPage
// 				);
// 			}, 10);
// 		},
// 		onDetail(data) {
// 			console.log(data);
// 		},
// 		onView(data) {
// 			console.log(data);
// 		},

// 		getDataOnFilter() {
// 			const tableArray = this.onData;
// 			if (this.filterValue === "all") {
// 				this.loading = true;
// 				setTimeout(() => {
// 					this.tableData = tableArray;
// 					this.loading = false;
// 					this.pageCount = Math.ceil(
// 						this.tableData.length / this.itemsPerPage
// 					);
// 				}, 1000);
// 			} else if (this.filterValue === "completed") {
// 				this.loading = true;
// 				setTimeout(() => {
// 					const completedData = tableArray.filter(
// 						(item) => item.state === "Completed"
// 					);
// 					this.tableData = completedData;
// 					this.loading = false;
// 					this.pageCount = Math.ceil(
// 						this.tableData.length / this.itemsPerPage
// 					);
// 				}, 1000);
// 			} else if (this.filterValue === "Pending") {
// 				this.loading = true;
// 				setTimeout(() => {
// 					const pendingData = tableArray.filter(
// 						(item) => item.state === "Pending"
// 					);
// 					this.tableData = pendingData;
// 					this.loading = false;
// 					this.pageCount = Math.ceil(
// 						this.tableData.length / this.itemsPerPage
// 					);
// 				}, 1000);
// 			} else {
// 				this.loading = true;
// 				setTimeout(() => {
// 					const calcelledData = tableArray.filter(
// 						(item) => item.state === "Cancelled"
// 					);
// 					this.tableData = calcelledData;
// 					this.loading = false;
// 					this.pageCount = Math.ceil(
// 						this.tableData.length / this.itemsPerPage
// 					);
// 				}, 1000);
// 			}
// 		},
// 		getDataOnStatus(filterByValue) {
// 			const tableArray = this.onData;
// 			this.loading = true;
// 			if (filterByValue.toLowerCase() === "all") {
// 				setTimeout(() => {
// 					this.tableData = tableArray;
// 					this.loading = false;
// 					this.pageCount = Math.ceil(
// 						this.tableData.length / this.itemsPerPage
// 					);
// 				}, 1000);
// 			} else {
// 				setTimeout(() => {
// 					const filterData = this.onData.filter(
// 						(item) =>
// 							item.state.toLowerCase() ===
// 							filterByValue.toLowerCase()
// 					);
// 					this.tableData = filterData;
// 					this.pageCount = Math.ceil(
// 						this.tableData.length / this.itemsPerPage
// 					);
// 					this.loading = false;
// 				}, 1000);
// 			}
// 		},
// 		getDataOnSearch(filterByValue) {
// 			if (filterByValue != "" || filterByValue != null) {
// 				const tableArray = this.onData;
// 				this.loading = true;
// 				setTimeout(() => {
// 					this.tableData = this.onData.filter((item) =>
// 						item.customer
// 							.toLowerCase()
// 							.includes(filterByValue.toLowerCase())
// 					);
// 					this.pageCount = Math.ceil(
// 						this.tableData.length / this.itemsPerPage
// 					);
// 					this.loading = false;
// 				}, 1000);
// 			}
// 		},
// 		filterByDate() {
// 			const tableArray = this.onData;
// 			if (this.dateRange != null) {
// 				this.loading = true;
// 				setTimeout(() => {
// 					const startDate = moment(this.dateRange[0]).format(
// 						"YYYY-MM-DD"
// 					);
// 					const endDate = moment(this.dateRange[1]).format(
// 						"YYYY-MM-DD"
// 					);
// 					this.tableData = tableArray.filter((item) => {
// 						const itemDate = item.date;
// 						return itemDate >= startDate && itemDate <= endDate;
// 					});
// 					this.pageCount = Math.ceil(
// 						this.tableData.length / this.itemsPerPage
// 					);
// 					this.loading = false;
// 				}, 1000);
// 			} else {
// 				this.loading = true;
// 				setTimeout(() => {
// 					this.tableData = tableArray;
// 					this.loading = false;
// 					this.pageCount = Math.ceil(
// 						this.tableData.length / this.itemsPerPage
// 					);
// 				}, 1000);
// 			}
// 		},
// 	},
// };
</script>
