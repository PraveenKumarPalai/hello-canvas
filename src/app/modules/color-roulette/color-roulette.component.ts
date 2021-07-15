import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Square } from 'src/app/square';

@Component({
  selector: 'app-color-roulette',
  templateUrl: './color-roulette.component.html',
  styleUrls: ['./color-roulette.component.scss']
})
export class ColorRouletteComponent implements OnInit {
  title = 'canvas-first';

  squares: Square[] = [];

  colors = ["#B8D430", "#3AB745", "#029990", "#3501CB",
    "#2E2C75", "#673A7E", "#CC0071", "#F80120",
    "#F35B20", "#FB9A00", "#FFCC00", "#FEF200"];

  restaraunts = ["Wendy's", "McDonalds", "Chick-fil-a", "Five Guys",
    "Gold Star", "La Mexicana", "Chipotle", "Tazza Mia",
    "Panera", "Just Crepes", "Arby's", "Indian"];

  startAngle = 0;
  arc = Math.PI / 6;
  spinTimeout = null;

  spinArcStart = 10;
  spinTime = 0;
  spinTimeTotal = 0;



  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>

  private ctx: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.spin()
  }

  drawRouletteWheel() {
    const canvas = this.ctx.canvas;
    if (canvas.getContext) {
      var outsideRadius = 200;
      var textRadius = 160;
      var insideRadius = 125;

      this.ctx = canvas.getContext("2d");
      this.ctx.clearRect(0, 0, 500, 500);


      this.ctx.strokeStyle = "black";
      this.ctx.lineWidth = 2;

      this.ctx.font = 'bold 12px Helvetica, Arial';

      for (var i = 0; i < 12; i++) {
        var angle = this.startAngle + i * this.arc;
        this.ctx.fillStyle = this.colors[i];

        this.ctx.beginPath();
        this.ctx.arc(250, 250, outsideRadius, angle, angle + this.arc, false);
        this.ctx.arc(250, 250, insideRadius, angle + this.arc, angle, true);
        this.ctx.stroke();
        this.ctx.fill();

        this.ctx.save();
        this.ctx.shadowOffsetX = -1;
        this.ctx.shadowOffsetY = -1;
        this.ctx.shadowBlur = 0;
        this.ctx.shadowColor = "rgb(220,220,220)";
        this.ctx.fillStyle = "black";
        this.ctx.translate(250 + Math.cos(angle + this.arc / 2) * textRadius,
          250 + Math.sin(angle + this.arc / 2) * textRadius);
        this.ctx.rotate(angle + this.arc / 2 + Math.PI / 2);
        var text = this.restaraunts[i];
        this.ctx.fillText(text, -this.ctx.measureText(text).width / 2, 0);
        this.ctx.restore();
      }

      //Arrow
      this.ctx.fillStyle = "black";
      this.ctx.beginPath();
      this.ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
      this.ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
      this.ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
      this.ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
      this.ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
      this.ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
      this.ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
      this.ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
      this.ctx.fill();
    }
  }


  spin() {
    this.spinArcStart = Math.random() * 10 + 10;
    this.spinTime = 0;
    this.spinTimeTotal = Math.random() * 3 + 4 * 1000;
    this.rotateWheel();
  }

  rotateWheel() {
    this.spinTime += 30;
    if(this.spinTime >= this.spinTimeTotal) {
      this.stopRotateWheel();
      return;
    }
    var spinAngle = this.spinArcStart - this.easeOut(this.spinTime, 0, this.spinArcStart, this.spinTimeTotal);
    this.startAngle += (spinAngle * Math.PI / 180);
    this.drawRouletteWheel();
    this.spinTimeout = setTimeout(() => {this.rotateWheel()}, 30);
  }
  
  stopRotateWheel() {
    clearTimeout(this.spinTimeout);
    var degrees = this.startAngle * 180 / Math.PI + 90;
    var arcd = this.arc * 180 / Math.PI;
    var index = Math.floor((360 - degrees % 360) / arcd);
    this.ctx.save();
    this.ctx.font = 'bold 30px Helvetica, Arial';
    var text = this.restaraunts[index]
    this.ctx.fillText(text, 250 - this.ctx.measureText(text).width / 2, 250 + 10);
    this.ctx.restore();
  }
  
  easeOut(t, b, c, d) {
    var ts = (t/=d)*t;
    var tc = ts*t;
    return b+c*(tc + -3*ts + 3*t);
  }

  animate(): void {
    this.ctx.fillStyle = "red";
    const square = new Square(this.ctx);

    const canvas = this.ctx.canvas;
    this.squares.push(square);

    setInterval(() => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.squares.forEach((sqr: Square) => {
        sqr.moveRight()
      });

    }, 200)

  }
}
