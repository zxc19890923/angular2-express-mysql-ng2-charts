import {Component} from "@angular/core";
@Component({
  selector: "my-distance",
  templateUrl: "./templates/distance.html"
})
export class DistanceComponent {
  // Doughnut
  public doughnutChartLabels:string[] = ['上午(卡路里)', '中午(卡路里)', '下午(卡路里)'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

}
