class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }
    getCount(){
        var playercountref=database.ref('playercount');
        playercountref.on("value",(data)=>{
            playercount=data.val();
        })
    }
    updateCount(count){
       database.ref('/').update({
           playercount:count
       })
    }
    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        var PlayerInforef=database.ref('players');
        PlayerInforef.on("",(data)=>{
            allPlayers=data.val()
        })
    }
}