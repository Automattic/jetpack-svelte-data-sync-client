import { z } from 'zod';
/**
 * DataSync class for synchronizing data between the client and the server.
 *
 * Expected Formatting:
 * http://localhost/wp-json/jetpack-favorites/status
 * - `http://localhost/wp-json` is the WP REST API endpoint, defined in window.{namespace}.rest_api
 * - `jetpack-favorites` is the "namespace"
 * - `status` is the "key"
 *
 * DataSync expects these values to be
 * available in the global window object in the following format: window[ namespace ][ key ]:
 *
 * Note: The keys are converted to be snake_case in Objects, but kebab-case in URLs.
 */
export declare class DataSync<Schema extends z.ZodSchema, Value extends z.infer<Schema>> {
    private schema;
    /**
     * WordPress REST API Endpoint configuration.
     * @param wpDatasyncUrl - For example: http://localhost/wp-json/jetpack-favorites
     */
    private wpDatasyncUrl;
    /**
     * Nonce for WordPress REST API interaction.
     * This is different from the endpoint nonce that's used for every individual endpoint.
     * @see https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/#cookie-authentication
     */
    private wpRestNonce;
    /**
     * Nonce for every endpoint.
     * This is different from WP REST API nonce.
     */
    private endpointNonce;
    /**
     * The namespace of the endpoint.
     * This matches the name of the global variable (window.{name_space}.{endpoint_name})
     */
    private namespace;
    /**
     * Same as namespace, but using dashes instead of underscores.
     */
    private endpoint;
    /**
     * Key of the value that's being synced.
     */
    private key;
    /**
     * Constructor for the DataSync class.
     *
     * Example usage:
     * ```js
     * const dataSync = new DataSync('namespace', 'key', schema);
     * ```
     * This would make a request to: http://localhost/wp-json/namespace/key
     *
     * @param namespace - The namespace of the endpoint. This matches the name of the global variable (window.{namespace}.{endpoint_name}).
     * @param key - The key of the value that's being synced. This is used to fetch the value from the global window object.
     * @param schema - The Zod schema to validate the value against. This ensures that the value is of the expected type.
     */
    constructor(namespace: string, key: string, schema: Schema);
    /**
     * Helper function to get values
     * from the window object and validate them.
     *
     * @param valueName - The name of the value. For example, `posts`.
     * @param valueSchema - The Zod schema to validate the value against.
     * @returns The parsed value.
     */
    private getWindowValue;
    private request;
    /**
     * Method to parse the request.
     * @param method - The request method.
     * @param requestPath - The request path.
     * @param params - The request parameters.
     * @param abortSignal - The abort signal.
     * @returns The parsed value.
     */
    private parsedRequest;
    /**
     * Method to attempt the request.
     * @param url - The request URL.
     * @param args - The request arguments.
     * @returns The result of the request.
     */
    private attemptRequest;
    /**
     * Public Interface:
     *
     * Class member variables, instead of class methods, because they need
     * to be bound to the class instance, to make it easier to pass them
     * around as callbacks without losing the `this` context.
     */
    GET: (abortSignal?: AbortSignal) => Promise<Value>;
    SET: (params: Value, abortSignal?: AbortSignal) => Promise<Value>;
    MERGE: (params: Value, abortSignal?: AbortSignal) => Promise<Value>;
    DELETE: (abortSignal?: AbortSignal) => Promise<Value>;
    /**
     * Method to get the initial value from the window object.
     * @returns The initial value.
     */
    getInitialValue: () => z.TypeOf<Schema>;
}
