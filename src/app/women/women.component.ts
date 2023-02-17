import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatCrudService } from '../service/cat-crud.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  constructor(private crud:CatCrudService, private route:Router) { }

  ngOnInit(): void {
    this.getdata()
  }

  
  productlist:any
  getdata()
  {
    this.crud.getprod().subscribe(
      (data)=>{this.productlist=data}
    )
  }
  delprodid(id:any)
  {
    return this.crud.delprod(id).subscribe((data)=>{console.log(data);
      alert("Data Deleted");})
  }


}
