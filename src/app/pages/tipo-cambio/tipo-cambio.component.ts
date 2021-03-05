import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {TipoCambio} from '../../_model/TipoCambio';
import {TipoCambioService} from '../../_service/tipo-cambio.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-tipo-cambio',
  templateUrl: './tipo-cambio.component.html',
  styleUrls: ['./tipo-cambio.component.css']
})
export class TipoCambioComponent implements OnInit {

  dataSource: MatTableDataSource<TipoCambio>;
  displayedColumns = ['id', 'monedaOrigen', 'monedaDestino', 'tipoCambio', 'acciones'];

  constructor(private tipoCambioService: TipoCambioService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.tipoCambioService.tipoCambioUpdate.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

    });

    this.tipoCambioService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.tipoCambioService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'Aviso', { duration: 2000 });
    });

  }
}
