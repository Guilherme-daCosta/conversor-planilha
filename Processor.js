class Processor {
    static Process(data) {
        let splitArr = data.split("\r\n");
        let rows = [];
        
        splitArr.forEach(row => {
            if (row) {
            let arr = row.split(";");
            rows.push(arr);
            }
        });
        return rows;
    };
};

module.exports = Processor;