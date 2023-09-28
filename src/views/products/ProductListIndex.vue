<template>
	<div class="mt-1">
		<TableView :loading="loading" :column="headers" :data="product" />
	</div>
</template>

<script setup>
import TableView from "../../components/dashboard/TableView.vue";
import { useProductStore } from "../../store/useProductStore";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
const store = useProductStore();
const route = useRoute();

watch(route, () => {
	store.fetchProducts();
});

onMounted(async () => {
	try {
		await store.fetchProducts();
	} catch (error) {
		console.error("Error fetching categories:", error);
	}
});

const loading = ref(false);
const product = ref([]);

watch(
	() => store.products,
	(data) => {
		product.value = data?.products;
	}
);
watch(
	() => store.loading,
	(data) => {
		loading.value = data;
	}
);

const headers = [
	{
		title: "ID",
		align: "start",
		sortable: false,
		key: "id",
		width: "85px",
	},
	{ title: "Product", align: "start", key: "brand" },
	{ title: "Category", align: "start", key: "category" },
	{ title: "Stock", align: "start", key: "stock", width: "135px" },
	{
		title: "Total",
		align: "start",
		key: "price",
		width: "115px",
	},

	{
		title: "Action",
		align: "start",
		key: "action",
		width: "140px",
	},
];
</script>

