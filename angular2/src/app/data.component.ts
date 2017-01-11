import {Component, OnInit} from "@angular/core";
import {Jsonp, URLSearchParams} from "@angular/http";
import "rxjs/operator/map";
@Component({
  selector: "my-data",
  templateUrl: "./templates/data.html"
})
export class DataComponent {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['步数', '体重', '消耗', '运动量'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [20000, 65, 1000, 1000], label: '统计'}
  ];
  data:Array<Object>;
  constructor(public jsonp:Jsonp) {

  }

  ngOnInit() {
    var params = new URLSearchParams();
    params.set("id", sessionStorage.getItem("id"));
    params.set("callback", "JSONP_CALLBACK");
    console.log(params.toString());
    this.jsonp.get("http://localhost:3000/data", {search: params})
      .map(result=>result.json())
      .subscribe(res=> {
        this.data = res;
        console.log(res);
      });
  }
}
