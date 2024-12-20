const http=require("http");
const mySever=http.createServer((req ,res)=>{
    console.log("new req rec..");
    res.end("Hello Devanshu");
});
mySever.listen(8000,()=>console.log("Sever Started"));
