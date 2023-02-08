
  let canvas = document.getElementById("Kaart");
  let g = canvas.getContext("2d");
  g.font = "30px Arial";
  g.fillText("Merry Christmas", 220, 40);
class App
//hier verschillende huizen tekenen
{
    constructor(huis) {
        this.huis = huis;
    }
    draw(g)
    {
        console.log("hello world");
        //code gaat hier
        let text = "huis";
        console.log(text);
      

        


    }
}  

class Huis{
    draw(x,y,color,g){
        g.fillStyle=color;
        g.beginPath();

        g.moveTo(x+0,y+50);
        g.lineTo(x+0,y+120);
        g.lineTo(x+70,y+120);
        g.lineTo(x+70,y+50);
        g.lineTo(x+37,y+0);
       
        

        g.fill();

        g.closePath();
        g.stroke();

    }
}

let huis1 = new Huis();
huis1.draw(10,0,"#C12909", g);
huis1.draw(100,0,"#C1ff09", g);
huis1.draw(510,379,"#31EFDE", g);
huis1.draw(690,379,"#B63ABC", g);
huis1.draw(600,379,"#6D0998", g);
huis1.draw(229,150,"#0BCB4D", g);
huis1.draw(130,150, "#321878", g);
huis1.draw(20,150, "#DA5999", g);
huis1.draw(600,0,"#FCD400", g);
huis1.draw(700,0,"#FF5733", g);

class Tree
//hier de bomen teken op verschillende plekken
{
    draw(g,x,y,color){

        g.strokeStyle="#10550C";
        g.fillStyle="#10550C";
        g.beginPath();
        g.lineWidth = 1;
        //stam
        g.moveTo(40+x, 200+y);
        g.lineTo(60+x, 200+y);
        g.lineTo(60+x, 150+y);
        g.lineTo(40+x, 150+y);
        g.lineTo(40+x, 200+y);
        //driehoek
        g.moveTo(75+x,150+y);
        g.lineTo(25+x,150+y);
        g.lineTo(25+x,150+y);
        g.lineTo(50+x,110+y);
        g.lineTo(75+x,150+y);
        //driehoek
        g.moveTo(75+x,120+y);
        g.lineTo(25+x,120+y);
        g.lineTo(50+x,80+y);
        g.lineTo(75+x,120+y)
        //driehoek
        g.moveTo(75+x,90+y);
        g.lineTo(25+x,90+y);
        g.lineTo(50+x,50+y);
        g.lineTo(75+x,90+y)
    



        g.fill()

        g.closePath();
        g.stroke();
    }  
    
   
}
let tree1 = new Tree();
tree1.draw(g, 780, 50);
tree1.draw(g, 271, 301);
tree1.draw(g, 642, 100);
tree1.draw(g, 413, 10);
tree1.draw(g, 24, 301);
tree1.draw(g, 333, 133);
tree1.draw(g, 390, 301);
tree1.draw(g, 890, 10);

class Snowman
{
    draw(g,canvas, X, Y) {
        // let X = canvas.width / 1.5;
        // let Y = canvas.height / 2;
        let R = 55;
        let K = 35;
        g.beginPath();
        g.lineWidth = 3;
        g.strokeStyle = '#FF0000';
        //groot rondje
        g.arc(X, Y, R, 0, 2 * Math.PI, true);
        g.closePath();
        g.stroke();

        //klein rondje
        g.beginPath();
        g.arc(X, Y+-90, K, 0, 4 * Math.PI, true);
        g.closePath();
        g.stroke();
        g.lineWidth = 3;
        g.strokeStyle = '#FF0000';
    }
}
let snowman = new Snowman();
snowman.draw(g, canvas, 200, 444);
snowman.draw(g, canvas, 583, 300);
snowman.draw(g, canvas, 900, 443);



class Road
{
    draw(g,canvas)
    {
        let X = canvas.width
        let y = canvas.height
        g.fillStyle = '#929291';
        g.beginPath();
        g.moveTo(1000,500);
        g.lineTo(0,500);
        g.moveTo(0,598);
        g.lineTo(1000,598);
        g.lineTo(1000,500);
        g.lineTo(0,500);

        g.fill();        

        g.closePath();
    }
}
let road = new Road();
road.draw(g, canvas);



