const {mysqldb}=require('../connection')

module.exports = {
    getUser: (req,res)=> {
        mysqldb.query(`select * from users`,(err,result)=>{
            if (err) res.status(500).send(err)
            res.status(200).send({datauser:result})
        })
    },
    postUser: (req, res)=> {
        var sql = 'INSERT INTO users SET ?';
       
        console.log(req.body)
        
        mysqldb.query(sql, req.body, (err, results) => {
            if(err) {
                console.log(err.message)
                return res.status(500).json({ message: "There's an error on the server. ", error: err.message });
            }
            
            console.log(results);
            mysqldb.query(`select * from users`,(err,result4)=>{
                if (err) res.status(500).send(err)
                res.status(200).send({datauser:result4})
            })   
        }) 
    }

}


