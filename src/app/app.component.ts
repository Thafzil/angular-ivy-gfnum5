import { Component, OnInit,  VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
statement: string;
ngOnInit() {
 
}
player1='Computer';
player2='Player';
score1=0;
score2=0;
gameArr=['Rock','Paper','Scissor']
generateRandom(){
  this.player1="Laoding..." 
  this.player2="Loading..."
  setTimeout(()=>{
  const p1=Math.floor(Math.random()*3)
  this.player1=this.gameArr[p1]
  const p2=Math.floor(Math.random()*3)
  this.player2=this.gameArr[p2]
  if(p1!=p2){
    if(p1>p2){
      if(p1==2 && p2==0){
        this.score2+=1
      }else{
        this.score1+=1
    }
    }else{
      if(p2==2 && p1==0){
        this.score1+=1
      }else{
        this.score2+=1
      }
    }
  }
  },1000)

}
finalize(){
  if(this.score1>this.score2){
    this.statement="Player 1 wins"
  }else if(this.score2>this.score1){
    this.statement="Player 2 wins"
  }else{
    this.statement="Match tied"
  }
}
}
