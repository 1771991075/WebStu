let express = require('express');
//引入nodemailer模块用于邮件发送
let nodemailer = require('nodemailer');
//配置邮件
let emailConfig = {
    //主机地址
    host:'smtp.qq.com',
    //端口
    port:25,
    //授权码  允许某个邮箱发送邮件
    auth:{
        user:'1771991075@qq.com',
        pass:'xlhaobqdsifebgfh'
    }
}
//使用配置文件
let postEmail = nodemailer.createTransport(emailConfig);
let web = express();

web.use(express.static('public'));

web.get('/send/email',(req,res)=>{
    //生成验证码
    let str = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    let code = "";
    for(let i=0;i<4;i++){
        let index = Math.floor(Math.random()*str.length);
        let s = str[index];
        code +=s;
    };
    //获取前端传递的参数
    let {email,content} = req.query;
    postEmail.sendMail({
        //从哪个邮箱发送
        from:'1771991075@qq.com',
        //给哪个邮箱发送
        to:email,
        subject:'hello',
        html:`${content}验证码:${code}`
    },()=>{
        res.send({
            code:0,
            msg:'发送成功'
        })
    })
});

web.listen('8080',()=>{
    console.log('服务端已启动...');
})