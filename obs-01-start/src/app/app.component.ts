import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated: boolean = false;
  private activeSub: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.activeSub = this.userService.activatedEmitter.subscribe(didActive => {
      this.userActivated = didActive;
    });
  }
  ngOnDestroy() {
    this.activeSub.unsubscribe();
  }
}
