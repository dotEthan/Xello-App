import { Component, Input, OnChanges } from '@angular/core';
import { Button } from './button.model';
import { ButtonService } from './button.service';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnChanges {
  @Input() button: Button;
  @Input() isShowing: number;
  buttonId: number;
  bgImage: string;

  constructor(private buttonService: ButtonService) { }

  ngOnChanges() {
    this.buttonId = this.button.id;
    this.bgImage = "url('../../assets/" + this.button.image + ".jpg')";
  }

  onClick(event) {
    this.buttonService.elShowing.next(parseInt(event.target.id));
  }

}
