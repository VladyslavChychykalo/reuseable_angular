import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public loadComponent(
    viewContainerRef: ViewContainerRef,
    key: string,
    data?: any
  ): void {
    const modalsList = {};
    const componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(
      modalsList[key].component
    );
    const componentRef: ComponentRef<any> = viewContainerRef.createComponent(
      componentFactory
    );
    componentRef.instance.data = modalsList[key].data;
  }

  public destroyComponent(viewContainerRef: ViewContainerRef): void {
    viewContainerRef.clear();
  }
}
