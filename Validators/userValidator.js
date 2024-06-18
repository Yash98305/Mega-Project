const { z } = require("zod");

const userValidationSchema = z.object({
  business: z
    .string()
    .regex(/^[a-zA-Z\s]*$/, { message: "Name must contain only letters and spaces" })
    .trim(),
  fname: z
    .string()
    .min(3, { message: "First Name must be at least 3 characters long" })
    .max(50, { message: "First Name must be less than 50 characters long" })
    .regex(/^[a-zA-Z\s]*$/, { message: "First Name must contain only letters and spaces" })
    .trim(),
  lname: z
    .string()
    .min(3, { message: "Last Name must be at least 3 characters long" })
    .max(50, { message: "Last Name must be less than 50 characters long" })
    .regex(/^[a-zA-Z\s]*$/, { message: "Last Name must contain only letters and spaces" })
    .trim(),
    phone: z
    .string()
    .min(10, { message: "Phone number must be exactly 10 digits" })
    .max(10, { message: "Phone number must be exactly 10 digits" })
    .regex(/^[5-9]\d[0-9]*$/, { message: "Phone number must start with 5, 6, 7, 8, or 9 and be exactly 10 digits" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be at least 5 characters long" })
    .max(100, { message: "Email must be less than 100 characters long" })
    .trim(),
    password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(100, { message: "Password must be less than 100 characters long" })
    .trim(),
});

module.exports = { userValidationSchema };
