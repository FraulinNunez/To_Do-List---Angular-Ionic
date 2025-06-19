import { Component, OnInit } from '@angular/core';
import { IonAlert, ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  isAlertOpen = false;
  alertButtons = ['Action'];
  categorias = ['Trabajo','Personal','Hogar', 'Deporte' , 'Leer' , 'Jugar'  ]
  newTaskObj={}
  nombreTarea: any
  fechaTarea: any
  prioridadTarea: any
  categoriaTarea: any

  tareaObjeto: any
  constructor(public modalCtrl: ModalController, public todoService: TodoService) { }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  ngOnInit() {
    
  }
  async dismis(){
    await this.modalCtrl.dismiss(this.tareaObjeto)
  }

  categoriaSeleccionada(index: any) {
   this.categoriaTarea = this.categorias[index]   
  }

  adicionarTarea(){
    console.log(this.tareaObjeto)
    console.log(this.nombreTarea , this.fechaTarea , this.prioridadTarea , this.categoriaTarea)
    // const { nombreTarea, fechaTarea, prioridadTarea, categoriaTarea } = this;

    if(this.nombreTarea && this.fechaTarea && this.prioridadTarea && this.categoriaTarea){
       this.tareaObjeto = ({nombreItem:this.nombreTarea, 
                      fechaItem:this.fechaTarea,                       
                      prioridadItem:this.prioridadTarea, 
                      categoriaItem:this.categoriaTarea})
    this.dismis()
    }else{
      console.log('por favor complete todos los datos')
      this.setOpen(true)
    }
 
  }

}
