import { Message } from 'element-ui'
export default {
    install(Vue) {
        Vue.prototype.$http = function(options, type) {
            /*将数据转化为字符串*/
            var strData = function(data) {
                var dataStr = "";
                if (type) {
                    dataStr = JSON.stringify(data)
                    return dataStr;
                } else {
                    for (var key in data) {
                        dataStr += key + '=' + data[key] + '&';
                    }
                    dataStr = dataStr && dataStr.slice(0, -1);
                }
                return dataStr;
            };
            /*创建 XMLHttpRequest 对象*/
            var createXHR = function() {
                var xhr;
                if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                    xhr = new XMLHttpRequest();
                } else { // code for IE6, IE5
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }
                return xhr
            };
            /*向服务器发送请求*/
            var open = function(xhr, type, url, async) {
                xhr.open(type, url, async);
            };
            var send = function(xhr, msg) {
                xhr.send(msg);
            };
            var setHeaders = function(xhr, headers) {
                    // xhr.setRequestHeader("Content-Type", type ? 'application/json;chartset=UTF-8' : "application/x-www-form-urlencoded");
                    xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3NDk4MzJqbmNhc2JpZGhxd2V5OThxM2hvbmhkZm9pYXN1MjMiLCJpYXQiOjE2MjE1MDM3NDAsImV4cCI6MTYyMTU5MDE0MCwianRpIjoiMSJ9.L40vGNbPpaJx3Tezb4cDsF7WMC20f4SQCUF0I8HeOCk");
                    if (!headers) {
                        return false;
                    }
                    for (var key in headers) {
                        xhr.setRequestHeader(key, headers[key]);
                    }
                }
                // 郭松恒旺店通
                // let apiHost = 'http://10.3.30.107:8089/wangdian';
                // 正式
            let apiHost = '/api/v1/admin/report/export/orange/pool/20210501/20210520';
            var request = function(xhr, opts) {
                if (opts.type === "GET") {
                    open(xhr, opts.type, apiHost + opts.url + '?' + strData(opts.data), opts.async);
                    send(xhr, null);
                } else if (opts.type === "POST") {
                    open(xhr, opts.type, apiHost + opts.url, opts.async);
                    if (opts.headers) {
                        setHeaders(xhr, opts.headers);
                    }
                    send(xhr, strData(opts.data));
                }
            };
            xhr.responseType = "blob";
            return new Promise((resolve, reject) => {
                if (!options || typeof options != 'object') {
                    reject(new Error("参数错误，请传入对象参数！"));
                    return false;
                }
                if (!options.url) {
                    reject(new Error("url不能为空"));
                    return false;
                }
                options.type = options.type ? options.type.toUpperCase() : 'GET';
                options.async = (options.async && options.async === false) ? false : true;
                options.dataType = options.dataType || "json";
                options.data = options.data || {};
                options.headers = options.headers || {};
                var dataStr = strData(options.data);
                /*创建 XMLHttpRequest 对象*/
                var xhr = createXHR();
                /*创建服务器返回响应后执行操作函数options.dataType*/
                xhr.onreadystatechange = function() {
                    var responseData;
                    if (xhr.readyState == 4) {
                        // if (xhr.status === 404) {
                        //     window.location.href = '/#/404';
                        //     return
                        // }
                        if (xhr.status === 0) {
                            console.log(xhr.status)
                            Message.error("Not Login");
                            window.location.href = '/#/Login';
                            return
                        }
                        // if (xhr.status !== 200) {
                        //     Message.error("Net Error");
                        //     window.location.href = '/#/Login';
                        //     return
                        // }
                        switch (xhr.status) {
                            case 200:
                                switch (options.dataType) {
                                    case "xml":
                                        responseData = xhr.responseXML;
                                        break;
                                    case "text":
                                        responseData = xhr.responseText;
                                        break;
                                    case "json":
                                        responseData = JSON.parse(xhr.responseText);
                                        break;
                                }
                                resolve(responseData);
                            default:
                                reject(new Error("错误处理"));
                        }
                    }
                };
                /*向服务器发送请求*/
                request(xhr, options);
            })
        };
        Vue.prototype.$post = function(options, type) {
            options.type = 'post';
            return this.$http(options, type);
        }
        Vue.prototype.$get = function(options, type) {
            options.type = 'get';
            return this.$http(options, type);
        };
    }
}
