import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-sublist-form',
  templateUrl: './sublist-form.component.html',
  styleUrls: ['./sublist-form.component.scss']
})
export class SublistFormComponent implements OnInit {

  subAddForm: FormGroup;
  isSubmitted = false;
  @Input() mainlistIndex;
  @ViewChild('closebutton', {static: false}) closebutton;
  @ViewChild('subListForm', {static: false}) subListForm;
  constructor(private apiSerivce: ApiService, private ref: ChangeDetectorRef, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subAddForm = this.formBuilder.group({
      subTitle: ['', Validators.required],
      subDescription: ['', Validators.required]
    })
  }
  get f() { return this.subAddForm.controls; }
  onSubmit(){
    this.isSubmitted = true;
    const listParentIndex = this.subListForm.nativeElement.getAttribute('data-index');
    if(this.subAddForm.invalid){
      return;
    } else{
      const formValues = this.subAddForm.value;
      const findArray = this.apiSerivce.mainLists[listParentIndex].subList;
      const findSubListLength = findArray.length;
      const arrayValues = {
        id: findSubListLength + 1,
        subTitle: formValues.subTitle,
        subDescription: formValues.subDescription
      }
      findArray.push(arrayValues)
      this.closebutton.nativeElement.click();
      this.ref.detectChanges();
    }

  }
}
