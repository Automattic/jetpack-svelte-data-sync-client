import { z } from 'zod';
import { API, RequestParams } from './API';
/**
 * Every SyncedStore option has its own API Endpoint.
 */
export declare class API_Endpoint<T extends RequestParams> {
    private api;
    private name;
    private schema;
    nonce: string;
    private endpoint;
    constructor(api: API, name: string, schema: z.ZodSchema);
    private validatedRequest;
    /**
     * Class member variables:
     *
     * Variables below are class member variables, instead of class methods,
     * because they need to be bound to the class instance, to make it
     * easier to pass them around as callbacks
     * without losing the `this` context.
     */
    GET: (abortSignal?: AbortSignal) => Promise<T>;
    SET: (params: T, abortSignal?: AbortSignal) => Promise<T>;
    MERGE: (params: T, abortSignal?: AbortSignal) => Promise<T>;
    DELETE: (abortSignal?: AbortSignal) => Promise<T>;
}
