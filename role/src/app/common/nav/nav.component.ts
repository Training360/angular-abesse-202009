import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/model/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user$: Observable<User> = this.auth.currentUser$;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

}
