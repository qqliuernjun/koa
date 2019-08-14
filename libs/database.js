/**
 *@author       刘文军
 *@date         2019/8/14 15:43
 *@Copyright    天源迪科信息技术股份有限公司
 *@Description
 */
const mysql=require("mysql");
const co=require("co-mysql");
const {DB_HOST,DB_USER,DB_PASS,DB_NAME,PORT,HTTP_ROOT,UPLOAD_DIR}=require("../config");

let mysqll=mysql.createPool({
    host     : DB_HOST,
    user     : DB_USER,
    password : DB_PASS,
    database : DB_NAME
});

module.exports=co(mysqll);






