import { Component, OnInit, EventEmitter, Output, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-inputfield-add-server-blueprint',
  templateUrl: './inputfield-add-server-blueprint.component.html',
  styleUrls: ['./inputfield-add-server-blueprint.component.css']
})
export class InputfieldAddServerBlueprintComponent implements OnInit {
    //Emit event without alias
  @Output() serverCreated = new EventEmitter <{serverName: string, serverContent: string}>();
  //Emit event with alias
  @Output("blueprintCreatedAlias") blueprintCreated = new EventEmitter <{serverName: string, serverContent: string}>();
  //Using View Child
  @ViewChild('blueprintViewChild') blueprintViewChild: ElementRef;
  //If you want to use localreference delete newServerName, newServerContent
  newServerName = '';
  newServerContent = '';
  constructor() { }

//Using Two way data Binding 
  serverAdded() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });

  }
//Using Two way data Binding 
  blueprintAdded() {
   this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
  //Using Localreference 
  addServerLR(addServerLocalReference: HTMLInputElement){
       this.serverCreated.emit({
      serverName: addServerLocalReference.value,
      serverContent: this.newServerContent
    });
  }
  //Using ViewChild 
  addblueprintVC(blueprintViewChild){
       this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.blueprintViewChild.nativeElement.value
    });
  }
  ngOnInit() {
  }

}
