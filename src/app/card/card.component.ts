import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

export interface CardData {
  imageId: string;
  state: "default" | "flipped" | "matched";
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger("cardFlip", [
      state(
        "default",
        style({
          transform: "none"
        })
      ),
      state(
        "flipped",
        style({
          transform: "rotateY(180deg)"
        })
      ),
      state(
        "matched",
        style({
          visibility: "false",
          transform: "scale(0.05)",
          opacity: 0
        })
      ),
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("400ms")]),
      transition("* => matched", [animate("400ms")])
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() Count: number;
  data: CardData[] = [];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      for (var i = 1; i <= this.Count; i++) {
        this.data.push(
          {
            imageId: "pDGNBK9A0sk" +i,
            state: "default"

          })
      }
      this.cd.detectChanges();
    }, 0)
  }

  cardClicked(id) {
    if (id.state === "default") {
      id.state = "flipped";
    } else {
      id.state = "default";
    }
  }

}
