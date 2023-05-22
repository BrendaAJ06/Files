import express from 'express'
import cookieParser from 'cookie-parser'

const app=express()

app.use(cookieParser())

//Run the command npm i nodemon, npm i express cookie-parser, npm install express
//npm run dev

app.get('/', (req,res)=>{
    res.send('HElloWorld 3!')
})

let string = "contraseña_admin";


// Creating the buffer object with utf8 encoding
let bufferObj = Buffer.from(string, "utf8");


// Encoding into base64
let base64String = bufferObj.toString("base64");


app.get('/setcookie', (req,res)=>{
    res.cookie('admin',base64String,{
        httpOnly:true,
        secure:true,
        maxAge:1000
    });
    res.cookie('usuario','Y29udHJhc2XDsWF1c3Vhcmlv',{
        httpOnly:true,
        secure:true,
        //maxAge:1000
    });
    res.cookie('Alberto','aW50ZW50YWxvIGRlIG51ZXZv',{
        httpOnly:true,
        secure:true,
        //maxAge:1000
    });
    res.cookie('Lopez','Y29udHJhc2VuYXVzdWFyaW8=',{
        httpOnly:true,
        secure:true,
        //maxAge:1000
    });
    res.cookie('Juarez','MTIzNDU2',{
        httpOnly:true,
        secure:true,
        //maxAge:1000
    });
    res.cookie('Perez','YWRtaW41NDMyMQ==',{
        httpOnly:true,
        secure:true,
        //maxAge:1000
    });
    res.cookie('Garcia','VGVtcG9yYWwyMDIw',{
        httpOnly:true,
        secure:true,
        //maxAge:1000
    });
    res.cookie('Daniel','6ff1c49c6c20eeff40d0bbc179bfc7c6a6459463bbd2c9b1bd5075beddadc644',{
        httpOnly:true,
        secure:true,
        //maxAge:1000
    });
    res.cookie('Gustavo','2a5b53cd186d4d83253b13374c8adbdd37e0cabb88e62ab98442f081e18977b9',{
        httpOnly:true,
        secure:true,
        //maxAge:1000
    });
    res.cookie('Reyes','YzIyOWRkMzE0YWU5MjE0Nzk5MmMzNDUwM2NmYzBmZmIwNzJjMzZkNzNhMmYxNTVlZTNmZTk4NzBjMGEzZWYxMg==',{
        httpOnly:true,
        secure:true,
        //maxAge:1000
    });
    res.cookie('Clemente','91a507e662508cf9fa960d6258667271f2a50ed2c0ea7422c7fe72c1559494a6',{
        httpOnly:true,
        secure:true,
        //maxAge:1000
    });
    res.cookie('Arse','MmNkMDMzNmFiYjVlNDlkZWQ2M2UyZGNhZmUxYWY1MmJiNzFkMDAzYTMyNGRhZTgyNTNiN2FhNzNiNjhhYmVlMw==',{
        httpOnly:true,
        secure:true,
        //maxAge:1000
    });
    res.cookie('Nuñez','cGFzc3dvcmQxMjM0NQ==',{
        httpOnly:true,
        secure:true,
        //maxAge:1000
    });
    res.cookie('Gaytan','MjNwYXNzd29yZDEy',{
        httpOnly:true,
        secure:true,
        //maxAge:1000
    });
    res.cookie('P1RoRT9aMGQxNGs/','dGhpc2lzem9kaWFjc3BlYWtpbmc=',{
        httpOnly:true,
        secure:true,
        //maxAge:1000
    });
    res.send('Constraseñas de Dulceria El Emperador')
})

app.listen(3000)
console.log(`Server running on port 3000`)