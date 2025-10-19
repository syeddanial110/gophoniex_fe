import { loadStripe } from "@stripe/stripe-js";

// export const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );
export const stripePromise = loadStripe(
  "pk_test_51SIGBNQlUNdtR5hzNaqbpJd8W3ACLTS2JjW3omxpRmgLSOoczOY4AnAFkwPYODv9Won0ZdycWTfGi2PTesusxxGO00UcXyLMnA"
);
