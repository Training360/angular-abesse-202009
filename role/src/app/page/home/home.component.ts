import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  setPasswords(): void {
    this.http.get('http://localhost:3000/users').pipe(
      switchMap( users => {
        return zip(
          this.http.patch('http://localhost:3000/users/1', ({password: 'test'})),
          this.http.patch('http://localhost:3000/users/2', ({password: 'test'})),
          this.http.patch('http://localhost:3000/users/3', ({password: 'test'}))
        );
      })
    ).subscribe(
      resp => console.log(resp),
      err => console.error(err)
    );
  }

}
