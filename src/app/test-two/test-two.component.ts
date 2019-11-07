import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: "app-test-two",
  templateUrl: "./test-two.component.html",
  styleUrls: ["./test-two.component.sass"]
})
export class TestTwoComponent implements OnInit {
  list: string[];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.getList().subscribe(list => {
      this.list = list;
    });
  }

  add() {
    this.listService.addToList();
  }
}
