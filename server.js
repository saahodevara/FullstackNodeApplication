import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { getHandler, newsHandler, postHandler } from './handlers/routeHandlers.js'
const PORT = 8001
const __dirname = import.meta.dirname
//console.log('CWD',process.cwd())

const server = http.createServer(async(req,res) =>{
   if(req.url === '/api')
   {
      if(req.method === 'GET')
      {
         return await getHandler(res)
      }
      else if(req.method === 'POST')
      {
         postHandler(req,res)
      }
   }
   else if(req.url === "/api/news")
   {
      return await newsHandler(req,res)
   }
   else if(!req.url.startsWith('/api'))
   {
      await serveStatic(req,res, __dirname)
   }
   
   
    
})

server.listen(PORT,()=>console.log('server created'))