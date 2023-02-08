import { z } from 'zod';
/**
 * JSON Schema form Zod
 * Straight out of the docs:
 * https://github.com/colinhacks/zod
 */
declare const literalSchema: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>;
declare type Literal = z.infer<typeof literalSchema>;
declare type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const jsonSchema: z.ZodType<Json>;
export declare type JSONSchema = z.infer<typeof jsonSchema>;
export declare function sleep(ms: number): Promise<unknown>;
export {};
