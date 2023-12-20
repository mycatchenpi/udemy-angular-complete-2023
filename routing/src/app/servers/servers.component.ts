import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // retrieving query parameters and fragments
    //1. 只在第一次初始化时执行
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    //2. 动态订阅
    this.route.queryParams.subscribe(
    );
    this.route.fragment.subscribe();

    this.servers = this.serversService.getServers();
  }

}
