import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  watch(){
    this.router.navigate(['seriesss']);
  }
}
