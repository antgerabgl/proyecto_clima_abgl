import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styleUrls: ["./consulta.component.css"]
})
export class ConsultaComponent {
  pais: string;
  ciudad: string;
  @Input() objConsultaEmit: any;

  @Output() ConsultaClima: EventEmitter<any> = new EventEmitter();

  realizarBusqueda() {
    console.log("TEST1 realizarBusquedaFuncion -> consulta.comp_ts");
    let objclima: any = {
      pais: this.pais,
      ciudad: this.ciudad
    };

    console.log("TEST2 manda a emit -> app.comp_ts ", objclima);
    this.ConsultaClima.emit({ objConsultaEmit: objclima });

    console.log("valorBusqueda consulta.component:", this.objConsultaEmit);
    console.log("SALIDA consulta component:", objclima);
    //Limpia campos
    this.pais = "";
    this.ciudad = "";
  }
}
