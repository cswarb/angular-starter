import { Component } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  help(test: any) {
    return test;
  }
}
