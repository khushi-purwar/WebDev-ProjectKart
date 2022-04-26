const express = require("express");
const app =express();
const fileUpload = require("express-fileupload");
const cors = require("cors");
const os = require("os")
const compress = require("compress-to-zip");
const del = require("del");


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use("/fileupload",fileUpload({
    debug:true,
    safeFileNames:true,
    createParentPath:true,
    preserveExtension:true
}))


app.post("/fileupload",(req,res)=>{

    console.log(req.files);
    const file = req.files.uFile;
    const path = os.tmpdir()+"/zipper/"+file.name;
    file.mv(path,(err)=>{
        if(err) return res.json(err)

        
    })

    console.log("processing....");
    compress.compressSingleFolder(os.tmpdir()+"/zipper/",os.tmpdir()+"/zipper/"+file.name+".zip",(err)=>{
        if(err) return console.log(err);

        console.log("processing done!");
        return res.status(200).json({status:"success"})
    })
    
})

app.get("/downloadfile", (req,res)=>{
   console.log(req.query);
   const filename =  req.query.file ;
  
    res.download(os.tmpdir()+"/zipper/"+filename+".zip",async(err)=>{
        if(err) return console.log(err);

       return Promise.resolve(setTimeout(async()=>{
          await  del(os.tmpdir()+"/zipper",{force:true})
        },60000)).then(()=> console.log("file deleted"))

    })

})


const server = app.listen(3005,()=>console.log("server is running..."));
server.on("close",async()=>{
    console.log("server closed");
   
})
