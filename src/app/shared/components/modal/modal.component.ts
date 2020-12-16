import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BroadcasterService } from '../../services/broadcaster.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private broadcasterService: BroadcasterService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.broadcasterService.on('close modals').subscribe(() => {
      this.destroyComponent();
    });

    this.broadcasterService.on('open modals').subscribe((data: any) => {
      this.destroyComponent();
      this.loadComponent(data.key, data.data);
    });
  }

  public loadComponent(key: string, data?: any): void {
    this.modalService.loadComponent(this.viewContainerRef, key, data);
  }

  public destroyComponent(): void {
    this.modalService.destroyComponent(this.viewContainerRef);
  }
}
