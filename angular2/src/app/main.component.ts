import {Component, OnInit} from "@angular/core";
// 路由跳转
import {Router} from "@angular/router";
@Component({
  selector: "my-main",
  templateUrl: "./templates/main.html"
})
export class MainComponent {
  username: string;
  constructor(public router: Router) {

  }

  //  判断是否从在session 如果没有到登录界面
  ngOnInit() {
    var id = sessionStorage.getItem("id");
    this.username = sessionStorage.getItem("username");
    if(id == "" || id == undefined) {
      this.router.navigateByUrl("login");
    }
  }

  // 退出
  loginOut() {
    sessionStorage.clear();
    this.router.navigateByUrl("login");
  }
}
