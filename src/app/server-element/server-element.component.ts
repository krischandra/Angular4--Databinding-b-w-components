import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // Method 1 without alias: dind this property using element
  // @Input() element:{ type: string, name: string,  content: string };
//Method 2 With Alias Bind with elementalias
@Input('elementalias') element:{ type: string, name: string,  content: string };
  constructor() { }

  ngOnInit() {
  }

}
