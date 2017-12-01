import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

import { TasksService } from '../shared/services/tasks.service';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: [ './tasks-list.component.scss' ]
})
export class TasksListComponent implements OnInit {

  user: any;
  data: any = {};
  actualItem: string;
  saveButton: string = 'Criar';
  editingTask: any;
  pickColor = false; 
  messageError = false; 
  submiting = false;
  moreOptions = false;
  tasksList: any[] = [];
  actualItems: any[] = [];

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit() {
    $('#input-name').bind("enter-key", (event: any) => { this.sendItem(); });
    $('#input-name').keyup((event: any) => {
      if(event.keyCode == 13)
      { $(this).trigger("enter-key"); }
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submiting = true;

      if (this.data) {
        this.create();
      }
    } else {
      this.messageError = true;
    }
  }

  startText(task: any) {
    if (task !== undefined) {
      this.messageError = false;

      if (task.length >= 2) {
        this.moreOptions = true;
      }
    }

    $('form').bind("enter-key", (event: any) => { this.sendItem(); });
    $('form').keyup((event: any) => {
      if(event.keyCode == 13)
      { $(this).trigger("enter-key"); }
    });
  }

  newItem() {
    $('form').on('keyup keypress', function(e) {
      var keyCode = e.keyCode || e.which;
      if (keyCode === 13) {
        e.preventDefault();
        return false;
      }
    });
  }

  onClickEdit(task: any) {
    this.moreOptions = true;
    this.data = task;
    this.editingTask = task;
    this.actualItems = this.data.items;
    this.saveButton = 'Salvar';
  }

  checked(task: any, item: any) {
    item.checked = !item.checked;

    let indexTask = this.tasksList.indexOf(task);
    let indexItem = task.items.indexOf(item);

    if (indexItem >= 0) {
      task.items.splice(indexItem, 1, item);
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

  deleteItem(item: any) {
    let index: number = this.actualItems.indexOf(item);

    if (index >= 0) {
      this.actualItems.splice(index, 1);
    }
  }

  private doneTask(task: any) {
    let index = this.tasksList.indexOf(task);
    task.done = true;

    if (index >= 0) {
      this.tasksList.splice(index, 1, task);
    }
  }

  private sendItem() {
    if (this.actualItem) {
      this.actualItems.push({ name: this.actualItem, checked: false });
      this.data.items = this.actualItems;
      this.actualItem = '';
    }
  }

  private create() {
    if (this.editingTask) {
      let index = this.tasksList.indexOf(this.data);

      if (index >= 0) {
        this.tasksList.splice(index, 1, this.data);
      }
    } else {
      this.tasksList.push(this.data);    
    }
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

  private getTasks() {
    this.tasksService
    .getTasks()
    .subscribe((tasks: any[]) => {
      console.log(tasks);
    });
  }

  private resetForm() {
    this.resetOptions();
    $('#color-picker').removeClass(`pick-${this.data.color}-border`);
    $('#color-picker').removeClass(`pick-${this.data.color}`);
    this.data = {};
    this.editingTask = {};
  }

}
