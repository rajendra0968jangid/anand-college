const register = async (req,res)=>{
    console.log(req.body);
    res.json(req.body);
}

export {register};  