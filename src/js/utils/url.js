
/**
 *
 */
export function buildQueryString(keyValuePairs, encodeValues = false) {
    return Object.keys(keyValuePairs).map((key) => {
        return `${key}=${encodeValues ? encodeURIComponent(keyValuePairs[key]) : keyValuePairs[key]}`;
    }).join('&');
}


/**
 *
 */
export function buildQueryUrl(url, keyValuePairs, encodeValues = false) {
    const queryString = buildQueryString(keyValuePairs, encodeValues);
    return url + (queryString ? `?${queryString}` : '');
}
