import $api from "@src/app/http";

export default class AdvertisementApi{

    static async getAdvertisement(){
        return $api.get('/category/getCategory')
    }
}