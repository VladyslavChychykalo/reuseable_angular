import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertising-modal',
  templateUrl: './advertising-modal.component.html',
  styleUrls: ['./advertising-modal.component.scss'],
})
export class AdvertisingModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // public openModal(): void {
  //   this._broadcaster.broadcast('open modals', {
  //     key: 'sort',
  //     data: {
  //       sortOptions: this.sortOptions,
  //       savedSort: this.sortBy.bind(this),
  //       sortName: this.companyService.saved_sort.name,
  //     },
  //   });
  // }
}
