export default async (req,res)=>{
    const {name,email,message} = req.query;
    try{
        const TOKEN = process.env.BOT_TOKEN;
        const CHAT_ID = process.env.BOT_CHAT_ID;
        const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
        const text = `Site portfolio\n\nNom : ${name}\n\nEmail : ${email}\n\nMessage : ${message}`;
        const response = await fetch(URL,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({chat_id:CHAT_ID,text:text})
        }
    );
    if (!response.ok){
        return res.status(500).json(false);
    }
    return res.status(200).json(true);
    }
    catch(error){
        res.status(500).json(false);
    }
};