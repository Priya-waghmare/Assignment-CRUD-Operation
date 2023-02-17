import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatCrudService } from '../service/cat-crud.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private crud:CatCrudService, private route:Router) { }

  ngOnInit(): void {
    this.crud.getcat().subscribe(
      (data)=>{this.catlist=data;
      console.log(data)}
    )
  }

  catlist:any
  onrout(cat:any)
  {
    this.route.navigate(['/prlist',cat])
  }
}
