/**
 * Updates a parameter in a URL querystring. If the parameter is not yet there, it gets added. If it is already there,
 * the value gets updated. For example if you have an url: yourdomain.dev?searchFilter=asd&id=17, you can use
 * updateQueryString('searchFilter', 'xyz', window.location.href); to replace the search filter. The other parameters stay untouched
 *
 * @param  {string} key   The parameter name to update or add
 * @param  {mixed}  value The new value
 * @param  {string} url   The whole url, e.g.: window.location.href
 * @return {string}       The updated url stirng
 */
export function updateQueryString(key, value, url) {
    const re = new RegExp(`([?&])${key}=.*?(&|#|$)(.*)`, 'gi');
    let urlVal = url || window.location.href;
    let hash;

    if (re.test(urlVal)) {
        if (typeof value !== 'undefined' && value !== null) {
            return urlVal.replace(re, `$1${key}=${value}$2$3`);
        }

        hash = urlVal.split('#');
        urlVal = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');

        if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
            urlVal += `#${hash[1]}`;
        }
        return urlVal;
    } else if (typeof value !== 'undefined' && value !== null) {
        const separator = urlVal.indexOf('?') !== -1 ? '&' : '?';
        hash = urlVal.split('#');
        urlVal = `${hash[0]}${separator}${key}=${value}`;

        if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
            urlVal += `#${hash[1]}`;
        }
        return urlVal;
    }

    return urlVal;
}


/**
 * Gets the hash params of the url and returns them as an object with attributes.
 * For example the url 'yourdomain.dev#param=xy&id=7' will return an object with
 * two attributes called array.parm and array.id.
 *
 * @return {} object with all hash params
 */
export function getParsedHashParams() {
    const hash = window.location.hash.substring(1);
    const params = {};

    const vars = hash.split('&');
    for (let i = 0; i < vars.length; i++) {
        if (vars[i]) {
            const pair = vars[i].split('=');
            params[pair[0]] = pair[1];
        }
    }

    return params;
}
