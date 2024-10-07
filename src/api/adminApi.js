import axios from "axios";
import instance from "../utils/request";
import Item from "antd/lib/list/Item";

// 登录
export const $login = async (params) => {
    let { data } = await instance.get('/logins', { params })
    console.log(data);
    let datas = data.data
    let a = ''
    for (let Item of datas) {
        if (Item.username == params.username) {
            if (Item.password == params.password) {
                return "登录成功"

            } else {
                return "密码错误"

            }

    }
}
    return "用户不存在"


}