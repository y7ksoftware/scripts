
/**
 *
 */
export function buildQueryUrl(url, keyValuePairs) {
    const queryString = Object.keys(keyValuePairs).map(key => `${key}=${keyValuePairs[key]}`).join('&');
    return url + (queryString ? `?${queryString}` : '');
}
