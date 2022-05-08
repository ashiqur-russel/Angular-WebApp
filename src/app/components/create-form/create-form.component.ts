import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancel() {

    this.router.navigate(['/event'])
  }
}
