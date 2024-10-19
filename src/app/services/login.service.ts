import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environments } from "../../environments/environments";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private  http: HttpClient) {}

    private url = environments.api_url;

    login(email: string, password: string): Observable<any> {
      return this.http.post<any>(`${this.url}/login`, {email, password});
    }
}
