import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-css-roulette',
  templateUrl: './css-roulette.component.html',
  styleUrls: ['./css-roulette.component.scss']
})
export class CssRouletteComponent implements OnInit {

  @ViewChild('inner', { static: true })
  inner: ElementRef<HTMLCanvasElement>

  @ViewChild('spin', { static: true })
  spin: ElementRef<HTMLCanvasElement>

  @ViewChild('reset', { static: true })
  reset: ElementRef<HTMLCanvasElement>

  @ViewChild('data', { static: true })
  data: ElementRef<HTMLCanvasElement>

  @ViewChild('mask', { static: true })
  mask: ElementRef<HTMLCanvasElement>

  @ViewChild('placeholder', { static: true })
  placeholder: ElementRef<HTMLCanvasElement>

  @ViewChild('resultNumber', { static: true })
  resultNumber: ElementRef<HTMLCanvasElement>

  @ViewChild('resultColor', { static: true })
  resultColor: ElementRef<HTMLCanvasElement>

  @ViewChild('result', { static: true })
  result: ElementRef<HTMLCanvasElement>

  @ViewChild('previousList', { static: true })
  previousList: ElementRef<HTMLCanvasElement>


  maskDefault = 'Place Your Bets'

  timer = 9000;

  red = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];

  constructor(
    private _elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.reset.nativeElement.hidden = true;
    this.mask.nativeElement.innerHTML = this.maskDefault;
  }

  spinWhl = () => {

    // get a random number between 0 and 36 and apply it to the nth-child selector
    var randomNumber = Math.floor(Math.random() * 36),
      color = null;

    this.inner.nativeElement.setAttribute('data-spinto', String(randomNumber));
    this.renderer.setProperty(this._elementRef.nativeElement.querySelector('li:nth-child(' + randomNumber + ') input'), 'checked', 'checked');
    // prevent repeated clicks on the spin button by hiding it

    this.spin.nativeElement.hidden = true;
    // disable the reset button until the ball has stopped spinning
    this.renderer.addClass(this._elementRef.nativeElement.querySelector('#reset'), 'disabled');
    this.renderer.setProperty(this._elementRef.nativeElement.querySelector('#reset'), 'disabled', 'disabled');
    this.reset.nativeElement.hidden = false;

    this.placeholder.nativeElement.remove();

    setTimeout(() => {
      this.mask.nativeElement.innerHTML = 'No More Bets';
    }, this.timer / 2);

    setTimeout(() => {
      this.mask.nativeElement.innerHTML = this.maskDefault
    }, this.timer + 500);


    // remove the disabled attribute when the ball has stopped
    setTimeout(() => {
      this.renderer.removeClass(this._elementRef.nativeElement.querySelector('#reset'), 'disabled');
      this.renderer.setProperty(this._elementRef.nativeElement.querySelector('#reset'), 'disabled', '');

      if (this.red.indexOf(randomNumber) !== -1) { color = 'red' } else { color = 'black' };
      if (randomNumber == 0) { color = 'green' };

      this.resultNumber.nativeElement.innerHTML = String(randomNumber);
      this.resultColor.nativeElement.innerHTML = color;
      this.result.nativeElement.style.backgroundColor = color;

      this.renderer.addClass(this._elementRef.nativeElement.querySelector('.data'), 'reveal');
      this.renderer.addClass(this._elementRef.nativeElement.querySelector('.inner'), 'rest');

      let thisResult = '<li class="previous-result color-' + color + '"><span class="previous-number">' + randomNumber + '</span><span class="previous-color">' + color + '</span></li>';

      this.previousList.nativeElement.innerHTML = this.previousList.nativeElement.innerHTML + thisResult;

    }, this.timer);
  }


  resetGame = () => {
    // remove the spinto data attr so the ball 'resets'

    this.inner.nativeElement.setAttribute('data-spinto', '');
    this.renderer.removeClass(this._elementRef.nativeElement.querySelector('.inner'), 'rest');
    this.reset.nativeElement.hidden = true;
    this.spin.nativeElement.hidden = false;
    this.renderer.removeClass(this._elementRef.nativeElement.querySelector('.data'), 'reveal');
  }

}
