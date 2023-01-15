module.exports = function reverse (n) {
    n = Math.abs(n) + "";
    let breakStr = n.split("");
    let res = breakStr.reverse();
    let result = res.join('');
    return result;
};
