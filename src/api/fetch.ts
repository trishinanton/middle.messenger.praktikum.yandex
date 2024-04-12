const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

function queryStringify(data: { [x: string]: { toString: () => string; }; }) {
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

type MethodType = (url: string, options:Options) => Promise<unknown>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class HTTPTransport {
  get:MethodType = (url, options = {}) => this.request(url, { ...options, method: METHODS.GET }, options.timeout);

  put:MethodType = (url, options = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  post:MethodType = (url, options = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  delete:MethodType = (url, options = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  // eslint-disable-next-line class-methods-use-this
  request = (url:string, options: { method: string; timeout?: number | undefined; data?: Object; headers?: Object }, timeout = 5000) => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      const newUrl = method === METHODS.GET ? url + queryStringify(data as { [x: string]: { toString: () => string; }; }) : url;

      xhr.open(method, newUrl);
      xhr.timeout = timeout;

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value as string);
        });
      }

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data as Document | XMLHttpRequestBodyInit | null | undefined);
      }
    });
  };
}
