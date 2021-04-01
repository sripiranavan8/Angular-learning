import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',//html selector
  // selector: '[app-servers]', //html attribute
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreateionStatus: string = "No Server was Created!";
  serverStatus: boolean = false;
  serverName: string = 'Test Server';
  servers: any = ['TestServer', 'TestServer 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverStatus = !this.serverStatus;
    this.servers.push(this.serverName);
    if (this.serverStatus) {
      this.serverCreateionStatus = "Server was created " + this.serverName;
    } else {
      this.serverCreateionStatus = "No Server was Created! " + this.serverName;
    }
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
