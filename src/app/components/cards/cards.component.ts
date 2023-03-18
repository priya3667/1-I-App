import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent  implements OnInit {

  @Input() hasHeader: boolean | undefined ;
  @Input() hasFooter: boolean | undefined;
  @Input() totalno:string | undefined;
  @Input() extra: boolean | undefined;

  @Input() season:string | undefined;
  @Input() episodes:string | undefined;
  constructor() { }

  ngOnInit() {}

}
