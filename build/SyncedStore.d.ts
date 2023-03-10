import { SyncedStoreInterface } from './types';
export declare class SyncedStore<T> {
    private store;
    private errorStore;
    private pending;
    private updateCallback?;
    private abortController;
    constructor(initialValue?: T);
    private createStore;
    /**
     * A callback that will synchronize the store in some way.
     * By default, this is set to endpoint.POST in the client initializer
     */
    private setCallback;
    /**
     * Attempt to synchronize the store with the API.
     */
    private synchronize;
    /**
     * A debounced version of synchronize.
     * This is used to prevent the API from being spammed with requests.
     * It also prevents the store from updating when the API returns an error.
     */
    private abortableSynchronize;
    private createPendingStore;
    private equals;
    /**
     * All of the class methods in this class are private.
     * Use this method to get the public interface of this class,
     * exposing as little as possible.
     */
    getPublicInterface(): SyncedStoreInterface<T>;
}
