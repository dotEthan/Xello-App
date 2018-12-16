import { Component, OnInit } from '@angular/core';
import { ButtonService } from './button/button.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  buttons = [
    { id: 1, name: "A", image: 1, tooltip: { hidden: true, content: "Don't drink and drive." } },
    { id: 2, name: "B", image: 2, tooltip: { hidden: true, content: "Button clicking is fun" } }
  ];
  tooltips = [
    "Don't Drink and Drive",
    "Button clicking is fun",
    "Be kind, rewind",
    "Drink lots of water",
    "Get a dog",
    "Be Cool, Stay in School"
  ];
  charCode = 67;
  isShowing: number;

  constructor(private buttonService: ButtonService) { }

  ngOnInit() {
    this.buttonService.elShowing.subscribe(
      (id: number) => {
        const openId = id;
        const newArr = this.buttons.map((but) => {
          if (openId === but.id) {
            but.tooltip.hidden = false;
          } else {
            but.tooltip.hidden = true;
          }
          return but;
        });
        this.buttons = newArr;
      }
    );
  }

  addRemoveClick(choice) {
    if (choice === "add") {
      this.buttons.push({ id: this.buttons.length + 1, name: String.fromCharCode(this.charCode), image: Math.floor(Math.random() * 6) + 1, tooltip: { hidden: true, content: this.tooltips[Math.floor(Math.random() * 5) + 1] } });
      this.charCode++;
    } else {
      if (this.buttons.length > 0) {
        this.buttons.pop();
        this.charCode--;
      }
    }
  }
}
