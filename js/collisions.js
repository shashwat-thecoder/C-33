class Collision{
    constructor(x, y, w, h){
        var score = [];
        for (var i = 0; i < 10; i++){
            score.push(i*50);
        }
        console.log(score);
        this.scoreWritten = random(score);

        var options = {
            isStatic: true,
            collisionFilter : -1
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    check(objectB, index){
        textAlign(CENTER, CENTER)
        text(this.scoreWritten, this.body.position.x, this.body.position.y - (this.h/2));

        if(objectB){
            if(this.body.position.y - objectB.body.position.y < 10 &&this.body.position.y - objectB.body.position.y > -10 && frameCheck >= 20){
                if(this.body.position.x - (0.5 * this.w)< objectB.body.position.x - objectB.r && this.body.position.x + (0.5 * this.w) > objectB.body.position.x + objectB.r){
                    score += this.scoreWritten;
                    console.log(this.scoreWritten);
                    console.log(index);
                    particle = null;
                    if(turns >= 5){gameState = "end";}
                    frameCheck = 0;
                }
            }
        }
    }
}