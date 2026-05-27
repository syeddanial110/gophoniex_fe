export const WEB_URL = "http://localhost:3000";
// export const WEB_URL = "https://activityphysical.tech";

export const pathLocations = {
  home: "/",
  about: "/about",
  contact: "/contact-us",
  cancellationRefundPolicy: "/cancellation-refund-policy",
  termsAndConditions: "/terms-conditions",
  ccpa: "/ccpa",
  faqs: "/faqs",
  locations: "/locations",
  otherProgramSwitch: "/other-program-switch",
  privacyPolicy: "/privacy-policy",
  termsOfServices: "/terms-of-services",
  wavierLiablity: "/wavier-liability",
  profile: "/profile",
  login: "/auth/login",
  register: "/auth/register",
  cart: "/cart",
  categories: "/categories",
  subCategories: "/categories/sub-categories",
  program: "/categories/program",
  content: "/content",
  checkout: "/checkout",
  orders: "/orders",
  blogs: "/blogs",
};
// export const pathLocations = {
//   home: "/",
//   about: "/user/about",
//   contact: "/user/contact-us",
//   cancellationRefundPolicy: "/user/cancellation-refund-policy",
//   termsAndConditions: "/user/terms-conditions",
//   ccpa: "/user/ccpa",
//   faqs: "/user/faqs",
//   locations: "/user/locations",
//   otherProgramSwitch: "/user/other-program-switch",
//   privacyPolicy: "/user/privacy-policy",
//   termsOfServices: "/user/terms-of-services",
//   wavierLiablity: "/user/wavier-liability",
//   profile: "/user/profile",
//   login: "/auth/login",
//   register: "/auth/register",
//   cart: "/user/cart",
//   categories: "/user/categories",
//   subCategories: "/user/categories/sub-categories",
//   program: "/user/categories/program",
//   content: "/content",
//   checkout: "/user/checkout",
//   orders: "/user/orders",
//   blogs: "/user/blogs",
// };

export const Navigation_Menu = [
  {
    name: "Home",
    link: pathLocations.home,
  },
  {
    name: "About Us",
    link: pathLocations.about,
  },
  {
    name: "Classes",
    link: "#",
    subMenu: [
      {
        name: "PlayPass Membership",
        link: "/playpass-membership",
      },
      {
        name: "Regular Summer Camps",
        link: "/playpass-membership",
      },
      {
        name: "Beach Summer Camps",
        link: "/playpass-membership",
      },
    ],
  },
  {
    name: "Blogs",
    link: "/2025-summer-camps",
  },
  {
    name: "Contact us",
    link: pathLocations.contact,
  },
];
