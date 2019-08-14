/**
 *@author       刘文军
 *@date         2019/8/14 15:43
 *@Copyright    天源迪科信息技术股份有限公司
 *@Description
 */
const fs=require("fs");
const crypto=require("crypto");
module.exports={
  md5(data){
      let obj=crypto.createHash('md5');
      obj.update(data);
      return obj.digest('hex');
  }
};
