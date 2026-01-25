export const ApiEndpoints = {
  auth: {
    base: "/auth",
    login: "/login",
    register: "/register",
    update: "/update",
    getUserByToken: "/getAuthenticatedUser",
    hearUs: "/hearUs/get",
    updatePassword: "/updateUserPassword"
  },
  children: {
    base: "/children",
    getAll: "/get",
    getById: "/getById",
    create: "/create",
    update: "/update",
    delete: "/delete",
  },
  categories: {
    base: "/category",
    getAll: "/get",
    getById: "/getById",
    getBySlug: "/getBySlug/",
  },
  subCategory: {
    base: "/subCategory",
    getAll: "/get",
    getById: "/getById",
    getByCategorySlug: "/getByCatSlug",
  },
  products: {
    base: "/product",
    getAll: "/getAllProduct",
    getById: "/getProductById",
    getProductByQuery: "/getProductcatSubcatSlug",
    getProductByCategory: "/getProductByCategory",
  },
  pages: {
    base: "/pages",
    getAll: "/getAll",
    getById: "/getById",
  },
  addToCart: {
    base: "/cart",
    get: "/get",
    create: "/create",
    delete: "/delete",
  },
  menu: {
    base: "/content",
    getAll: "/get",
    getById: "/getById",
    getBySlug: "/getBySlug",
  },
  order: {
    base: "/order",
    placeOrder: "/place",
    getAllOrders: "/user/orders",
    cancelRecurringPayment: "/cancel-subscription",
    orderDetail: "/getbyid",
    getAllPayments: "/all/payments",
    getOrderPayment: "/single/payment",
  },
  blogs: {
    base: "/blogs",
    get: "/get",
  },
  homePageContent: {
    get: "/homePage/get",
  },
  newsletter: {
    base: "/newsletter",
    subscribe: "/subscribe",
  }
};
