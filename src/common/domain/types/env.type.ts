import { z } from 'zod';

export const ConfigEnvSchema = z.object({
  SERVER_PORT: z.coerce.number().optional().default(3001),
  CRYPTO_SECRET: z.string(),
});

export type ConfigEnv = z.infer<typeof ConfigEnvSchema>;
export type ConfigEnvKeys = keyof ConfigEnv;
