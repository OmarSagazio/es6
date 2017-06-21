const forEach = (array, fn) => {

    for (const value of array) {
        fn(value);
    }

}

const map = (array, fn) => {
    let results = [];
    for (const value of array) {
        results.push(fn(value));
    }

    return results;
}

export default forEach;
