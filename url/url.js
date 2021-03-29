let object = {};

var url = document.createElement('a');
//url.href = "file:///C:/Users/HellByte/Desktop/web/3/index.html";
url.href = "https://ru.Khabarovsk_moy_gorod_rodnoy_.org:560/im/folder/file.exe?peers=a10_c300&sel=c8";

console.log(url.href);      
console.log(url.protocol);  
console.log(url.host);      
console.log(url.hostname);  
console.log(url.port);      
console.log(url.pathname);  
console.log(url.search);    
console.log(url.hash);      
console.log(url.origin);	

query = url.search

var dom = url.host.substring(0, url.host.lastIndexOf('.'));
object.domainname = dom;
object.domain = url.hostname.substring(url.host.lastIndexOf('.')+1, url.hostname.length);
object.protocol = url.protocol.substring(0, url.protocol.length-1);
object.port = url.port;

if (url.pathname.lastIndexOf('.') != -1) {
	object.extension = url.pathname.substring(url.pathname.lastIndexOf('.')+1, url.pathname.length);
}

object.path = url.pathname.substring(0, url.pathname.lastIndexOf('/'));

object.file = url.pathname.substring(url.pathname.lastIndexOf('/')+1, url.pathname.lastIndexOf('.'));

let pr = {};

let parametrs = query.substring(1, query.length).split("&");
for(let key in parametrs) {
	
		pr[parametrs[key].split("=")[0]] = parametrs[key].split("=")[1];
		
}

object.parameters = pr;
console.log(object);

