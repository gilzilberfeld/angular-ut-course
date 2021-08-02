import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo',
  templateUrl: './component-demo.component.html',
  styleUrls: ['./component-demo.component.css']
})
export class ComponentDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// todo: 
// add: things for running tests, not mocking
//    before each async  + then.
//    ngOnInit thing that fails
//    async / await
//    promises
//    checking the DOM + detectchanges
