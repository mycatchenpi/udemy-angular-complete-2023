import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // id的类型是number,使用+ operator把string转换成number
  // 同样是两种方法获取route参数：
  //    1. ActivatedRoute的.snapshot.params
  //    2. ActivatedRoute的observable对象params
  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params["id"]);
      }
    );
  }

  onEditClicked() {
    // 跳转到edit页面
    this.router.navigate(["edit"], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
