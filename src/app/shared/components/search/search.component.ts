import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  postId;
  @Output() searchPost = new EventEmitter<number>();

  constructor(private fb: FormBuilder) { }

  searchForm = this.fb.group({
    id: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  search(id): void {
    console.log(id);
    this.searchPost.emit(id);
  }

}
