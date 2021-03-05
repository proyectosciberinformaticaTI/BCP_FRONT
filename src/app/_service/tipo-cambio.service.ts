import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TipoCambio} from '../_model/TipoCambio';
import {Subject} from 'rxjs';
import {HOST} from '../_shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class TipoCambioService {

  url: string = `${HOST}/api`;
  tipoCambioUpdate = new Subject<TipoCambio[]>();
  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<TipoCambio[]>(this.url);
  }

  listarTipoCambioPorId(id: number){
    return this.http.get<TipoCambio>(`${this.url}/${id}`);
  }

  modificar(tipoCambio:TipoCambio, id:number){
    return this.http.put(`${this.url}/${id}`, tipoCambio);
  }
}
