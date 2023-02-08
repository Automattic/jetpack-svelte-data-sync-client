import type { SyncedStoreInterface, SyncedStoreCallback } from './types';
export declare class SyncedStore<T> {
    private store;
    private pending;
    private pendingValue;
    private requestLock;
    private failedToSync;
    private updateCallback?;
    constructor(initialValue?: T);
    private createStore;
    getPublicInterface(): SyncedStoreInterface<T>;
    setCallback(callback: SyncedStoreCallback<T>): void;
    private synchronize;
    private debouncedSynchronize;
    private createPendingStore;
    private equals;
}
