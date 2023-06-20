import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  host = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }


  index(token: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };
    return this.http.get<any>(this.host + "osszes_foglalas", httpOption);

  };

  store( first_name:string,  email:string,
     phone_number:string, res_date:string,
    messages:string){

     let resData={
       first_name:first_name,
       email:email,
       res_date:res_date,
       phone_number:phone_number,
       messages:messages,
     }

 let headers = new HttpHeaders({
   'Content-Type': 'application/json'
 });
 let httpOption= {
   headers:headers
 }
 let endpoint = "foglalas";
 let url = this.host  + endpoint;
 return this.http.post<any>(url, resData,httpOption)

}



update(reservation: any, token:any) {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token

  });
  let httpOptions = {
    headers: headers
  };
  let endpoint = "foglalas_frissites/";
  let url = this.host + endpoint +reservation.id;
  return this.http.put<any>(url, reservation, httpOptions);
}




  Destroy(id:any , token:string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    })
    let httpOption = {
      headers: headers
    };

    let endpoint="foglalas_torlese/";
    let url = this.host + endpoint;
    return this.http.delete<any>(url +id, httpOption);
  }
}

