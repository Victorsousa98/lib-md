import chalk from "chalk"
import fs from "fs"

function pegaArquivo(arquivo){
    
    fs.readFile(arquivo, "utf-8", (_,texto) => {
        console.log(chalk.green(texto))
    })
}

pegaArquivo("./arquivo/text.md")