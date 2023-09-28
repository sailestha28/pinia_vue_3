<script setup>
import BarToggle from "../icons/sidebarIcons/bar-toggle.vue";
import DashboardIcon from "../icons/sidebarIcons/dashboard-icon.vue";
import LeftIcon from "../icons/sidebarIcons/left-icon.vue";
import OrderIcon from "../icons/sidebarIcons/order-icon.vue";
import BrandIcon from "../icons/sidebarIcons/brand-icon.vue";
import ProductAddIcon from "../icons/sidebarIcons/product-add-icon.vue";
import ProductBoxIcon from "../icons/sidebarIcons/product-box-icon.vue";
import CloseIcon from "../icons/sidebarIcons/close-icon.vue";
</script>

<script>
import { mapState, mapMutations } from "vuex";
import "../../assets/styles/scss/sidebar.scss";

export default {
	data() {
		return {
			menu: [
				{
					link: null,
					title: "MAIN MENU",
				},
				{
					link: "/",
					title: "Dashboard",
					icon: "icon_dashboard",
				},
				{
					link: "/products",
					title: "Products",
					icon: "order",
				},
				{
					link: "/category",
					title: "Category",
					icon: "brand",
				},
				{
					link: null,
					title: "PRODUCTS",
				},
				{
					link: "/product-create",
					title: "Add Products",
					icon: "product_add",
				},
			],
		};
	},
	mounted() {
		this.loadMenuState();
	},
	watch: {
		isMenuOpen: {
			handler() {
				this.saveMenuState();
			},
		},
	},
	computed: {
		...mapState(["isMenuOpen"]),
	},
	methods: {
		...mapMutations(["toggleMenu"]),
		saveMenuState() {
			localStorage.setItem("isMenuOpen", JSON.stringify(this.isMenuOpen));
		},
		loadMenuState() {
			const savedState = localStorage.getItem("isMenuOpen");
			if (savedState !== null) {
				this.$store.state.isMenuOpen = JSON.parse(savedState);
			}
		},
	},
	components: {
		DashboardIcon,
		OrderIcon,
		BrandIcon,
		ProductAddIcon,
		ProductBoxIcon,
		CloseIcon,
	},
};
</script>

<template>
	<nav
		:class="[
			isMenuOpen
				? 'translate-x-[-110%] xlg:translate-x-0 w-[260px] xlg:w-[110px]'
				: 'w-[260px] xlg:translate-x-0',
			' fixed top-0 z-20 left-0 h-full bg-white transition-all duration-500 shadow-[0px_0_15px_0px_#0000002b] xlg:shadow-none',
		]"
	>
		<div class="min-w-[110px] overflow-hidden">
			<div class="px-[18px] py-5">
				<div class="flex flex-wrap items-center justify-between">
					<router-link to="/" class="flex w-12 min-h-[34px]">
						<img
							alt="logo"
							class="mr-[10px]"
							src="@/assets/images/logo.svg"
							width="28"
							height="24"
						/>
						<transition name="fade">
							<span
								v-if="!isMenuOpen"
								:class="[
									isMenuOpen
										? ' xlg:text-0'
										: 'text-[22px] font-semibold text-[#23272E]',
								]"
							>
								JoBins
							</span>
						</transition>
					</router-link>
					<div class="w-6 flex items-center">
						<button
							type="button"
							@click="toggleMenu"
							class="bg-white"
						>
							<div
								class="flex items-center xlg:hidden max-w-[32px] max-h-[32px] overflow-hidden"
							>
								<CloseIcon />
							</div>
							<div
								class="hidden xlg:flex items-center justify-center"
							>
								<span class="relative left-1">
									<span
										class="inline-block"
										:class="[
											isMenuOpen ? 'rotate-180' : '',
										]"
									>
										<LeftIcon />
									</span>
								</span>
								<span class="scale-105">
									<BarToggle />
								</span>
							</div>
						</button>
					</div>
				</div>
			</div>
			<ul
				class="overflow-x-hidden overflow-y-auto h-[calc(100vh-74px)] hidden xlg:block"
			>
				<li
					v-for="(item, index) in menu"
					:key="index"
					:class="[
						'px-[14px] text-[#8B909A]',
						item.link == null
							? `text-[11px] py-4 uppercase  ${
									!isMenuOpen ? ' pl-8' : 'pl-4'
							  }`
							: 'capitalize  mb-2 whitespace-nowrap',
					]"
				>
					<span v-if="item.link == null">
						{{ item.title }}
					</span>
					<router-link
						v-else
						:to="item.link"
						:class="[
							'nav-item',
							' items-center px-4 py-2 hover:text-[#23272E] hover:stroke-black',
							!isMenuOpen ? 'flex gap-x-2' : 'inline-flex',
						]"
					>
						<span :class="'icon ' + item.icon">
							<template v-if="item.icon === 'icon_dashboard'">
								<DashboardIcon />
							</template>
							<template v-if="item.icon === 'order'">
								<OrderIcon />
							</template>
							<template v-if="item.icon === 'brand'">
								<BrandIcon />
							</template>
							<template v-if="item.icon === 'product_add'">
								<ProductAddIcon />
							</template>
							<template v-if="item.icon === 'product_list'">
								<ProductBoxIcon />
							</template>
						</span>
						<span class="link_text" v-if="!isMenuOpen">
							{{ item.title }}</span
						>
					</router-link>
				</li>
			</ul>
			<ul
				class="overflow-x-hidden overflow-y-auto h-[calc(100vh-74px)] xlg:hidden"
			>
				<li
					v-for="(item, index) in menu"
					:key="index"
					:class="[
						'px-[14px] text-[#8B909A]',
						item.link == null
							? `text-[11px] py-4 uppercase  ${
									!isMenuOpen ? ' pl-8' : 'pl-4'
							  }`
							: 'capitalize  mb-2 whitespace-nowrap',
					]"
				>
					<span v-if="item.link == null">
						{{ item.title }}
					</span>
					<router-link
						v-else
						:to="item.link"
						:class="[
							'nav-item',
							' items-center px-4 py-2 hover:text-[#23272E] hover:stroke-black',
							!isMenuOpen ? 'flex gap-x-2' : 'inline-flex',
						]"
						@click.native="() => toggleMenu()"
					>
						<span :class="'icon ' + item.icon">
							<template v-if="item.icon === 'icon_dashboard'">
								<DashboardIcon />
							</template>
							<template v-if="item.icon === 'order'">
								<OrderIcon />
							</template>
							<template v-if="item.icon === 'brand'">
								<BrandIcon />
							</template>
							<template v-if="item.icon === 'product_add'">
								<ProductAddIcon />
							</template>
							<template v-if="item.icon === 'product_list'">
								<ProductBoxIcon />
							</template>
						</span>
						<span class="link_text" v-if="!isMenuOpen">
							{{ item.title }}</span
						>
					</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>
