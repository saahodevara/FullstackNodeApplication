export async function parseJSONBody(req)
{
    let body = ''
    for await(let chunk of req)
    {
        body += chunk
    }
    try{
        return JSON.parse(body)        
    }
    catch(err){
    console.log(`Invalid JSON : ${err}`)
    }
}