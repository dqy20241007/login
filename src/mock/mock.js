import {mock} from "mockjs";

let  data=mock(/.*?\/users/,'get',{
    "data|3":[
        {
            "id|+1":1,
            "username":"@cname",
            "password":123456,

        }
    ],
    "msg":"成功"
})
console.log(data)