class Form{
    constructor(){
        this.title=createElement('H1');
        this.title.html("CAR RACING GAME");
        this.input=createInput("NAME");
        this.button=createButton("START");
    }
  display(){
      this.title.position(400,100);
      this.input.position(400,200);
      this.button.position(400,300);
      this.button.mousePressed(()=>{ 
          this.input.hide();
          this.button.hide();
          var name=this.input.value();
          var greeting=createElement('H3');
          greeting.html("hello "+name);
          greeting.position(400,400);
      })

      
      
  }
}