import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Difficulty } from '../../models/Difficulty';
import { Task } from '../../models/Task';



// unsused at the momment
interface Goal {
  title: string;
  description: string;
  tasks: Task[];
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  tasks: Task[] = [
    {
      title: "my first task",
      content: "please let this work",
      complete: true,
      difficulty: Difficulty.Easy,
    },
    {
      title: "this is another task",
      content: "format ion card to look nice and add data structure for goals",
      complete: false,
    },
  ];

  constructor(public navCtrl: NavController) {

  }

}
