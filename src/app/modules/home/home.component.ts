import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('homeCanvas', { static: true })
  homeCanvas: ElementRef<HTMLCanvasElement>

  private ctx: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    this.smileyFaceEmoji()
  }


  boxes() {

    this.resetCanvas(800, 800);

    // fillReact(x, y, width, height);
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(10,10, 100, 200);
    
    this.ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    this.ctx.fillRect (30, 30, 200, 500);
    
    
  }
  
  triangle() {
    this.resetCanvas(400, 400);

    this.ctx.beginPath();
    this.ctx.moveTo(75, 50);
    
    this.ctx.lineTo(100, 75);
    this.ctx.stroke();
    this.ctx.lineTo(100, 25);
    this.ctx.stroke();
    this.ctx.lineTo(75, 50);
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();
    
    this.ctx.beginPath();
    this.ctx.moveTo(200, 50);
    
    this.ctx.lineTo(150, 100);
    this.ctx.stroke();
    this.ctx.lineTo(250, 100);
    this.ctx.stroke();
    this.ctx.lineTo(200, 50);
    this.ctx.stroke();
    this.ctx.fill();
  }
  
  pyramid() {
    this.resetCanvas(400, 400);
    
    this.ctx.beginPath();
    this.ctx.moveTo(200, 0);
    
    this.ctx.lineTo(0, 400);
    this.ctx.stroke();
    this.ctx.lineTo(400, 400);
    this.ctx.stroke();
    this.ctx.lineTo(200, 0);
    this.ctx.stroke();
    this.ctx.fillStyle = "orange";
    this.ctx.fill();
  }
  
  initials() {
    this.resetCanvas(500, 500);

    this.ctx.beginPath();
    this.ctx.moveTo(20, 0);
    
    this.ctx.lineTo(0, 50);
    this.ctx.stroke();
    this.ctx.moveTo(20, 0);
    this.ctx.lineTo(40, 50);
    this.ctx.stroke();
    this.ctx.moveTo(10, 25);
    this.ctx.lineTo(30, 25);
    this.ctx.stroke();
  }
  
  smileyFaceEmoji() {
    this.resetCanvas(500, 500);
    
    this.ctx.beginPath();
    this.ctx.arc(250, 250, 100,0,Math.PI*2, true);
    this.ctx.moveTo(235, 225);
    this.ctx.arc(225, 225, 10, 0, Math.PI*2, true);
    this.ctx.moveTo(285, 225);
    this.ctx.arc(275, 225, 10, 0, Math.PI*2, true);
    this.ctx.moveTo(250, 275);
    this.ctx.arc(250, 275, 50, 0, Math.PI, false);
    this.ctx.moveTo(250, 275);
    this.ctx.lineTo(200, 275);
    this.ctx.stroke();
  }

  resetCanvas = (height: number, width: number) => {
    this.ctx = this.homeCanvas.nativeElement.getContext("2d");
    this.ctx.clearRect(0, 0, 500, 500)
    this.ctx.canvas.height = height;
    this.ctx.canvas.width = width;
  }


}
