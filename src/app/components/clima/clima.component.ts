import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-clima",
  templateUrl: "./clima.component.html",
  styleUrls: ["./clima.component.css"]
})
export class ClimaComponent {
  @Input() index: string = "";
  @Input() id: string = "";
  @Input() pais: string = "";
  @Input() ciudad: string = "";
  @Input() grados: string = "";

  @Input() editarTarjetaClima: any;
  @Input() borrarTarjetaClima: any;

  @Output() EditClima: EventEmitter<any> = new EventEmitter();
  @Output() borraTarjetaClima: EventEmitter<any> = new EventEmitter();

  deleteClimaFuncion(index: any, id: any) {
    console.log(
      "TEST1 de borrado clima individual -> clima.comp_ts",
      index,
      id
    );
    this.borraTarjetaClima.emit({ borrarTarjetaClima: index });
    console.log("SALIDA TEST1 de borrado clima individual", index, id);
  }

  editClimafuncion(id: any) {
    console.log("TEST EDIT -> clima.comp_ts", id);
    let objclima: any = {
      id: id,
      pais: this.pais,
      ciudad: this.ciudad,
      grados: this.grados
    };

    console.log("objclima", objclima);

    this.EditClima.emit({ editarTarjetaClima: objclima });
    console.log("editarTarjetaClima-> clima.comp_ts", this.editarTarjetaClima);
    console.log("SALIDA CLIMA -> clima.comp_ts");
  }
}
