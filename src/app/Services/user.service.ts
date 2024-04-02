import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  getUserListPaginated(page:number, pageSize:number):Observable<GetResponseUsers>{
    const searchUrl=environment.backendHost+`/admin/usersList`+`?page=${page}&size=${pageSize}`;
    return this.httpClient.get<GetResponseUsers>(searchUrl)
  }
}

interface GetResponseUsers {
  _embedded: {
    users: User[];
  },
  page:{
    size:number,
    totalElements:number,
    totalPages:number,
    number:number
  }
}