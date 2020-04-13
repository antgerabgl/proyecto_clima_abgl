import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ClimaService {
  varConsulta = [];
  test = [
    {
      pais: "PAIS TEST",
      ciudad: "CIUD TEST",
      grados: "21"
    }
  ];
  constructor(private http: HttpClient) {}

  URL_SERVICECONST: string =
    "https://crudcrud.com/api/46add7683ae74576aeaecf78040aeb3c/";

  varConsultaMetodo(objetoClima: any) {
    console.log("RECIBE VARIABLES", objetoClima);
    this.varConsulta.push(objetoClima);
    console.log("ARREGLO ", this.varConsulta);
  }

  getUNClima(id: any) {
    console.log("SERVICIO ID getUNClima -> clima.serv_ts", id);

    return this.test;
  }

  getALLClimas() {
    let URL_SERVICE = this.URL_SERVICECONST + "climasjson";
    return this.http.get(URL_SERVICE);
  }

  addClima(clima: any) {
    let URL_SERVICE = this.URL_SERVICECONST + "climasjson";
    console.log("URL_SERVICE  :", URL_SERVICE);
    console.log("EL CLIMA LOG:", clima);
    this.http.post(URL_SERVICE, clima).subscribe(res => {
      console.log("URL_SERVICE2:", URL_SERVICE);
    });
  }

  editarClima(id: any, clima: any) {
    console.log("edit servicio TEST1");
    let URL_SERVICE = this.URL_SERVICECONST + "climasjson/" + id;
    console.log("edit TEST2", clima);
    this.http.put(URL_SERVICE, clima).subscribe(res => {});
    console.log("edit TEST3", URL_SERVICE, clima);
    console.log("URL_SERVICE:", URL_SERVICE);
  }

  deleteClimaService(id: any) {
    console.log("DELETE SERVICIO JSON 1", id);
    let URL_SERVICE = this.URL_SERVICECONST + "climasjson/" + id;
    console.log("DELETE SERVICIO JSON 2", id, URL_SERVICE);
    return this.http.delete(URL_SERVICE).subscribe(res => {});
  }
}
