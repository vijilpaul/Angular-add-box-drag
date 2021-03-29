import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MainList } from '../../core/models/products-models';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-trello-dashboard',
  templateUrl: './trello-dashboard.component.html',
  styleUrls: ['./trello-dashboard.component.scss']
})
export class TrelloDashboardComponent implements OnInit {

  mainLists: MainList[];
  constructor(private apiSerivce: ApiService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.ref.detectChanges();
    this.mainLists = this.apiSerivce.getMainLists();
  }
  deleteList(id){
    if (confirm('Are you sure to delete List box') == true) {
      this.apiSerivce.deleteMainList(id);
    }
  }
  deleteSubList(mainId, subId){
    if (confirm('Are you sure to delete Sub List') == true) {
      this.apiSerivce.deleteSubList(mainId, subId);
    }
  }

}
