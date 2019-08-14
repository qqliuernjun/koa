/**
 *@author       刘文军
 *@date         2019/8/14 15:15
 *@Copyright    天源迪科信息技术股份有限公司
 *@Description
 */
const path=require("path");

module.exports={
    DB_HOST:"localhost",
    DB_USER:"root",
    DB_PASS:"123456",
    DB_NAME:"cpts",

    PORT:8080,

    HTTP_ROOT:"http://localhost:8080",
    UPLOAD_DIR:path.resolve(__dirname,'./static/upload')

};







