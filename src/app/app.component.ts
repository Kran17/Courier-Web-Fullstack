import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  posts: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPosts().subscribe(
      data => {
        this.posts = data;
        console.log(this.posts);
      },
      error => {
        console.error('Error fetching posts', error);
      }
    );
  }
}

