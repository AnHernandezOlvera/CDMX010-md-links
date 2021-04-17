const stats = (array) => {
    let brokenLinks = [];
    let uniqueLinks = [];
    let allResults = [];
    let countAllResults = {};
    array.forEach((element) => {
        allResults.push(element);
        if(element.access === 'ok') {
            uniqueLinks.push(element);
        } else if (element.access === 'fail') {
            brokenLinks.push(element);
        }
    });
    countAllResults = {
        total: allResults.length,
        unique: uniqueLinks.length,
        broken: brokenLinks.length,
    }
    return countAllResults;
};