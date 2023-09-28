<template>
	<div class="mt-1">
		<TableView :loading="loading" :column="headers" :data="category" />
	</div>
</template>

<script setup>
import TableView from "../../components/dashboard/TableView.vue";
import { useCategoryStore } from "../../store/useCategoryStore";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
const store = useCategoryStore();
const categoryStore = useCategoryStore();

const route = useRoute();
const loading = ref(false);
const category = ref([]);

onMounted(async () => {
	try {
		await store.fetchCategories();
	} catch (error) {
		console.error("Error fetching categories:", error);
	}
});

watch(
	() => store.categories,
	(data) => {
		category.value = data.map((category, index) => {
			return {
				id: index,
				name: category,
			};
		});
	}
);
watch(
	() => store.loading,
	(data) => {
		loading.value = data;
	}
);

watch(route, () => {
	store?.fetchCategories();
});

const headers = [
	{
		title: "ID",
		align: "start",
		sortable: false,
		key: "id",
		width: "85px",
	},
	{ title: "Category", align: "start", key: "name" },
];
</script>

