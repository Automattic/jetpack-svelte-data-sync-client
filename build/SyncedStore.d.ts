import type { SyncedStoreInterface, SyncedStoreCallback } from './types';
export declare class SyncedStore<T> {
    private store;
    private pending;
    private failedToSync;
    private updateCallback?;
    private abortController;
    constructor(initialValue?: T);
    private createStore;
    getPublicInterface(): SyncedStoreInterface<T>;
    setCallback(callback: SyncedStoreCallback<T>): void;
    private synchronize;
    private abortableSynchronize;
    private createPendingStore;
    private equals;
}
