import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GridcolumnComponent } from '../gridcolumn/gridcolumn.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit, OnChanges {

  @Input() dataset: any[] = [];
  @Input() allowDelete = false;
  @Input() allowFooter = false;
  @Input() allowPagination = true;
  @Input() page = 1;
  @Input() size: any = 10;
  @Input() sortColumn: any;
  @Input() sortDirection: any = 1;
  @Input() rows: any = 0;
  columns: GridcolumnComponent[] = [];

  ngOnChanges(changes: any): void { }
  constructor() {
    console.log(this.rows);
   }
  ngOnInit() { }
  addColumn(column: any) {
    this.columns.push(column);
  }

  viewImg(img: any) {
    console.log(img);
    if (img == null || img === '' || img === undefined) {
      return '/assets/img/noimg.jpg';
    } else {
      return img;
    }
  }

  onSort(column: any, direction: any) {
    this.sortColumn = column;
    this.sortDirection = direction;
    console.log(this.sortColumn);
    console.log(this.sortDirection);
  }

}
