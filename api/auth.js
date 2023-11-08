import axios from "axios";
// const baseUrl = "http://192.168.43.119:7000"
import { baseUrl } from "@/utils/commonUrl";
export const loginApi = async (data) => {
    try {
        console.log("L-6, loginApi Data----------->", data);
        const response = await axios(`${baseUrl}/api/v1/modules/user/login`, {
            method: 'POST',
            data: {
                email: data.email,
                password: data.password
            },
        });
        console.log("res login==>",response);
        return response;
    } catch (error) {
        console.log("error in login api--->", error.message);
        return error;
    }
}

