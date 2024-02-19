import { z } from "zod";

const ZCreateDoctor = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
});

export { ZCreateDoctor };
