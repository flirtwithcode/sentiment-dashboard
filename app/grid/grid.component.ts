import { Component, OnInit, ViewChild } from '@angular/core';
//import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  public rowData$: any;

  colDefs: ColDef[] = [
    { field: 'make', headerCheckboxSelection: true, checkboxSelection: true },
    { field: 'model' },
    { field: 'price', minWidth: 150 },
  ];

  public defaultColDef: ColDef = {};
  gridApi: any;

  constructor() {}
  customActions = function (params) {
    console.log(params, 'parmas');
    return (
      '<div><span style="border-radius: 50% !important;width: 36px;padding: 6px;background: #007bff;color: white;text-align: center;font: 9px Arial, sans-serif;">' +
      +(params.rowIndex + 1) +
      '</span><span style="padding-left:10px;top:100px;">' +
      params.value +
      '</span></div>'
    );
  };
  columnDefs = [
    {
      field: 'Pain Points',
      cellClass: 'circle',
      width: 500,
      cellRenderer: this.customActions,
    },
  ];

  ngOnInit() {
    this.rowData$ = [
      {
        'Pain Points': 'Client may input information incorrectly',
      },
      {
        'Pain Points': 'Improve resource optimization and training',
      },
      {
        'Pain Points': '35.7% Fully Manual Activities',
      },
      {
        'Pain Points': 'Gaps in data tracking and monitoring',
      },
      {
        'Pain Points': 'Transferred Multiple Times',
      },
      {
        'Pain Points': 'Client may input information incorrectly',
      },
    ];
    // this.rowData$ = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  onCellClicked(event: CellClickedEvent) {
    console.log(event);
  }

  //@ViewChild(AgGridAngular) agGrid!: AgGridAngular

  onGridReady(params: any) {
    this.gridApi = params.api;
  }
}
