import { z } from 'zod';
import { API, RequestMethods, RequestParams } from './API';
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
    validatedRequest(method?: RequestMethods, params?: T): Promise<T>;
    /**
     * Class member variables:
     *
     * Variables below are class member variables, instead of class methods,
     * because they need to be bound to the class instance, to make it
     * easier to pass them around as callbacks
     * without losing the `this` context.
     */
    GET: () => Promise<T>;
    POST: (params: T) => Promise<T>;
    DELETE: () => Promise<T>;
}
