const formatRanges = (arr) => {
    const result = [];
    let temp = [];

    arr.forEach((value, index) => {

        if (temp.length === 0 || value === arr[index - 1] + 1) {
            temp.push(value)
        } else {
            result.push([...temp])
            temp = [value]
        }
    });

    if (temp.length >0) result.push([...temp])


    return result;
};


console.log(formatRanges([0, 1, 2, 4, 5, 8]));
