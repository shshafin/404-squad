// src/lib/utils.js

/**
 * Joins class names conditionally.
 * @param {...(string|object)} classes - Classes to join, can be a string or an object where the keys are classes and values are booleans indicating if they should be included.
 * @returns {string} - The joined class names.
 */
export function cn(...classes) {
  return classes
    .filter(Boolean) // Remove any falsy values
    .join(" "); // Join with space
}
