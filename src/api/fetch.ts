const METHODS = {
  GET: 'GET',
  PUT:'PUT',
  POST:'POST',
  DELETE:'DELETE'
};

function queryStringify(data) {
  if(!data || Object.keys(data).length <1) {
    return ''
  }
  return "?" + Object
    .keys(data)
    .map(function(key){
      return key+"="+data[key].toString()
    })
    .join("&")
}

interface Options {
  timeout?: number
}

class HTTPTransport {
  get = (url, options:Options = {}) => {
    return this.request(url, {...options, method: METHODS.GET}, options.timeout);
  }

  put = (url, options:Options = {}) => {
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
  }

  post = (url, options:Options = {}) => {
    return this.request(url, {...options, method: METHODS.POST}, options.timeout);
  }

  delete = (url, options:Options = {}) => {
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
  }

  request = (url, options, timeout = 5000) => {
    const {method, data, headers} = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      const newUrl = method === METHODS.GET ? url+queryStringify(data) : url;

      xhr.open(method, newUrl);
      xhr.timeout = timeout;

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }


      xhr.onload = function() {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }

    });
  };
}
