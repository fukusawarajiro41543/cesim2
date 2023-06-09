import Check from "./Check.js";

const blobUriRegex = /^blob:/i;

/**
 * Determines if the specified uri is a blob uri.
 *
 * @function isBlobUri
 *
 * @param {string} uri The uri to test.
 * @returns {boolean} true when the uri is a blob uri; otherwise, false.
 *
 * @private
 */
function isBlobUri(uri) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.string("uri", uri);
  //>>includeEnd('debug');

  return blobUriRegex.test(uri);
}
export default isBlobUri;
