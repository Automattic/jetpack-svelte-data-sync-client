export declare class ApiError extends Error {
    location: string;
    status: number | 'failed_to_sync' | 'json_parse_error' | 'json_empty' | 'schema_error';
    message: string;
    name: string;
    constructor(location: string, status: number | 'failed_to_sync' | 'json_parse_error' | 'json_empty' | 'schema_error', message: string);
}
