import { JSONSchema } from './utils';
export declare type RequestParams = string | JSONSchema;
export declare type RequestMethods = 'GET' | 'POST' | 'DELETE';
export declare class API {
    private baseUrl;
    private restNonce;
    /**
     * The API class must be initialized with
     * the base URL and the REST nonce.
     *
     * @param baseUrl - For example: http://localhost/wp-json/jetpack-favorites
     * @param restNonce - For example: abcdefghij
     */
    initialize(baseUrl: string, restNonce: string): void;
    isInitialized(): boolean;
    /**
     * The API Class should already be initialized with
     * the Base URL (that includes the REST namespace) and the REST nonce.
     * @see initialize
     *
     * So request methods need only the endpoint path,
     * For example:
     * ```js
     * const api = new API();
     * api.initialize( 'http://localhost/wp-json/jetpack-favorites', 'abcdefghij' );
     * api.request( 'posts' );
     * ```
     * This would make a request to: http://localhost/wp-json/jetpack-favorites/posts
     */
    request(partialPathname: string, method: RequestMethods, endpointNonce: string, params?: RequestParams, abortSignal?: AbortSignal): Promise<any>;
}
