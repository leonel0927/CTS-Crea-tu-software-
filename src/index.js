 import http from 'node:http'
 const PORT = process.env.PORT
 function bloqueante(milisegundos){
   var tiempo=Date.now()
   while (Date.now() - tiempo<milisegundos) {
      
   }
 }
 function nobloqueante(milisegundos,res){
 setTimeout(() =>{
      res.writeHead(200,{'Content-Type': 'application/json'});
      res.end(JSON.stringify({message:'Servidor activado no bloqueando'}));
   },milisegundos)
 }
 const server = http.createServer((req,res) => {
   const {url}=req;
   if (url==="/bloqueante") {
      bloqueante(5000)
      res.writeHead(200,{'Content-Type': 'application/json'});
      res.end(JSON.stringify({message:'Servidor activado bloqueante'}));
   }else if (url==="/asincrono") {
      nobloqueante(5000,res)
   }else{
      res.writeHead(200,{'Content-Type': 'application/json'});
      res.end(JSON.stringify({message:'Servidor activado'}));
   }
});
 server.listen(PORT,() =>{
    console.log("Servidor escuchando en el puerto: "+PORT)
 });