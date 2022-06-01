/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
function getRequestParams(email){
    const API_KEY= process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;

    const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1];

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const data = {
        email_address: email,
        status: "subscribed",
    };

    const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
    const headers = {
        "Content-Type" : "application/json",
        Authorization: `Basic ${base64ApiKey}`,
    };

    return {
        url,
        data,
        headers,
    };

}
export default async (req, res) =>{
    const {email} = req.body;

    if(!email){
        return res.status(400).json({
            error: "Forgot to add your email",
        });
    }

    try{
        const { url, data, headers}= getRequestParams(email);
        const response = await axios.post(url, data, {headers});

        //success
        return res.status(201).json({error: null});
    } catch (error){
        return res.status(400).json({
            error: `Error! Send me an email to mutuavictor801@gmail.com`
        });
    }
};