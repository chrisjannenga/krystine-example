
import { Component, OnInit } from '@angular/core';
import { ListService } from "./../services/list.service";

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.sass']
})
export class TestOneComponent implements OnInit {
  list: string[];

  constructor(private listService: ListService) { }


  ngOnInit() {
    this.listService.getList().subscribe(list => {
      this.list = list;
    })
  }
  remove() {
    this.listService.removeFromList();
  }

}
