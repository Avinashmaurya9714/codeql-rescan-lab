function normalizeDateFormat(format) {
    return format.replace(/YYYY/g, "YYYY");
}

const result = normalizeDateFormat("DD/MM/YYYY");
console.log(result);
