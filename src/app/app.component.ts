import { Component } from '@angular/core';
import { AppStore } from './store';


@Component({
  selector: 'app-root',
  template: `
     <div *ngIf="isLoading">...loading</div>
  `,
  styleUrls: ['app.component.css'],
  providers: [AppStore]
})
export class AppComponent {
  title = 'app works!';
  isLoading: boolean = false;
  constructor(private store: AppStore) {
    this.store
      .changes
      .pluck('isLoading')
      .subscribe((isLoading: boolean) => this.isLoading = isLoading)
  }

  showLoader(isLoading: boolean) {
    const currentState = this.store.getState();
    this.store.setState(Object.assign({}, currentState, { isLoading }));
  }
}
