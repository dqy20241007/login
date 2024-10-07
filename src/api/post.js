import axios from "axios";
import instance from "../utils/request";
import Item from "antd/lib/list/Item";

// 登录
export const $post = async (params) => {
//     const fs=require('fs');
//     fs.writeFile('../../db.json',params,(a)=>{
// console(a)
//     })
    let {data} = await instance.get('/logins', { params })
    let arrs = data.data;
    arrs.push(params);
    
    let post = await instance.post('/logins', { ...data })
    console.log(post);
    return post
    // data.map((Item) => {

    //     console.log(Item);
    //     if (Item.username == params.username) {
    //         if (Item.password == params.password) {
    //             a = "登录成功" 
    //         } else {
    //             a = "密码错误" 
    //         }
    //     } else {
    //         a = "用户不存在" 
    //     }
    // })
    // return a


}