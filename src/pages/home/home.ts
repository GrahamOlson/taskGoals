import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Difficulty } from '../../models/Difficulty';
import { Task } from '../../models/Task';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  tasks: Task[] = [
    {
      id: '',
      title: "my first task",
      content: "please let this work",
      complete: true,
      difficulty: Difficulty.Easy,
    },
    {
      id: '',
      title: "this is another task",
      content: "format ion card to look nice and add data structure for goals",
      complete: false,
    },
  ];

  constructor(public navCtrl: NavController) {

  }

}
