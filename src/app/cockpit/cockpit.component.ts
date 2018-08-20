import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated =new EventEmitter<{name:string, content:string}>();
  @Output() blueprintCreated=new EventEmitter<{name:string, content:string}>();

  serverName="";
  serverContent="";
  constructor() { }

  ngOnInit() {
  }
  onAddServer(){
    this.serverCreated.emit({name:this.serverName, content:this.serverContent});
  }

    onAddBlueprint(){
    this.blueprintCreated.emit({name:this.serverName, content:this.serverContent});
    
  }
}
