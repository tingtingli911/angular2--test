import { Component } from '@angular/core';

import { Logger } from './logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(logger: Logger) {
		logger.log("init app");
	}
  title = 'app works!';

	this.logger.log('you enter log');
  // log() {

  // }
}
