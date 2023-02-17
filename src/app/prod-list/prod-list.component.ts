import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatCrudService } from '../service/cat-crud.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {
  public p:number=1;
  constructor(private crud:CatCrudService, private acr:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.acr.params.subscribe((data)=>{this.cat=data['cat']}
    )

    this.crud.getpr(this.cat).subscribe(
      (data)=>{this.prlist=data}
    )
  }

  cat:any
  prlist:any
  onedit(id:any)
  {
    this.route.navigate(['/edit-prod',id])
  }

  del:any
  
  delId(id:any)
  {
    console.log(id)
    this.crud.delprod(id).subscribe((data)=>{console.log(data);
    this.del=data;
  this.route.navigate(['/prlist/womens'])
  // this.route.navigate(['/catlist'])
})
  }

}
