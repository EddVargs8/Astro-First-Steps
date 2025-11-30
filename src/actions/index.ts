import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  ping: defineAction({
    input: z.object({
      name: z.string(),
    }),
    handler: async ({ name }) => {
      console.log("Action ejecutada. Nombre:", name);
      return { message: `Hola ${name}!` };
    },
  }),
};
