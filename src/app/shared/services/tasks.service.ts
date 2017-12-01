import { Injectable } from '@angular/cli';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { RestClientService } from './rest-client.service';

@Injectable()
export class TasksService extends RestClientService {

  constructor(
    private http: Http
  ) {
    super();
  }

  getTasks(): Observable<any[]> {
    return this.http
    .get(this.collectionPath(), this.buildRequestOptions())
    .map((response: Response) => {
      let data = this.extract<any>(response);
      console.log(data);
      return data;
    })
    .catch(this.handleError);
  }

  getTask(id: string): Observable<any> {
    return this.http
    .get(this.elementPath(id), this.buildRequestOptions())
    .map((response: Response) => {
      let data = this.extract<any>(response);
      console.log(data);
      return data;
    })
    .catch(this.handleError);
  }

  newTask(data: any): Observable<any> {
    return this.http
    .post(this.collectionPath(), data, this.buildRequestOptions())
    .map((response: Response) => {
      let data = this.extract<any>(response);
      console.log(data);
      return data;
    })
    .catch(this.handleError);
  }

  deleteTask(id: string): Observable<any> {
    return this.http
    .delete(this.elementPath(id), this.buildRequestOptions())
    .map((response: Response) => {
      let data = this.extract<any>(response);
      console.log(data);
      return data;
    })
    .catch(this.handleError);
  }

  private collectionPath(): string {
    return 'http://localhost:8080/tasks';
  }

  private elementPath(id: string): string {
    return `${this.collectionPath()}/${id}`;
  }
}
