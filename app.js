let Reader = require('./Reader');
let Writer = require('./Writer');
let Processor = require('./Processor');
let HtmlParser = require('./HtmlParser');
let Table = require('./Table');
let PDFWriter = require('./PDFWriter');

let leitor = new Reader();
let escritor = new Writer();

async function main() {
    let dados = await leitor.Read('./users.csv');
    let dadosProcessados = Processor.Process(dados);
    let usuarios = new Table(dadosProcessados);
    let html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html", html);
    PDFWriter.WritePDF(Date.now() + ".pdf", html);
};

main();