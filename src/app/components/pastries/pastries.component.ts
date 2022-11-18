import { Component, OnInit } from '@angular/core';
import { PASTRIES } from '../../data/mock-pastries';
import { Pastry } from '../../interfaces/pastry';


@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {

  pageTitle: string = "Page principale"
  pastries?: Pastry[] = PASTRIES;
  styles = [['bg-primary'], ['bg-success'], ['bg-info'], ['bg-danger']];
  selectedPastry: Pastry;

  constructor() { }

  ngOnInit(): void {
  }

  selectPastry(pastry: Pastry) {
    this.selectedPastry = pastry;
  }

}
