import { Component, OnInit, ViewChild } from '@angular/core';
//import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'opportunities',
  templateUrl: './opportunities.component.html',
})
export class OpportunitiesComponent implements OnInit {
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
    return (
      '<div><span style="border-radius: 50% !important;width: 36px;height: 36px;padding: 6px;background: green;color: white;text-align: center;font: 9px Arial, sans-serif;">' +
      +(params.rowIndex + 1) +
      '</span><span style="padding-left:10px;top:100px;">' +
      params.value +
      '</span></div>'
    );
  };
  customActions1 = function (params) {
    if (params.rowIndex < 3)
      return (
        '<div><span style="border-radius: 50% !important;width: 36px;height: 36px;padding: 6px;background: green;color: white;text-align: center;font: 9px Arial, sans-serif;">' +
        +(params.rowIndex + 7) +
        '</span><span style="padding-left:10px;top:100px;">' +
        params.value +
        '</span></div>'
      );

    return (
      '<div><span style="border-radius: 50% !important;width: 36px;height: 36px;padding: 6px;background: green;color: white;text-align: center;font: 9px Arial, sans-serif;">' +
      (params.rowIndex < 3 ? params.rowIndex + 7 : params.rowIndex + 7) +
      '</span><span style="padding-left:10px;top:100px;">' +
      params.value +
      '</span></div>'
    );
  };
  columnDefs = [
    {
      headerName: 'Opportunities',
      field: 'Opportunities',
      cellClass: 'circle',
      width: 500,
      cellRenderer: this.customActions,
    },
    {
      headerName: '',
      field: 'Opportunities1',
      cellClass: 'circle',
      width: 500,
      cellRenderer: this.customActions1,
    },
  ];

  ngOnInit() {
    this.rowData$ = [
      {
        Opportunities: 'Enhancement of on screen notifications',
        Opportunities1:
          'Improving upstream system checks and identify input errors',
      },
      {
        Opportunities:
          'Enhance Client Correspondence and on screen notifications',
        Opportunities1: 'Inform clients when ACH payments was returned',
      },
      {
        Opportunities:
          'Enhancement of Client Correspondence / on screen notifications',
        Opportunities1:
          'Implement functionality to stop ACH payments in Mobile',
      },
      {
        Opportunities: 'Enhance Client Correspondence',
        Opportunities1:
          'Implement functionality to stop ACH payments in Online/Mobile',
      },
      {
        Opportunities:
          'Move management of ACH returns from GWA to workflow tool (GIN)',
        Opportunities1: 'Enhance on screen notifications Online',
      },
      {
        Opportunities: 'Increase automation to reduce breaks',
        Opportunities1: 'Enhance on screen notifications',
      },
    ];
    // this.rowData$2 = [
    //   {
    //     Opportunities: 'Enhancement of on screen notifications',
    //     Opportunities1:
    //       'Improving upstream system checks and identify input errors',
    //   },
    //   {
    //     Opportunities:
    //       'Enhance Client Correspondence and on screen notifications',
    //       Opportunities1: 'Inform clients when ACH payments was returned',
    //   },
    //   {
    //     Opportunities:
    //       'Enhancement of Client Correspondence / on screen notifications',
    //       Opportunities1:
    //       'Implement functionality to stop ACH payments in Mobile',
    //   },
    //   {
    //     Opportunities: 'Enhance Client Correspondence',
    //     Opportunities1:
    //       'Implement functionality to stop ACH payments in Online/Mobile',
    //   },
    //   {
    //     Opportunities:
    //       'Move management of ACH returns from GWA to workflow tool (GIN)',
    //       Opportunities1: 'Enhance on screen notifications',
    //   },
    //   {
    //     Opportunities: 'Increase automation to reduce breaks',
    //   },
    //   {
    //     Opportunities1:
    //       'Improving upstream system checks and identify input errors',
    //   },
    //   {
    //     Opportunities1: 'Inform clients when ACH payments was returned',
    //   },
    //   {
    //     Opportunities1:
    //       'Implement functionality to stop ACH payments in Mobile',
    //   },
    //   {
    //     Opportunities1:
    //       'Implement functionality to stop ACH payments in Online/Mobile',
    //   },
    //   {
    //     Opportunities1: 'Enhance on screen notifications',
    //   },
    // ];
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
