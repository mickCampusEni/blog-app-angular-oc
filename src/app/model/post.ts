export class Post {

  createdAt: Date;
  loveIt: number;

  constructor(public title: string, public content: string){

    this.createdAt = new Date();
    this.loveIt = 0;
  }
}
