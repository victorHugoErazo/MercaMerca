import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  dataProduct = [
    {
      nombre: "Arroz",
      gramaje: 500,
      valor: "$5.000",      
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
