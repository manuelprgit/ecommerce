const formatter = Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
}).format;
 
export {
    formatter,
}