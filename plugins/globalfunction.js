const global = {}
global.getHeader = function (token) {
    let header = {
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token['access_token']
        }
    };
    return header;
};
global.setCookie = function (cname, cvalue, exdays) {
    let d = new Date();
    let minutes = 1.5;
    d.setTime(d.getTime() + (exdays * minutes * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";``
}
global.getCookie = function (cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export default global;