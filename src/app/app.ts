import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  //Array to store students
  students:any[]=[];
  //Arraya to store weather data
  weather:any[]=[];
  //inject dataService into constructor
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    //Call service to get student data
    this.dataService.GetStudentData().subscribe(
      (data)=>{
          //Store students from api response
          this.students = data.students;
          console.log(this.students);
      }
    );
    //Call service to get weather data
    this.dataService.GetWeatherData().subscribe(
      (data)=>{
          //Store weather info
          this.weather = data.weather;
          console.log(this.weather);
      }
    )
  }
}
