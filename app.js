class App {
        runApplication(){
            var canvas = document.getElementById("CanvasID");
            var ctx = canvas.getContext("2d");
    
    // Draw the sky
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the buildings
    ctx.fillStyle = "gray";
    ctx.fillRect(50, 100, 75, 300);
    ctx.fillRect(200, 75, 100, 325);
    ctx.fillRect(350, 100, 50, 300);
    ctx.fillRect(500, 150, 75, 250);
    ctx.fillRect(650, 120, 75, 280);
    ctx.fillRect(800, 120, 85, 280);

    // Draw the streets
    ctx.fillStyle = "black";
    ctx.fillRect(0, 350, canvas.width, 50);

    // Draw cars
    ctx.fillStyle = "red";
    ctx.fillRect(100, 370, 30, 20);
    ctx.fillRect(250, 370, 30, 20);
    ctx.fillRect(400, 370, 30, 20);
    ctx.fillRect(650, 370, 30, 20);
    ctx.fillRect(900, 370, 30, 20);
    
    
    // Draw streetlights
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(102,372,4,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(102,388,4,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(252,372,4,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(252,388,4,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(402,372,4,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(402,388,4,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(652,372,4,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(652,388,4,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(902,372,4,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(902,388,4,0,2*Math.PI);
    ctx.fill();

    // Draw the snowman body
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(100,720,50,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(100,630,40,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(100,560,30,0,2*Math.PI);
    ctx.fill();
    
    // Ogen sneeuwwpop
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(110,557,5,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(90,557,5,0,2*Math.PI);
    ctx.fill();
    
    // Draw the Sun
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(50,50,20,0,2*Math.PI);
    ctx.fill();

// Set the color of the tree trunk
    ctx.strokeStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(902, 668);
    ctx.lineTo(902, 568);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(902, 518, 50, 0, Math.PI * 2, true);
    ctx.arc(877, 543, 50, 0, Math.PI * 2, true);
    ctx.arc(927, 543, 50, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.strokeStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(602, 668);
    ctx.lineTo(602, 568);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(602, 518, 50, 0, Math.PI * 2, true);
    ctx.arc(577, 543, 50, 0, Math.PI * 2, true);
    ctx.arc(627, 543, 50, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.strokeStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(402, 668);
    ctx.lineTo(402, 568);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(402, 518, 50, 0, Math.PI * 2, true);
    ctx.arc(377, 543, 50, 0, Math.PI * 2, true);
    ctx.arc(427, 543, 50, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.fillRect(500, 800, 200, 100); 
    ctx.fillStyle = "white";
    ctx.fillRect(510, 810, 180, 80);
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Merry Christmas!", 530, 870);
    }
}

let app = new App();
app.runApplication();