import { Component, Input, OnInit } from '@angular/core';
import { TipServiceService } from 'src/app/services/tip-service.service';

@Component({
  selector: 'app-tip-button',
  templateUrl: './tip-button.component.html',
  styleUrls: ['./tip-button.component.css']
})
export class TipButtonComponent implements OnInit {

  @Input() value!: string;
  public type: string = 'normal';

  public currentType: string;

  constructor(private _tipService: TipServiceService) {
    this.currentType = this.type;
  }

  ngOnInit(): void {
    this.currentType = this.type;
  }

  setActive(){
    if(this.currentType != 'active'){
      this.currentType = 'active'
      this._tipService.updatePercentTip(+this.value);
    }
    else{
      this.currentType = this.type;
    }
  }

}
