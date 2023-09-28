<template>
	<!-- component -->
	<section class="text-gray-700 body-font overflow-hidden bg-white">
		<div class="container px-5 py-24 mx-auto">
			<div class="lg:w-4/5 mx-auto flex flex-wrap">
				<img
					alt="ecommerce"
					class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
					:src="detail?.images[0]"
				/>
				<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
					<h2
						class="text-sm title-font text-gray-500 tracking-widest mb-2 text-green"
					>
						{{ detail?.category }}
					</h2>
					<h2
						class="text-sm title-font text-gray-500 tracking-widest mb-2"
					>
						{{ detail?.brand }}
					</h2>
					<h1
						class="text-gray-900 text-3xl title-font font-medium mb-2"
					>
						{{ detail?.title }}
					</h1>
					<div class="flex mb-4">
						<span class="flex items-center">
							<div>
								<span>Rating:&nbsp;</span>
								<span>{{ detail?.rating }}</span>
							</div>
							<span class="text-gray-600 ml-3">4 Reviews</span>
						</span>
					</div>
					<p class="leading-relaxed">
						{{ detail?.description }}
					</p>
					<div
						class="flex mt-6 items-center pb-5 border-t-2 border-gray-200 mb-5"
					>
						<span
							class="title-font font-medium text-2xl text-gray-900"
						>
							${{ detail?.price }}</span
						>

						<button
							class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
						>
							<svg
								fill="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
								></path>
							</svg>
						</button>
					</div>
					<div class="flex">
						<button
							class="w-full flex text-center justify-center align-center text-white bg-red border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
							@click.prevent.stop="handleAddToCart"
						>
							<span> Button</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useProductStore } from "../../store/useProductStore";
import { onMounted, ref, watch } from "vue";

const route = useRoute();

const detail = ref(null);
const store = useProductStore();

onMounted(async () => {
	try {
		await store.fetchProductDetail(route.params.id);
	} catch (error) {
		console.error("Error fetching categories:", error);
	}
});

watch(
	() => store.productDetail,
	(data) => {
		detail.value = data;
	}
);

const handleAddToCart = () => {
	store.addProduct(detail);
};
</script>

<style>
</style>