import { loadStripe } from "@stripe/stripe-js";

// export const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );
export const stripePromise = loadStripe(
  "pk_test_51RlluGPS9mFlE39Sjo8ZyaY2wIE48qA48dHoMFc7XDL2kxtn4wv9X1yQvvZtwGKgA6FyOYF0a5xOGBLEOuS5Ejqj00IzCQAYSn"
);
