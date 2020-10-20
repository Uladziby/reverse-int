module.exports = function reverse (n) {
    if(n>=0)
    {
    str = String(n)  
    return Number(str.split("").reverse().join(""))
    }
    else {
    str = String(n*(-1))
    return Number(str.split("").reverse().join(""))
    }
}
