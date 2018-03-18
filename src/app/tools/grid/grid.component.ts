import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { GridcolumnComponent } from '../gridcolumn/gridcolumn.component';
import { PagerService } from '../../service/pager.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit, OnChanges {
  Math: any;
  keyword:any = '';
  @Input() dataset: any[] = [];
  @Input() page = 1;
  @Input() size: any = 10;
  @Input() sortColumn: any  = '';
  @Input() sortDirection: any = 1;
  @Input() rows: any = 0;
  @Output() handler: EventEmitter<any> = new EventEmitter<any>();
  eventOutput = {
    page:this.page,
    size:this.size,
    keyword:this.keyword,
    sortColumn:this.sortColumn,
    sortDirection:this.sortDirection
  }
  columns: GridcolumnComponent[] = [];
  totalPages:any;
  pager: any = {};
  pagedItems: any[];

  ngOnChanges(changes: any): void { 
    this.rows = changes.rows.currentValue;
    this.setPage(this.page);
  }
  constructor(private pagerService:PagerService) {
    this.Math = Math;  
  }
  ngOnInit() { }
  
  addColumn(column: any) {
    this.columns.push(column);
  }
  setPage(page: number) {
    this.page = page;
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    this.handleEvent();
    this.pager = this.pagerService.getPager(this.rows, page);
  }
 
  viewImg(img: any) {
    if (img == null || img === '' || img === undefined) {
      return '/assets/img/noimg.jpg';
    } else {
      return img;
    }
  }

  

  onSort(column: any, direction: any) {
    this.sortColumn = column;
    this.sortDirection = direction;
    this.handleEvent();
  }
  search(event){
    if(event.keyCode == 13){
      this.handleEvent();
    }
  }

  handleEvent(){
    this.eventOutput = {
      page:this.page,
      size:this.size,
      keyword:this.keyword,
      sortColumn:this.sortColumn,
      sortDirection:this.sortDirection
    }
    console.log("hello")
    this.handler.next(this.eventOutput);
  }

}
