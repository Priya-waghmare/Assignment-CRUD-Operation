import { Component, OnInit } from '@angular/core';
import { CatCrudService } from '../service/cat-crud.service';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private crud:CatCrudService , private route:Router) { }

  ngOnInit(): void {
  }

  prodform= new FormGroup(
    {
      cat_id:new FormControl('',Validators.required),
      cat_name:new FormControl('',Validators.required),
      prod_id:new FormControl('',Validators.required),
      prod_name:new FormControl('',Validators.required),
  

    }
    )

    addprd()
    {
      console.log(this.prodform.value);
      this.crud.addnewprod(this.prodform.value).subscribe(
        (data)=>{console.log(data)}
      )
      alert("Product Added Successfully!!");
      this.route.navigate(['/home']);
      this.prodform.reset();
    }



}
