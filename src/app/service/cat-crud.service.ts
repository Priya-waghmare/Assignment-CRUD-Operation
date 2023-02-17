import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatCrudService {

  constructor(private http:HttpClient) { }

  getprod()
  {
    return this.http.get('http://localhost:3300/prodetails')
  }
  getcat()
  {
    return this.http.get("http://localhost:3300/cat")
  }
  getpr(cat:any)
  {
    return this.http.get(`http://localhost:3300/products/${cat}`)
  }

  addnewprod(data:any)
  {
    return this.http.post('http://localhost:3300/addprod',data)
  }

  delprod(id:any)
  {
    return this.http.delete(`http://localhost:3300/delprod/${id}`)
  }

  updateprod(data:any,id:any)
  {
    return this.http.put(`http://localhost:3300/uptdprod/${id}`,data)
  }



}
