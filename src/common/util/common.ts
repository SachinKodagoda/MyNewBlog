// Get word count of a string
export const wordCount = (word: string): number => word.trim().split(/\s+/g).length;

export const readTime = (numberOfWords: number): string => (numberOfWords / 100 + 1).toFixed(0);
