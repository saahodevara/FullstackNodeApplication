import http from 'node:http'
import fs from 'node:fs/promises'
import path from "node:path"

const PORT = 8001
const __dirname = import.meta.dirname
//console.log('CWD',process.cwd())

const server = http.createServer(async(req,res) =>{
   let pathResource = path.join(__dirname,'public','index.html')
    //const content = fs.readFileSync(pathResource,'utf-8')
    const content = await fs.readFile(pathResource,'utf-8')
        res.statusCode = 200
        res.setHeader('Content-Type','text/html')
        res.end(content)

})

server.listen(PORT,()=>console.log('server created'))