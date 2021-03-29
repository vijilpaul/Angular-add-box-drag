import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-main-list-form',
  templateUrl: './main-list-form.component.html',
  styleUrls: ['./main-list-form.component.scss']
})
export class MainListFormComponent implements OnInit {

  mainAddForm: FormGroup;
  isSubmitted = false;
  @ViewChild('closebutton', {static: false}) closebutton;
  constructor(private apiSerivce: ApiService, private ref: ChangeDetectorRef, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mainAddForm = this.formBuilder.group({
      mainTitle: ['', Validators.required]
    })
  }
  get f() { return this.mainAddForm.controls; }
  onSubmit(){
    this.isSubmitted = true;
    if(this.mainAddForm.invalid){
      return;
    } else{
      const formValues = this.mainAddForm.value;
      if(formValues){
        const findArray = this.apiSerivce.mainLists.length;
        const arrayValues = {
          id: findArray + 1,
          mainTitle: formValues.mainTitle,
          subList: []
        }
        this.apiSerivce.mainLists.push(arrayValues)
      }
      this.closebutton.nativeElement.click();
      this.ref.detectChanges();
    }

  }

}
