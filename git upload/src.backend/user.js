const mysql = require("mysql");
const Promise = require("bluebird");
const { query } = require("express");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"MYCHATAPP",
};



const selectAllUser=async()=>{
    const connection= mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("server started");
    let sql=`select * from MESSAGE`;
    const list = await connection.queryAsync(sql);
    console.log(list);
    await connection.endAsync();
    
};

const addUser=async (user)=>{
    const connection=mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql=`insert into MESSAGE (msg) values(?)`;
    connection.queryAsync(sql,[user.msg]);
    connection.endAsync();

}
selectAllUser();
// const user={
//     msg:"hii, how are u",
// }
// addUser(user);
module.exports={selectAllUser,addUser};
// export default user;