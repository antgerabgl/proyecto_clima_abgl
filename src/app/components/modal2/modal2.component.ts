import { Component } from "@angular/core";
import { ClimaService } from "../../services/clima/clima.services";

@Component({
  selector: "app-modal2",
  templateUrl: "./modal2.component.html",
  styleUrls: ["./modal2.component.css"]
})
export class ModalComponent2 {
  climaArrayServ_Comp: any = [];
  constructor(private _climaService: ClimaService) {
    console.log("Constructor -> modal2.comp_ts");
    // this.getUNClimaModal2(1);
  }

  getUNClimaModal2(id: any) {
    console.log("getUNClima -> modal2.comp_ts", id);
    this.climaArrayServ_Comp = this._climaService.getUNClima(id);
    console.log("CLIMA", this.climaArrayServ_Comp);
  }
}
