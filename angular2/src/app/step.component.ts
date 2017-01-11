import {Component} from "@angular/core";
@Component({
  selector: "my-step",
  templateUrl: "./templates/step.html"
})
export class StepComponent {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['9点', '10点', '11点', '12点', '13点', '14点', '15点', "18点", "22点"];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 200, 1000, 2000, 4000, 5000, 8000, 9000, 10000], label: '步数'}
  ];

}
