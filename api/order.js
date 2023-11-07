import axios from "axios";
import { baseUrl } from "@/utils/commonUrl";
// axios.interceptors.request.use(config => {
// 	config.headers['auth-token'] = "fasfa";
// 	return config;
// });
const getToken = async () => {
  return new Promise(async (resolve, reject) => {
    let token = await localStorage.getItem("token");
    console.log("token in getToken", typeof token);
    resolve(token);
  })
}
export const submitOrderApi = async (data) => {
  try {
    const token = await getToken();
    console.log("inside the submit order api--->", data);
    console.log("token in sumbit api---->", token);
    const phoneNumber = data?.address?.phoneNumber;
    const res = await axios(`${baseUrl}/api/v1/modules/user/order`, {
      method: "POST",
      data: {
        order: data?.order,
        address: data?.address,
        phoneNumber: phoneNumber,
      },
      headers: {
        'content-type': 'application/json',
        "auth-token": token,
      },
    });
    if (res?.status == 201) {
      delete data?.address["phoneNumber"];
    }
    return res;
  } catch (err) {
    console.log("error in submitOrderApi api--->", err.message);
    return err;
  }
};
