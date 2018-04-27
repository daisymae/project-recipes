import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedNavigation = 'recipe';

  onNavigate(navigationTab: string) {
    this.loadedNavigation = navigationTab;
  }
}
