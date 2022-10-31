import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  project: string;
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.project = params['id'];
      console.log(this.project);
    })
  }

  todo = [
    {
      title: 'Levantamiento de ambientes', 
      ETA: '3 hrs',
      tags: [
        { title:'Backend', color: 'bg-green-500' },
        { title:'Plataforma', color: 'bg-blue-500' }
      ] as any
    }, 
    {
      title: 'Bug al enviar venta sin cliente', 
      ETA: '5 hrs',
      tags: [
        { title:'Hotfix', color: 'bg-red-500' }
      ]
    },
    {
      title: 'Certificacion de venta', 
      ETA: '5 hrs',
      tags: [
        { title:'Feature', color: 'bg-teal-500' }
      ]
    },
    {
      title: 'Cancelar venta', 
      ETA: '8 hrs',
      tags: [
        { title:'Backend', color: 'bg-green-500' },
        { title:'Feature', color: 'bg-teal-500' },
        { title:'Documentacion', color: 'bg-blue-500' }
      ] as any
    },
  ];

  doing = [
    {
      title: 'Reporte de ventas', 
      ETA: '3 hrs',
      tags: [
        { title:'Documentacion', color: 'bg-gray-500' }
      ] as any
    },
    {
      title: 'Implementacion dashboard', 
      ETA: '3 hrs',
      tags: [
        { title:'Plataforma', color: 'bg-blue-500' }
      ] as any
    },
    {
      title: 'No muestra el No. de orden', 
      ETA: '3 hrs',
      tags: [
        { title:'Hotfix', color: 'bg-red-500' },
        { title:'Plataforma', color: 'bg-blue-500' }
      ] as any
    }
  ];
  done = [
    {
      title: 'Webservice de actualizacion de inventarios', 
      ETA: '8 hrs',
      tags: [
        { title:'Documentacion', color: 'bg-gray-500' }
      ] as any
    },
    {
      title: 'API actualizacion de inventarios', 
      ETA: '7 hrs',
      tags: [
        { title:'Feature', color: 'bg-teal-500' },
        { title:'Plataforma', color: 'bg-blue-500' }
      ] as any
    },
  ];
  qa = [
    {
      title: 'Pago con tarjeta de credito', 
      ETA: '7 hrs',
      tags: [
        { title:'Feature', color: 'bg-teal-500' }
      ] as any
    },
    {
      title: 'Reembolso venta', 
      ETA: '7 hrs',
      tags: [
        { title:'Feature', color: 'bg-teal-500' }
      ] as any
    },
    {
      title: 'Carrito de compras responsive', 
      ETA: '7 hrs',
      tags: [
        { title:'Fix', color: 'bg-red-500' }
      ] as any
    },
    {
      title: 'Actualizacion de inventario segun webservice de telefonos', 
      ETA: '7 hrs',
      tags: [
        { title:'Feature', color: 'bg-teal-500' },
        { title:'Backend', color: 'bg-green-500' }
      ] as any
    }
  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
