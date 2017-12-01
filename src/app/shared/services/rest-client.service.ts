import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestClientService {

  extract<T>(response: Response): T {
    return <T>response.json();
  }

  buildRequestOptions(queryParams: any = {}): RequestOptions {
    let headers: Headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    });
    let params: URLSearchParams = new URLSearchParams();

    _.forEach((queryParams), (value: any, key: string) => {
      if (_.isArray(value)) {
        _.forEach((value), (v: string) => {
          params.append(`${key}[]`, v);
        });
      } else {
        params.set(key, value);
      }
    });

    return new RequestOptions({ headers: headers, search: params });
  }

  urlEncode(data: any): string {
    let urlSearchParams = new URLSearchParams();

    for (let key in data) {
      urlSearchParams.append(key, data[key]);
    }

    return urlSearchParams.toString();
  }

  handleError(error: any, caught: Observable<any>) {
    let errMsg = error.message || 'Server error';
    return Observable.throw(errMsg);
  }

}