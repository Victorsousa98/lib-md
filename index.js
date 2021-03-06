import chalk from "chalk"
import fs from "fs"

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null) {
      arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
  }
  
  function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
  }
  
  export default async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      return extraiLinks(texto);
    } catch(erro) {
      trataErro(erro);
    }
  }
  
  //pegaArquivo('./arquivo/text.md');


// function pegaArquivo(arquivo){
//     fs.promises.readFile(arquivo, "utf-8")
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch((erro) => trataErro(erro))
// }


// function pegaArquivo(arquivo){
//     const encoding = 'utf-8'
//     fs.readFile(arquivo, encoding, (erro,texto) => {
//         if(erro){
//             trataErro(erro)
//         }else{
//             console.log(chalk.green(texto))
//         }
//     })
// 