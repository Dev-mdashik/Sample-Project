const XHR = new XMLHttpRequest();
const url = "https://api.github.com/zen";

XHR.onreadystatechange = ()=> {
    if (XHR.readyState==4){
        console.log(XHR.responseText);
    }
}
XHR.open("GET",url);
XHR.send();