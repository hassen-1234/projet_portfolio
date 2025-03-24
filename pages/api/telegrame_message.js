export default async (req,res)=>{
    const {name,email,message} = req.query;
    const TOKEN = "7402127247:AAHeaOLZzM2jA3vI1E6cbVpX9YzH0L0dhW0";
    const CHAT_ID = "6481199804";
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const text = `Site portfolio\n\nNom : ${name}\n\nEmail : ${email}\n\nMessage : ${message}`;
    try{
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