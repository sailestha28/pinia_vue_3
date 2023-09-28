<template>
	<div class="bg-white">
		<div
			class="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-8xl lg:px-8"
			v-if="list?.products?.length > 0"
		>
			<h2 class="Capitalize mb-4">{{ list?.products[0]?.category }}</h2>

			<div
				class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
			>
				<a
					href="#"
					class="group"
					v-for="(list, index) in list?.products"
					:key="index"
				>
					<div
						class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
					>
						<img
							:src="list?.thumbnail"
							:alt="list?.title"
							class="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<h3 class="mt-4 text-sm text-gray-700">{{ list.title }}</h3>
					<p class="mt-1 text-lg font-medium text-gray-900">
						${{ list?.price }}
					</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useCategoryStore } from "../../store/useCategoryStore";
import { onMounted, ref, watch } from "vue";
const store = useCategoryStore();

const route = useRoute();

watch(route, () => {
	store.fetchCategoryProducts(route.params.category);
});
onMounted(() => {
	store.fetchCategoryProducts(route.params.category);
});

const list = ref([]);

watch(
	() => store.productList,
	(data) => {
		list.value = data;
	}
);
</script>

<style>
</style>