import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatCrudService } from '../service/cat-crud.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css']
})
export class AddcatComponent implements OnInit {

  constructor(private crud:CatCrudService , private route:Router) { }

  ngOnInit(): void {
  }

  prform = new FormGroup({
   
    cat_id: new FormControl(''),
    cat_name: new FormControl(''),})

    
  savepr(): void{

    console.log(this.prform.value);
    this.crud.addnewprod(this.prform.value).subscribe(
      (data)=>{console.log(data)}
    )
    this.route.navigate(['/home'])

}

}
