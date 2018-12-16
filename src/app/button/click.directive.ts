import { Directive, HostListener } from "@angular/core";
import { ButtonService } from './button.service';

@Directive({
    selector: '[appClick]'
})
export class ClickDirective {
    belowTip = false;
    class = 'top';

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (event.target.classList.contains('tooltip') || event.target.classList.contains('btn')) {
            return;
        } else {
            this.buttonService.elShowing.next(0);
        }
    }

    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event) {
        this.buttonService.elShowing.next(0);
    }

    constructor(private buttonService: ButtonService) { }

}