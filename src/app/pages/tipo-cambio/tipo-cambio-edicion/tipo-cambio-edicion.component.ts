import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {TipoCambio} from '../../../_model/TipoCambio';
import {TipoCambioService} from '../../../_service/tipo-cambio.service';

@Component({
  selector: 'app-tipo-cambio-edicion',
  templateUrl: './tipo-cambio-edicion.component.html',
  styleUrls: ['./tipo-cambio-edicion.component.css']
})
export class TipoCambioEdicionComponent implements OnInit {

  id: number;
  form: FormGroup;
  edicion: boolean = false;
  tipoCambio: TipoCambio;

  constructor(private route: ActivatedRoute, private router: Router, private tipoCambioService: TipoCambioService) {

  }

  ngOnInit(): void {
    this.tipoCambio = new TipoCambio();
    this.route.params.subscribe( (params: Params) => {
      this.id = params['id'];
      this.edicion = params['id'] != null;
      this.initForm();
    });
  }

  initForm(){
    if (this.edicion){
      this.tipoCambioService.listarTipoCambioPorId(this.id).subscribe(data => {
        this.form = new FormGroup({
          'id' : new FormControl(data.id),
          'monedaOrigen' : new FormControl(data.monedaOrigen),
          'monedaDestino' : new FormControl(data.monedaDestino),
          'tipoCambio' : new FormControl(data.tipoCambio),
        });
      });
    }
  }

  operar(){
    this.tipoCambio.id = this.form.value['id'];
    this.tipoCambio.monedaOrigen = this.form.value['monedaOrigen'];
    this.tipoCambio.monedaDestino = this.form.value['monedaDestino'];
    this.tipoCambio.tipoCambio = this.form.value['tipoCambio'];

    if (this.edicion){
      this.tipoCambioService.modificar(this.tipoCambio, this.tipoCambio.id).subscribe(data => {
        this.tipoCambioService.listar().subscribe(tipoCambio => {
          this.tipoCambioService.tipoCambioUpdate.next(tipoCambio);
          this.tipoCambioService.mensajeCambio.next('Se modificó');
        });
      });
    }
    this.router.navigate(['tipo-cambio']);
  }
}
