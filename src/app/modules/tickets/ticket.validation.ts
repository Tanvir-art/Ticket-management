import { z } from "zod";

const ticketValidationAddSchema = z.object({
  body: z.object({
    busId: z.string({
      required_error: "busId is required",
      invalid_type_error: "busId must be string",
    }),

    timeSlot: z.string({
      required_error: "timeSlot is required",
      invalid_type_error: "timeSlot must be date",
    }),

    price: z.number({
      required_error: "price is required",
      invalid_type_error: "price must be number",
    }),
    availability: z.boolean({
      required_error: "availability is required",
      invalid_type_error: "availability must be boolean",
    }),
  }),
});

const updateTicketValidationSchema = z.object({
  body: z.object({
    busId: z.string().optional(),
    timeSlot: z.string().optional(),
    price: z.number().optional(),
    availability: z.boolean().optional(),
  }),
});

export const ticketValidation = {
  ticketValidationAddSchema,
  updateTicketValidationSchema,
};
