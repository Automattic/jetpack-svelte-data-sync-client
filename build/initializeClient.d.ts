import { z } from 'zod';
import { API } from './API';
import { API_Endpoint } from './Endpoint';
import { ValidatedValue } from './types';
/**
 * This is a helper function to get values
 * from the window object and validate them.
 *
 * @param namespace - The namespace of the value. For example, `jetpack_favorites`.
 * @param valueName - The name of the value. For example, `posts`.
 * @param valueSchema - The Zod schema to validate the value against.
 * @returns The validated value.
 */
export declare function getValidatedValue<T extends z.ZodSchema>(namespace: string, valueName: string, valueSchema: T): ValidatedValue<T>;
/**
 * Initialize the client-side data sync.
 *
 * Usage:
 *
 *  1:	Which namespace to use?
 *			- This is the name of the global variable that will be used to store the data.
 *			- It's also the name of the REST API endpoint.
 * 			- For more information, @see getValidatedValue
 * 	2:	Create a Store that's going to sync.
 *  3:	Reference $favoritesEnabled in Svelte component to use it as a regular Svelte Store.
 * 	4:	To disable the favorites feature, you can use a regular svelte store assignment.
 * 		This will update the Svelte Store and POST `false` to `example.com/wp-json/jetpack-favorites/status`
 * ```js
 * 1: 	const client = initializeClient( 'jetpack_favorites' );
 * 2: 	const option = client.createAsyncStore( 'status', z.boolean().default( true ) );
 * 		/// In YourComponent.svelte:
 * 3: 	const favoritesEnabled = option.store;
 * 		$: console.log( $favoritesEnabled );
 * 4:	$favoritesEnabled = false;
 */
export declare function initializeClient(namespace: string): {
    createAsyncStore: <T extends z.ZodType<any, z.ZodTypeDef, any>>(valueName: string, schema: T) => {
        store: import("./types").SyncedWritable<z.TypeOf<T>>;
        pending: import("svelte/store").Readable<boolean>;
        setCallback: (callback: import("./types").SyncedStoreCallback<z.TypeOf<T>>) => void;
        endpoint: API_Endpoint<z.TypeOf<T>>;
    };
    api: API;
};
