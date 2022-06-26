import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  constructor () {
    this.postForm = new FormGroup({
      titulo: new FormControl('', []),
      descripcion: new FormControl('', []),
      autor: new FormControl('', []),
      imagen: new FormControl('', []),
      fecha: new FormControl('', []),
      categoria: new FormControl('', [])
    }, []);
  }

  ngOnInit(): void {
  }

  guardar() {

  }

}
