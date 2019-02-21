import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor(private converterService: ConverterService) { }

  ngOnInit() {
    this.units = [
      {name:"Length", metric:"meter", imperial:"foot"},
      {name:"Temperature", metric:"celsius", imperial:"fahrenheit"},
      {name:"Mass", metric:"gram", imperial:"ounce"},
      {name:"Speed", metric:"kph", imperial:"mph"},
      {name:"Area", metric:"sqm", imperial:"sqyd"}
    ];
    this.unitSelected = this.units[0];
  }

  units: Unit[];

  metric: number;
  imperial: number;
  unitSelected: Unit;
  selected:string;

  updateMetric(): void {
    this.converterService.convert({unit:this.unitSelected.imperial, value:this.imperial})
      .subscribe(unitValue => this.metric = unitValue.value);
  };

  updateImperial(): void {
    this.converterService.convert({unit:this.unitSelected.metric, value:this.metric})
      .subscribe(unitValue => this.imperial = unitValue.value);
  }

  private unitChanged(): void {
    // var name = event.target.value;
    var unit = this.units.find(u => u.name == this.selected);
    this.unitSelected = unit;
    this.updateImperial();
  }
}

class Unit {
  name: string;
  metric: string;
  imperial: string;
}