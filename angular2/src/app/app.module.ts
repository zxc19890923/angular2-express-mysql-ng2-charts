import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
// 引入安装的bootstrap 弹窗模块
import {AlertModule} from "ng2-bootstrap";
// highcharts
import {ChartModule} from "angular2-highcharts";
// ng2-charts
import {ChartsModule} from "ng2-charts/ng2-charts";
// 引入路由模块
import {RouterModule, Routes} from "@angular/router";
// 定义路由
const appRoutes:Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "info",
        component: MyInfoComponent
      },
      {
        path: '**', redirectTo: "home"
      }
    ]
  },
  // 如果地址栏中输入没有定义的路由就跳转到one路由界面
  {
    path: '**', redirectTo: "login"
  }
];

// 组件
import {AppComponent} from './app.component';
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";
import {HomeComponent} from "./home.component";
import {MainComponent} from "./main.component";
import {MyInfoComponent} from "./my-info.component";
import {DataComponent} from "./data.component";
import {StepComponent} from "./step.component";
import {DistanceComponent} from "./distance.component";
import {WeightComponent} from "./weight.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MainComponent,
    MyInfoComponent,
    DataComponent,
    StepComponent,
    DistanceComponent,
    WeightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ChartModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
