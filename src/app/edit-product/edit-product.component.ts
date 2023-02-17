import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatCrudService } from '../service/cat-crud.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private crud:CatCrudService , private route:Router, private acr:ActivatedRoute) { }

  ngOnInit(): void {
    this.acr.params.subscribe((data)=>{this.cur_id1=data['id']})
  }

  cur_id1:any
  prodform= new FormGroup(
    {
      cat_id:new FormControl('',Validators.required),
      cat_name:new FormControl('',Validators.required),
      prod_id:new FormControl('',Validators.required),
      prod_name:new FormControl('',Validators.required),
     

    }
    )

    // id:any;
    updtprod()
    {
      this.crud.updateprod(this.prodform.value, this.cur_id1).subscribe(
        (info)=>{console.log(info)})
        alert("Product Details Updated Successfully!!");
        this.route.navigate(['/home']);
    }


}
