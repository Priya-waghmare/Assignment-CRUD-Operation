const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyparser = require('body-parser')
const jsonparser = bodyparser.json()
const cors=require('cors')
app.use(cors())

mongoose.connect('mongodb+srv://priya:1234@cluster0.pedotg2.mongodb.net/Product?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
}).then(
    ()=>{console.log('mongodb atlas connected')}
)


const prod_det = require('./model/data.js')


// //app.get to read the data
app.get('/prodetails',(req, res) => {
    wd.find({}).then((data) => {
         res.json(data);
     })
 })
app.get('/products/:cat',(req,res)=>{
    prod_det.find({cat_name:req.params.cat}).then(
        (data)=>{ res.json(data);}
    )
})
app.get('/cat',(req,res)=>{
    prod_det.distinct('cat_name').then(
        (data)=>{ res.json(data);}
    )
})


// //app.post to add new data
app.post('/addprod',jsonparser,(req,res)=>{
        const newprod= new prod_det({
            _id: new mongoose.Types.ObjectId(),
            cat_id:req.body.cat_id,
            cat_name:req.body.cat_name,
            prod_id: req.body.id,
            prod_name: req.body.emp_nm,
            
    })
    newprod.save().then((msg)=>{res.json(msg)}).catch(
        (err)=>{console.log(err)}
    )
})


// //delete data//
app.delete('/delprod/:id',(req,res)=>{
    prod_det.deleteOne(
        {_id:req.params.id}).then((info)=>{res.json(info)}).catch((err)=>{res.json(err)})
})


// //Update Data//
app.put('/uptdprod/:id',jsonparser,(req,res)=>{
    prod_det.updateOne({_id:req.params.id},
        { $set:{ 
            cat_id:req.body.cat_id,
            cat_name:req.body.cat_name,
            prod_id:req.body.prod_id,
            prod_name:req.body.prod_name,
            }

        }).then((info)=>{res.json(info)}).catch((err)=>{res.json(err)})
})




app.listen(3300,()=>{console.log('Server Running on 3300')})