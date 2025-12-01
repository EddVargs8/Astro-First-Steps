import { defineAction } from "astro:actions";
import { z } from "astro:schema";

const users = [
  { email: "user@example.com", password: "password123" },
  { email: "admin@example.com", password: "adminpass" },
  { email: "guest@example.com", password: "guestpass" },
];

export const server = {
  login: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }),
    handler: async (input) => {
      const user = users.find(
        (u) => u.email === input.email && u.password === input.password,
      );

      if (user) {
        console.log("Login successful!");
      } else {
        console.log("Invalid email or password.");
      }
    },
  }),
};
