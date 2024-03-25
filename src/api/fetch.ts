const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

function queryStringify(data: { [x: string]: { toString: () => any; }; }) {
  if (!data || Object.keys(data).length < 1) {
    return '';
  }
  return `?${Object
    .keys(data)
    .map((key) => `${key}=${data[key].toString()}`)
    .join('&')}`;
}

interface Options {
  timeout?: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class HTTPTransport {
  get = (url: string, options:Options = {}) => this.request(url, { ...options, method: METHODS.GET }, options.timeout);

  put = (url: string, options:Options = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  post = (url: string, options:Options = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  delete = (url: string, options:Options = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  // eslint-disable-next-line class-methods-use-this
  request = (url: string, options: { method: any; timeout?: number | undefined; data?: any; headers?: any; }, timeout = 5000) => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      const newUrl = method === METHODS.GET ? url + queryStringify(data) : url;

      xhr.open(method, newUrl);
      xhr.timeout = timeout;

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value as string);
        });
      }

      xhr.onload = function () {
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
