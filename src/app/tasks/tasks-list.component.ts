import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: [ './tasks-list.component.scss' ]
})
export class TasksListComponent {

  user: any;
  data: any = {};
  actualItem: string;
  pickColor = false;  
  submiting = false;
  moreOptions = false;
  tasksList: any[] = [];
  actualItems: any[] = [];

  paintAll() {
    this.tasksList.forEach((task: any) => {
      $(`#task-${task.name}`).css('background-color', task.color);
    })
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submiting = true;

      if (this.data) {
        this.create();
      }
    }
  }

  checked(task: any, item: any) {
    item.checked = !item.checked;

    let indexTask = this.tasksList.indexOf(task);
    let indexItem = task.items.indexOf(item);

    if (indexItem) {
      task.splice(indexItem, 1, item);
      if (indexTask) {
        this.tasksList.splice(indexItem, 1, task);
      }
    }
  }

  chooseColor(color: string) {
    this.data.color = color;
    this.pickColor = false;
    $('#color-picker').addClass(`pick-${color}-border`);
    $('#color-picker').addClass(`pick-${color}`);
  }

  private sendItem() {
    if (this.actualItem) {
      this.actualItems.push({ name: this.actualItem, checked: false });
      this.data.items = this.actualItems;
      this.actualItem = '';
    }
  }

  private create() {
    this.tasksList.push(this.data);
    this.resetForm();
  }

  private moreOptionsClicked() {
    this.moreOptions = !this.moreOptions;    
    
    if (!this.moreOptions) {
      this.resetOptions();
    }
  }

  private resetOptions() {
    this.actualItem = '';
    this.moreOptions = false;
    this.actualItems = [];
  }

  private resetForm() {
    this.resetOptions();
    $('#color-picker').removeClass(`pick-${this.data.color}-border`);
    $('#color-picker').removeClass(`pick-${this.data.color}`);
    this.data = {};
  }

}
