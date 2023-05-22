import { post } from "@utils/request";

export const registerUser = (params) => {
    return post('/api/accounts/signup',params)
}