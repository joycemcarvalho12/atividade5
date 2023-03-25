import  express from "express"
const app = express()
const port = 3000

//const array = [10,5,8]
//array.forEach(function(item) => console.log(item))

//pp.get('/',(req,res) =>  {
  // res.send("Olá Mundo 2!")
//})

const pessoa1 = {
    nome: "Billie eilish",
    email: "billeeilish@email.com",
    idade: 21,
    hobbies: ["cantora","commpositora"]
}
const pessoa2 = {
    nome: "nome2",
    email: "email2@email.com",
    idade: 15,
    hobbies: ["teste1","teste2"]
}
const pessoa3 = {
    nome: "nome3",
    email: "email3@email.com",
    idade: 25,
    hobbies: ["teste1","teste2"]
}


app.get ('/pessoa',(req,res)=>{
    const pessoaJson =JSON.stringify(pessoa1)
    res.setHeader("Contet-type","appication/json")
    res.send(pessoaJson)
})

app.get ('/pessoas',(req,res)=>{
    const lista = [pessoa1,pessoa2,pessoa3]
    const pessoasJson =JSON.stringify(lista)
    res.setHeader("Contet-type","appication/json")
    res.send(pessoasJson)
})



//let soma = 0
//app.get('/soma', (req,res)=>{
//    soma++
//   res.send(JSON.stringify(soma))
//})

 

app.listen(port, ()=>{
    console.log('App executando na porta'+port)
})