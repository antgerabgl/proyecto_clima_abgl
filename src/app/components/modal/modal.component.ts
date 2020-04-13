import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent {
  @Input() id: string;
  @Input() pais: string;
  @Input() ciudad: string;
  @Input() grados: number;
  @Input() modalclima: any;

  @Output() AlmacenaClima: EventEmitter<any> = new EventEmitter();

  //Para mandar los datos del modal a tarjeta clima
  modalClimas() {
    console.log("modalClimas() -> modal.compon_ts");
    let varclima: any = {
      id: this.id,
      pais: this.pais,
      ciudad: this.ciudad,
      grados: this.grados
    };
    console.log("varclima", varclima);
    this.AlmacenaClima.emit({ modalclima: varclima });
    console.log("TEST modal component Salir");
    // this.id = "";
    this.pais = "";
    this.ciudad = "";
    this.grados = 0;
  }

  //Se tiene que limpiar campos del modal, si no sobreescribe ultimq tqrjeta de clima seleccionada
  cleanModal() {
    console.log("LIMPIANDO MODAL FORM -> modal.comp_ts");
    this.id = "";
    this.pais = "";
    this.ciudad = "";
    this.grados = null;
    console.log("saliendo LIMPIANDO MODAL FORM");
  }
}
