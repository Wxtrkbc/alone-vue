import Cookies from 'js-cookie'

var $ = {}

$.ajax = function(url, options){

	new Promise(function(resolve, reject){
		if (window.XMLHttpRequest){
			var xhr = new XMLHttpRequest();
		} else {
			var xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4) {
				let data ;
				try {
					data = JSON.parse(xhr.response);
				} catch(err){
					data = xhr.statusText
				}
				
				let result = {
					status:xhr.status,
					data: data 
				}

				if (xhr.status >= 200 && xhr.status < 300) {
                		return resolve(result)
					}
				return reject(result)
            }
      
		}

		if(options.params){
			let params = Object.keys(options.params).map((key) => key + '=' + options.params[key]).join('&');
			url = url + '?' + params;
		}

		xhr.open(options.method, url, false);


		xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
		if(options.headers){
			for(let key in options.headers){
				xhr.setRequestHeader(key, options.headers[key]);
			}
		}
		if(options.auth){
			let csrftoken = Cookies.get('csrftoken')
			xhr.setRequestHeader('X-CSRFToken', csrftoken)
		}

		xhr.send(JSON.stringify(options.body))
		
	})

};


$.get = (url, pararms, auth=false) => {
	$.ajax(url, {
		method: 'get',
		pararms: pararms,
		auth: auth
	})
}

$.post = (url, body, auth=true) => {
	$.ajax(url, {
		method: 'post',
		body: body,
		auth: auth
	})
}

$.put = (url, body, auth=true) => {
	$.ajax(url, {
		method: 'put',
		body: body,
		auth: auth
	})
}

$.patch = (url, body, auth=true) => {
	$.ajax(url, {
		method: 'patch',
		body: body,
		auth: auth
	})
}

$.delete = (url, body, auth=true) => {
	$.ajax(url, {
		method: 'delete',
		body: body,
		auth: auth
	})
}

window.$ = $

export {
	$
}
