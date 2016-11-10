/**
 * Created by zhaojunlike on 2016/10/17.
 */
;(function (window, document) {
    //手写跨域Http请求
    var CrossHttp = function (url, params, callback) {
        var cbFuncKet = 'callback';
        if (undefined !== params['callback']) {
            cbFuncKet = params['callback'];
            delete params['callback'];
        }

        var cbFuncName = 'callback_func_' + Math.random().toString().replace('.', '');
        //解析URL callback
        window[cbFuncName] = callback;
        var queryString = url.indexOf('?') == -1 ? '?' : '';
        for (var key in params) {
            queryString += ( key + "=" + params[key] + "&");
        }
        queryString += (cbFuncKet + '=' + cbFuncName);
        var scriptElement = document.createElement('script');
        scriptElement.src = ( url + queryString);
        document.body.appendChild(scriptElement);
    };
    window.$CrossHttp = CrossHttp;
})(window, document);