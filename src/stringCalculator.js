/**
 * String addition method
 * @param {*} value 
 * @returns 
 */
export const add = (value) => {
  if (!value) return 0;

  let delimiter = /,|\n/;

  if (value.startsWith("//")) {
    const match = value.match(/^\/\/(\[.*\])\n(.*)/);
    if (match) {
      delimiter = new RegExp(
        match[1]
          .slice(1, -1) 
          .split("][") 
          .map((delim) => delim.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")) 
          .join("|")
      );
      value = match[2]; 
    } else {
      const [_, customDelimiter, rest] = value.match(/^\/\/(.+)\n(.*)/);
      delimiter = new RegExp(
        customDelimiter.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
      );
      value = rest;
    }
  }

  const nums = value.split(delimiter).map(Number);
  const negatives = nums.filter((n) => n < 0);

  if (negatives.length) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return nums
    .filter((num) => num <= 1000)
    .reduce((sum, num) => sum + num, 0);
};
