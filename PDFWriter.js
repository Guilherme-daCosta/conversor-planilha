let pdf = require('html-pdf');

class WritePDF {
    static WritePDF(filename, html) {
        pdf.create(html, {}).toFile(filename, (err) => {});
    };
};

module.exports = WritePDF;