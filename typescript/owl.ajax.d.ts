declare module owl.ajax {
    /**
     * Makes request to the server
     */
    export function request(settings: RequestSettings): Promise;

    /**
     * Sets a header for each request
     */
    export function setHeader(key: string, value: string): void;

    /**
     * Removes a header
     */
    export function removeHeader(key: string): void;

    /**
     * Default event error listener
     */
    export function error(xhr: XMLHttpRequest): void;

    /**
     * Makes query string from data
     */
    export function toQueryString(data: Object): string;

    /**
     * Stringify an object
     */
    export function toJsonString(data: Object): string;
}