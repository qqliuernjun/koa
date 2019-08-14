/**
 *@author       刘文军
 *@date         2019/8/14 15:15
 *@Copyright    天源迪科信息技术股份有限公司
 *@Description
 */
const fs=require("fs");

const key_length=1024;
const key_count=2048;
const chars="ASDCXZFRQWRTRYqawsedrftgbvcxzyhn,lopVCMBNJHKYUI;.mjuikolp/'[]!@~#$%^&*()_+";


let arr=[];
for(let i=0;i<key_length;i++){
    let key="";
    for(let j=0;j<key_count;j++){
        key+=chars[Math.floor(Math.random()*chars.length)]
    }
    arr.push(key);
}
console.log(arr);
fs.writeFileSync('.key', arr.join('\n'));
console.log('key已经被生成');








