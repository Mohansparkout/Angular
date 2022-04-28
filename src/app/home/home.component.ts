import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  heightlightColor = "black";
  isStyleApplied = false;
  name:string="Angular";
  heightlight(color: string) {
    this.heightlightColor = color;
  }
  toggleStyle() {
    this.isStyleApplied = !this.isStyleApplied;
  }
}
