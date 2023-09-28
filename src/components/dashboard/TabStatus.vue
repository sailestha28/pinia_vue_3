<template>
	<div class="relative z-10">
		<v-window v-model="tab" :touch="false" class="overflow-visible">
			<v-window-item value="all">
				<div class="mt-3">
					<TableView
						:column="headers"
						:filterValue="tab"
						:data="users"
					/>
				</div>
			</v-window-item>
			<v-window-item value="completed" :filterValue="tab">
				<div class="mt-3">
					<TableView
						:column="headers"
						:filterValue="tab"
						:data="users"
					/>
				</div>
			</v-window-item>
			<v-window-item value="cancelled">
				<div class="mt-3">
					<TableView
						:column="headers"
						:filterValue="tab"
						:data="users"
					/>
				</div>
			</v-window-item>
		</v-window>
	</div>
</template>

<script setup>
import TableView from "./TableView.vue";
import { ref } from "vue";
import { customer } from "../../data/customer";
import { useUserStore } from "../../store/useUserStore";

import { onMounted, watch } from "vue";

const store = useUserStore();

const props = defineProps({
	tabVal: String,
});

const users = ref([]);

onMounted(async () => {
	try {
		await store.fetchUsers();
	} catch (error) {
		console.error("Error fetching categories:", error);
	}
});
watch(
	() => store.users,
	(data) => {
		console.log(data);
		users.value = data?.users;
	}
);

const tab = "all";
const loading = ref(false);
const statusData = ["All", "Active", "Pending", "Cancelled", "Completed"];
const headers = [
	{
		title: "ID",
		align: "start",
		sortable: false,
		key: "id",
		width: "85px",
	},
	{ title: "Customer", align: "start", key: "username" },
	{
		title: "Email",
		align: "start",
		key: "email",
	},
	{ title: "DOB", align: "start", key: "birthDate", width: "135px" },
	{ title: "Weight", align: "start", key: "weight", width: "135px" },

	{
		title: "Action",
		align: "start",
		key: "action",
		width: "140px",
	},
];
</script>

/* 
// <script>
// import TableView from "./TableView.vue";
// export default {
// 	name: "TabStatus",
// 	components: {
// 		TableView,
// 	},
// 	props: {
// 		tabVal: String,
// 	},

// 	watch: {
// 		tabVal: function (newVal, oldVal) {
// 			console.log("object", newVal);
// 			this.tab = newVal;
// 		},
// 	},
// 	data() {
// 		return {

// 	},
// };
//
</script>
 */