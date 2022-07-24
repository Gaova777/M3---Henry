var express = require('express')
var app = express();


//-----------------------metodos---------------------------
//--------------------get---------------
app.get('/', (req,res)=>{
    console.log('Estoy en /')
    res.send('estoy en /')// cuando se levante me mostrará esto 
})

app.get('/html', (req, res)=>{
    console.log('estoy en html')
    res.send('<h1>Estoy en /html</h>')
})

app.get('/obj', (req,res)=>{
    console.log('Estoy en obj')
    const obj = {nombre:'Fede', apellido:'gomez'}
    res.json(obj)//tambien se puede .send
})
app.get('status', (req,res)=>{
    console.log('Estoy en /status')
    res.sendStatus(404)
})
app.get('/msg/status', (req,res)=>{
    console.log('Estoy en /msg/status')
    res.status(400).json({msg: 'sorry bro' })//una genialidad que puedo setear el estatus coude y adicionalmente enviar algun tipo de información

})
app.get('/user/:name/:id',(req,res)=>{
    console.log('SOY PARAMS', req.params)//el params me señala este objetito que voy armando con las propiedades que hay despues de los dos puntos y si quiero acceder al name o al id, solo es cuestion de escribir su propiedad---> req.params.id para acceder al id
    res.json({user: req.params.name})//el params
    //res.send(req.params.name)
    
    //accedo con el :variable, a lo que escribieron en el lado del front-end

})
app.get('',(res, req)=>{

})
app.listen(3000)