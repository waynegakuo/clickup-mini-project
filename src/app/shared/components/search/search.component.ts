import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // Send the info up to the parent component
  @Output() searchPost = new EventEmitter<number>();

  constructor(private fb: FormBuilder) { }

  // Reactive form for our search section
  searchForm = this.fb.group({
    id: ['']
  });

  ngOnInit(): void {
  }

  /**
   * This function 'bubbles up' the post ID provided to the parent component (Table)
   * @param id post ID
   */
  search(id): void {
    console.log(id);
    this.searchPost.emit(id);
  }
}
