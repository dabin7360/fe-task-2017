/**
 * Created by luweibin on 2017/9/8.
 */
export default (url,method,param,func)=>{
    let xmlhttp = new XMLHttpRequest();
    let requestMeghod = method.toUpperCase();
    let requestUrl = url;

    if(requestMeghod == 'GET'){
        let requestParam = JSON.stringify(param);
        requestUrl += '?d=' + requestParam;
    }

    xmlhttp.open(requestMeghod, requestUrl, true);
    xmlhttp.onreadystatechange = ()=>{
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            func(xmlhttp.responseText);
        }
    }
    if(requestMeghod == 'POST'){
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        let postParam = '';
        for(var key in param){
            postParam += key + '=' + param[key] + '&';
        }
        postParam.substr(0,postParam.length-1);
        xmlhttp.send(postParam);
    }else{
        xmlhttp.send();
    }


}