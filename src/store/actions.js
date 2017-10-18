/**
 * Created by luweibin on 2017/9/8.
 */
import TPajax from "../lib/TPajax";

export default {
    getInfoFromPhp(context,params){
        let url = '/api/train/product/ticketList';
        TPajax(url, 'get', params, function (res) {
            document.write(res);
        })
    }
}