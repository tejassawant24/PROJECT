import { Component } from "@angular/core";

@Component({
  selector: "app-send",
  templateUrl: `../assignment6/parent.component.html`,
  styleUrls: [`../assignment6/parent.component.css`]
})
export class List {
  tv;
  ac: Array<object>;
  laptop: Array<object>;
  mobile: Array<object>;
  viewdata: string;
}
