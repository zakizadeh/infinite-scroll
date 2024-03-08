import { Injectable } from '@angular/core';

export interface Post {
  title: string;
  content: string;
  visible: boolean;
  progressbarValue: number;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor() { 
    this.createData();
  }

  public allPosts: Post[] = [];

  // we can call web service 
createData(){

    for (let index = 0; index < 10000; index++) {
      this.allPosts.push(
        { title: 'Post ' + index, content: 'test content', visible: true, progressbarValue :0 }
      );
    }

}


}
