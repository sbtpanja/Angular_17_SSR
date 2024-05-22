import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  name: string[] = ['Subrata', 'Sanchita', 'Arijit','Mrinmoy','Amit','Sayani'];
  currentName: string = '';
  constructor() { }
  ngOnInit(): void {
    //write a code to select current name from name array
    this.currentName = this.name[Math.floor(Math.random() * this.name.length)];
  }
}
