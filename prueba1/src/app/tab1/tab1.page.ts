import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  todoList: any []=[];
/*
  [{

    itemName : "Programando",
    itemDeuDate : "11-03-22",
    itemPriority: "Alta",
    itemCategory: "Proyectos",
  },
  {
      itemName : "Diseñando",
      itemDeuDate : "03-25-22",
      itemPriority: "Baja",
      itemCategory: "Diseños",
  },   
  {
      itemName : "Comprando",
      itemDeuDate : "03-28.22",
      itemPriority: "Intermedia",
      itemCategory: "Personales",
  },

  {
    itemName : "Ejercitando",
    itemDeuDate : "1-04-22",
    itemPriority: "Alta",
    itemCategory: "Personales",
  } 

]*/

      today : number = Date.now();

  constructor(public modalCtrl:ModalController) {}

 async AddTask() {
  const modal = await this.modalCtrl.create({
    component: AddNewTaskPage
  })

  modal.onDidDismiss().then(newTaskObj =>{
   //console.log(newTaskObj.data);

   this.todoList.push(newTaskObj.data)

  })
 return await modal.present()
  }

  delete(index: any) {
    this.todoList.splice(index, 1)
  }

}
