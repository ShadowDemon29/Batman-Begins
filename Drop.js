class Drop{
    constructor(x,y){
        super(x,y,50,50);
        
        stroke(10);
        fill("blue");
        ellipse(x,y,60,60);
    }    
    for(var i=0; i<maxDrops; i++){
        maxDrops.push(new createDrop(random(0,400),random(0,400)));
    }
}