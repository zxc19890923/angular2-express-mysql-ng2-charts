import {Component} from "@angular/core";
// 加密
import {Md5} from "ts-md5/dist/md5";
//
import 'rxjs/add/operator/map';
// jsonp
import {Jsonp, URLSearchParams} from "@angular/http";
//
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: "my-login",
  templateUrl: "./templates/login.html"
  // styleUrls: ["./styles/login.css"]
})

export class LoginComponent {
  username:string;
  password:string;
  message:string;

  constructor(public jsonp:Jsonp, public router: Router) {
    this.username = "";
    this.password = "";
    this.message = "";
  }

  goLogin() {
    var pwd = Md5.hashStr(this.password).toString();
    var params = new URLSearchParams();
    params.set("username", this.username);
    params.set("callback", "JSONP_CALLBACK");
    params.set("password", pwd);
    this.jsonp.get("http://localhost:3000/login", {search: params})
      .map(res => res.json())
      .subscribe((response) => {
        if(response.length > 0) {
          this.message = "";
          // 存储用户信息
          sessionStorage.setItem("username", this.username);
          sessionStorage.setItem("id", response[0].uid);
          // 界面跳转
          this.router.navigateByUrl("main");
        }
        else {
          this.message = "用户名和密码不匹配";
        }
        console.log(response);
      }, (error) => {
        console.error(error);
      });
  }
}
