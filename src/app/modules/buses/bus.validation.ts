import { z } from "zod";

const busAddValidation = z.object({
  body: z.object({
    busName: z.string({
      required_error: "busName is required",
      invalid_type_error: "busName must be string",
    }),
    busType: z.string({
      required_error: "busType is required",
      invalid_type_error: "busType must be string",
    }),
    busNumber: z.string({
      required_error: "busNumber is required",
      invalid_type_error: "busNumber must be string",
    }),
    busRoute: z.string({
      required_error: "busRoute is required",
      invalid_type_error: "busRoute must be string",
    }),
    busSchedule: z
      .array(
        z.string({
          invalid_type_error: "Each busSchedule item must be a string",
        })
      )
      .optional()
      .or(z.literal(null)),
  }),
});

const busUpdateValidation = z.object({
  body: z.object({
    busName: z.string().optional(),
    busType: z.string().optional(),
    busNumber: z.string().optional(),
    busRoute: z.string().optional(),
    busSchedule: z
      .array(
        z.string({
          invalid_type_error: "Each busSchedule item must be a string",
        })
      )
      .optional(), // Explicitly make it optional
  }),
});
export const busValidation = {
  busAddValidation,
  busUpdateValidation,
};
