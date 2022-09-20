// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
const currencyFormatter = new Intl.NumberFormat('en-IN');

export const getFormattedCurrency = (amount: number) => currencyFormatter.format(amount);
