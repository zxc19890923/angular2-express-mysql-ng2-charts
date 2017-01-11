import {Component} from "@angular/core";
@Component({
  selector: "my-weight",
  templateUrl: "./templates/weight.html"
})
export class WeightComponent {
  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 66, 65, 67, 66, 65, 68], label: '体重'}
  ];
  public lineChartLabels:Array<any> = ['6点', '7点', '8点', '9点', '10点', '11点', '12点'];
  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
}
