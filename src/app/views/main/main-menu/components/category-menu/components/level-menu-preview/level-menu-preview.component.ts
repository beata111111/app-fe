import {Component, Input, OnInit} from '@angular/core';
import {LevelStatus} from "@model";
import {getStatusColor} from "@helpers";

@Component({
  selector: 'app-level-menu-preview',
  templateUrl: './level-menu-preview.component.html',
  styleUrls: ['./level-menu-preview.component.scss']
})
export class LevelMenuPreviewComponent implements OnInit {
  @Input() levels: LevelStatus[] = [];

  sortedResults: string[] = [];

  ngOnInit() {
    this.sortedResults = this.levels
      .map(l => l.variants)
      .flat()
      .map(v => v.enabled ? v.result : 0)
      .sort((a,b) => b - a)
      .map(result => {
        return getStatusColor(result);
      })
  }
}
