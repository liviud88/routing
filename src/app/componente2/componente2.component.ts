import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component  implements  OnInit {

  constructor(private route: ActivatedRoute, private router:Router) {
    
  }

  ngOnInit() {
  }

}
