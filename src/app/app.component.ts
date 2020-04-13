import { Component } from "@angular/core";
import { ClimaService } from "./services/clima/clima.services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  climas: any = [];

  id: string = "";
  pais: string = "";
  ciudad: string = "";
  grados: string = "";

  constructor(private _climaService: ClimaService) {}

  ngOnInit() {
    //INIT DATOS
    console.log("ngOninit -> app.comp_ts");
    this.loadALLClimas();
  }

  ConsultaClimaFuncion(evento: any) {
    console.log("TEST1 ConsultaClimaFuncion");

    console.log("TEST2 ConsultaClimaFuncion");
  }

  showUnClima(evento: any) {
    console.log("showUnClima -> app.comp_ts", this.climas);
  }

  loadALLClimas() {
    console.log("LOAD ALL CLIMAS -> app.comp_ts");
    this._climaService.getALLClimas().subscribe(
      data => {
        console.log("TEST2 LOAD ALL CLIMAS -> app.comp_ts", this.climas);
        this.climas = data;
        console.log("TEST3 LOAD ALL CLIMAS -> app.comp_ts", this.climas);
      },
      error => {
        console.log(error);
      }
    );
  }

  editClimaEvento(evento: any) {
    console.log(
      "app.comp --> editClimaEvento <== clima.comp -> EditClima.emit"
    );
    console.log("EVENTO EDIT ID", evento.editarTarjetaClima.id);
    console.log("EVENTO EDIT PAIS", evento.editarTarjetaClima.pais);
    this.id = evento.editarTarjetaClima.id;
    this.pais = evento.editarTarjetaClima.pais;
    this.ciudad = evento.editarTarjetaClima.ciudad;
    this.grados = evento.editarTarjetaClima.grados;
    console.log("app.comp --> this.id", this.id);
    console.log("app.comp --> this.id", this.pais);
    console.log("SALIDA METODO EDITAR APP COMPO");
  }

  deleteClimaTarjeta(evento: any) {
    console.log("TEST3 de borrado padre componente ");
    this._climaService.deleteClimaService(this.id);
    this.climas.splice(evento.borrarTarjetaClima, 1);
    console.log("Salir TEST3");
  }

  modalClimaSave(evento: any) {
    console.log("TEST MODAL-APP_COMPO IN...");
    if (evento.modalclima.id === "") {
      console.log("evento MODAL-APP_COMPO id", evento.modalclima.id);
      console.log("TEST2");
      this._climaService.addClima(evento.modalclima);
      console.log("TEST3");
      this.climas.push(evento.modalclima);
      console.log("TEST4");
    } else {
      console.log("TEST id no nulo");
      let clima: any = {
        pais: evento.modalclima.pais,
        ciudad: evento.modalclima.ciudad,
        grados: evento.modalclima.grados
      };

      console.log(this.climas);
      console.log(evento.modalclima);
      console.log(clima);
      this._climaService.editarClima(evento.modalclima.id, clima);
      console.log("SERVICE EDIT FUERA");
      const index = this.climas.findIndex(
        (e: any) => e._id === evento.modalclima.id
      );
      this.climas[index] = evento.modalclima;
    }
    this.id = "";
    this.pais = "";
    this.ciudad = "";
    this.grados = "";
  }
}
