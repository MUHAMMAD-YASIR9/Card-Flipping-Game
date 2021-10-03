import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cd:ChangeDetectorRef) {}
  public cardCount: number;
  title = 'angular-card-game';
  openFlag:boolean;
  sendValue(value) {
    this.cardCount=value;
    this.openFlag=true;
    this.cd.detectChanges()
  }
}
