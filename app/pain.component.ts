import { Component } from '@angular/core';

@Component({
  selector: 'pain',
  templateUrl: './pain.component.html',
})
export class PainComponent {
  customActions = function (params) {
    return (
      '<div><span style="border-radius: 50% !important;width: 34px;padding: 8px;background: green;color: white;text-align: center;font: 9px Arial, sans-serif;">1</span><span style="padding-left:10px;top:100px;">' +
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

  rowData = [
    {
      'Pain Points': 'Client may input information incorrectly',
    },
  ];
}
