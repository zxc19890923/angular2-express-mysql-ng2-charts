import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Jsonp, URLSearchParams} from "@angular/http";
import {Md5} from "ts-md5/dist/md5";

@Component({
  selector: "my-register",
  templateUrl: "./templates/register.html"
})

export class RegisterComponent {
  message:string;
  username:string;
  password:string;
  sure_password:string;
  email:string;
  address:string;
  position: string;

  constructor(public router:Router, public jsonp:Jsonp) {
    this.message = "";
    this.address = "";
    this.position = "ios";
  }

  registerHandel() {
    if (this.password != this.sure_password) {
      this.message = "两次输入密码不一致";
      return false;
    }
    else {
      // 定义正则表达式规则
      var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (!myreg.test(this.email)) {
        this.message = "邮箱格式不正确";
        return false;
      }
      else {
        var params = new URLSearchParams();
        params.set("username", this.username);
        params.set("password", Md5.hashStr(this.password).toString());
        params.set("address", this.address);
        params.set("email", this.email);
        params.set("position", this.position);
        params.set("callback", "JSONP_CALLBACK");

        console.log(params.toString());
        // 插入数据库
        this.jsonp.get("http://localhost:3000/register", {search: params}).map(result=>result.json()).subscribe(res=> {
            console.log(res);
          },
          err=> {
            console.log(err);
          });
        this.message = "";
        // 跳转到登录界面
        this.router.navigateByUrl("login");
      }
    }
  }
}
