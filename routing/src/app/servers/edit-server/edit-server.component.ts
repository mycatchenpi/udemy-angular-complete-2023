import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowedEdit = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
     // 动态获取当前id，判断当前id是否allowed edit
    const id = +this.route.snapshot.params["id"];
    this.allowedEdit = id === 1 ? true : false;
    this.server = this.serversService.getServer(id);

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
