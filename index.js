import chalk from "chalk"
import fs from "fs"

function trataErro(erro){
    throw new Error(chalk.red(erro.code, "não há arquivo no caminho"))
}


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
// }

pegaArquivo("./arquivo/text.md")