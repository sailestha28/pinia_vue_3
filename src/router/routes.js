import DashboardView from '../views/dashboard/DashboardView.vue'
import ProductDetailView from '../views/products/ProductDetailView.vue'
import OrderView from '../views/orders/IndexView.vue'
import CategoryIndex from '../views/category/CategoryIndex.vue'
import CategoryList from '../views/category/CategoryList.vue'
import ProductListIndex from '../views/products/ProductListIndex.vue'
export const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/order-management',
    name: 'OrderView',
    component: OrderView,

  },
  {
    path: '/category',
    name: 'CategoryIndex',
    component: CategoryIndex,

  },
  {
    path: '/category/:category',
    name: 'CategoryList',
    component: CategoryList,

  },
  {
    path: '/products',
    name: 'ProductListIndex',
    component: ProductListIndex,

  },
  {
    path: '/product/:id',
    name: 'ProductDetailView',
    component: ProductDetailView,

  },


  {
    path: '/brand',
    name: 'BrandView',

    component: () => import('../views/brands/IndexView.vue')
  },

  {
    path: '/product-create',
    name: 'ProductCreate',
    component: () => import('../views/products/CreateView.vue')
  }
]
