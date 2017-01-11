// 数据库连接
var mysql=require("mysql");  
var pool = mysql.createPool({  
	host: 'localhost',  
	user: 'root',  
	password: '198923',  
	database: 'basketball'
});
var connection=function(sql,callback){  
	pool.getConnection(function(err,conn){  
		if(err){  
			callback(err,null,null);  
		}else{  
			conn.query(sql,function(err,rows,fields){  
                //释放连接  
                conn.release();  
                //事件驱动回调  
                callback(err,rows,fields);  
            });  
		}  
	});
};  

module.exports=connection;  