import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from 'resend';
import { RESEND_API_KEY, FROM_EMAIL } from 'astro:env/server';

const users = [
  { email: "user@example.com", password: "password123" },
  { email: "admin@example.com", password: "adminpass" },
  { email: "guest@example.com", password: "guestpass" },
];

const resend = new Resend(RESEND_API_KEY);


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
  contactForm: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      message: z.string().min(10),
    }),
    handler: async input => {
      try {
        const { email, message } = input;
        await resend.emails.send({
          from: FROM_EMAIL,
          to: email,
          subject: 'New Contact Form Submission',
          html: `<p>${message}</p>`,
        });
        return { success: true, message: 'E-mail sent successfully ✅' };
      } catch (error) {
        return { success: false, message: 'There was an error sending the e-mail ❌' };
      }
    },
  }),
};
