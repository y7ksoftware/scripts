

/**
 * Converts a given string to "Title format". Meaning the first letter is uppercase and
 * everything else lowercase.
 *
 * "heading" -> "Heading"
 * "a heading" -> "A heading"
 * "a Heading" -> "A heading"
 *
 */
export function titleCase(str) {
    return str.split(' ').map(function(val){
        return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
    }).join(' ');
}


/**
 * Converts kebab case to camel case. First letter stays lowercase.
 *
 * "component-thing" -> "componentThing"
 * "a-kebab-word" -> "aKebabWord"
 */
export function kebabToCamelCase(str) {
    return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}


/**
 * Takes a string of words and splits it in half. Returns an array with two strings,
 * the first half of the sentence and the second half.
 */
export function splitSentence(sentence) {
    let middle = Math.floor(sentence.length / 2);
    const before = sentence.lastIndexOf(' ', middle);
    const after = sentence.indexOf(' ', middle + 1);

    if (before == -1 || (after != -1 && middle - before >= after - middle)) {
        middle = after;
    } else {
        middle = before;
    }

    const s1 = sentence.substr(0, middle);
    const s2 = sentence.substr(middle + 1);

    return [s1, s2];
}
