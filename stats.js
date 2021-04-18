const stats = (array) => {
    return new Promise ((resolve, reject) => {
        let brokenLinks = [];
        let active = [];
        let allResults = [];
        let countAllResults = {};

        array.forEach((element) => {
            allResults.push(element.href);
            if(element.access === 'ok') {
                active.push(element);
            }   else if (element.access === 'fail') {
                    brokenLinks.push(element);
                }
        });
        const dataArr = new Set(allResults);
        let uniqueLinks = [...dataArr];
           
        countAllResults = {
        total: allResults.length,
        unique: uniqueLinks.length,
        active: active.length,
        broken: brokenLinks.length,
        }   
        resolve(countAllResults);
    })
};
module.exports.stats = stats;