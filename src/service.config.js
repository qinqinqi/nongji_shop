const MOCKURL = "http://www.ceshi.com/";//mock的地址
const SERVERURL = "http://localhost:3000/";//真实的地址

const URL = {
    getVarietyItem: MOCKURL + 'getVarietyItem',
    registUser: SERVERURL + 'user/registUser',
    loginUser: SERVERURL + 'user/loginUser',
    getTypes: SERVERURL + 'type/getTypes',
    getProductsByType: SERVERURL + 'product/getProductsByType',
    getDetail: SERVERURL + 'product/getDetail',
    addCart: SERVERURL + 'cart/addCart',
    getCart: SERVERURL + 'cart/getCart',
}

export default URL;