export class Quote {
  public upvotes: number
  public downvotes: number

  constructor
  (public id:number,
     public description:string, 
     public name:string,public date:Date
      ){
        this.upvotes= 0;
        this.downvotes = 0;
      }
}
