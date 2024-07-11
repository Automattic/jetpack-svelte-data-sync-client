/// <reference types="svelte" />
import { z } from 'zod';
import { DataSync } from './DataSync.js';
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
    /**
     * Create a new Synced Store.
     * @see createAsyncStore
     */
    createAsyncStore: <Schema extends z.ZodType<any, z.ZodTypeDef, any>, Value extends z.TypeOf<Schema>>(valueName: string, schema: Schema, opts?: {
        hideFromGlobalErrors?: boolean;
    }) => {
        refresh: () => Promise<z.TypeOf<Schema>>;
        store: import("./types.js").SyncedWritable<Value>;
        pending: import("svelte/store").Readable<boolean>;
        errors: import("svelte/store").Readable<import("./types.js").SyncedStoreError<Value>[]>;
        setSyncAction: (callback: import("./types.js").SyncedStoreCallback<Value>) => void;
        endpoint: DataSync<Schema, z.TypeOf<Schema>>;
    };
    /**
     * Each client has its own error store.
     * This takes all error stores and joins them into one.
     * Make sure that you run `globalErrorStore.subscribe()` after all the stores are created.
     */
    globalErrorStore: () => import("svelte/store").Readable<unknown[]>;
};
