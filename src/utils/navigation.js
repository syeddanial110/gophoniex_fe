export const pathLocations = {
  home: "/user/home",
  about: "/user/about",
  contact: "/user/contact",
  cancellationRefundPolicy: "/user/cancellation-refund-policy",
  termsAndConditions: "/user/terms-and-conditions",
  ccpa: "/user/ccpa",
  collection: "/user/collection",
  contactUs: "/user/contact-us",
  faqs: "/user/faqs",
  locations: "/user/locations",
  otherProgramSwitch: "/user/other-program-switch",
  privacyPolicy: "/user/privacy-policy",
  termsOfServices: "/user/terms-of-services",
  wavierLiablity: "/user/wavier-liability",
  profile: "/user/profile",
  login: "/auth/login",
};

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
    name: "Categories",
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
