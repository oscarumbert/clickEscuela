import { Message } from '../../app/models/Message';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService 
{

messagesList: Message[]

constructor() 
{ 
  this.messagesList=[]
  this.messagesList.push(new Message("Profesor Gabriel","Buenos dias. Sres papas le informamos que el dia 25/05 sera el acto del dia de la revolución de Mayo.","Mensaje",new Date()))
  this.messagesList.push(new Message("Calificacion Tarea","Leandro tiene una nueva calificacion por la tarea de geografia.","Mensaje",new Date()))
  this.messagesList.push(new Message("Pago de cuota","Sres Padres le informamos que al dia de la fecha adeuda la cuota de noviembre, le pedimos por favor que regularize el pago.","Mensaje",new Date()))

  this.messagesList.push(new Message("Cierre del establecimiento","Sres Padres el dia de la fecha el establecimiento permanecera cerrado por tareas de fumigacion","Notificacion",new Date()))
  this.messagesList.push(new Message("Calificacion Tarea","Leandro tiene una nueva calificacion por la tarea de geografia.","Notificacion",new Date()))
  this.messagesList.push(new Message("Pago de cuota","Sres Padres le informamos que al dia de la fecha adeuda la cuota de noviembre, le pedimos por favor que regularize el pago.","Notificacion",new Date()))


}

get messageList(){
  return this.messagesList
}

}
