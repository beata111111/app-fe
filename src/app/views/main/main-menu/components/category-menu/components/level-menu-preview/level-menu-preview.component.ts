import {Component, Input, OnInit} from '@angular/core';
import {LevelStatus} from "@model";

@Component({
  selector: 'app-level-menu-preview',
  templateUrl: './level-menu-preview.component.html',
  styleUrls: ['./level-menu-preview.component.scss']
})
export class LevelMenuPreviewComponent implements OnInit {
  @Input() levels: LevelStatus[] = [];

  sortedResults: string[] = [];

  color100 = '#6fe594';
  color80 = '#aee58f';
  color60 = '#cfe397';
  color40 = '#FACD84';
  color20 = '#f6a678';
  colorDisabled = '#f1f1f1';
  colorDefault = '#c8c8c8'

  ngOnInit() {
    this.sortedResults = this.levels
      .map(l => l.variants)
      .flat()
      .map(v => v.result)
      .sort((a,b) => b - a)
      .map(result => {
        if (result === 100) {
          return this.color100;
        } else if (result >= 80) {
          return this.color80;
        } else if (result >= 60) {
          return this.color60;
        } else if (result >= 40) {
          return this.color40;
        } else if (result >= 20) {
          return this.color20;
        } else {
          return '#c8c8c8';
        }
      })
  }
}
