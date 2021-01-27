class Form{
    constructor(){
        this.title=createElement('H1');
        this.title.html("CAR RACING GAME");
        this.input=createInput("NAME");
        this.button=createButton("START");
    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
    }
  display(){
      this.title.position(displayWidth/2,20);
      this.input.position(displayWidth/2,100);
      this.button.position(displayWidth/2,500);
      this.button.mousePressed(()=>{ 
          this.input.hide();
          this.button.hide();
          player.name=this.input.value();
          playercount=playercount+1;
          player.index=playercount;
          player.update();
          player.updateCount(playercount);
          var greeting=createElement('H3');
          greeting.html("hello "+player.name);
          greeting.position(displayWidth/2,400);
      })

      
      
  }
}