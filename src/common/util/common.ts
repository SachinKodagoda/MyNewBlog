// Get word count of a string
export const wordCount = (word: string): number => word.trim().split(/\s+/g).length;

export const readTime = (numberOfWords: number): string => (numberOfWords / 100 + 1).toFixed(0);

export const randomFloat = (min: number, max: number) => Math.random() * (max - min) + min;

export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})` : null;
};

// function rgbToHex(r, g, b) {
//   return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
// }
