import { Component, OnInit } from '@angular/core';
import { Fan } from '../../models/fan.model';
import { RandomUserResponse } from '../../models/random-user.model';
import { RandomUserService } from '../../services/random-user.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  fanName: string;
  fanAge: number;
  fanCountry: string;
  selectedTeam: string;

  madridFanList: Array<Fan>;
  barcelonaFanList: Array<Fan>;

  constructor(
    private randomUserService: RandomUserService,
  ) {
    this.fanName = '';
    this.fanAge = 0;
    this.fanCountry = '';
    this.selectedTeam = '';
    this.madridFanList = [ new Fan('Víctor', 31, 'Venezuela') ];
    this.barcelonaFanList = [ new Fan('Anibal', 31, 'Spain')];
  }

  ngOnInit(): void {
  }

  addNewFan(): void {
    const fan: Fan = new Fan(this.fanName, this.fanAge, this.fanCountry);

    if(this.selectedTeam === 'madrid') {
      this.madridFanList.push(fan);
    } else {
      this.barcelonaFanList.push(fan);
    }

    // Reset values
    this.fanName = '';
    this.fanAge = 0;
    this.fanCountry = '';

  }

  removeFan(index: number, team: string): void {
    if (team === 'madrid') {
      this.madridFanList.splice(index, 1);
    } else {
      this.barcelonaFanList.splice(index, 1);
    }
  }

  addRandomFan(team: string): void {
      this.randomUserService.getRandomUser().subscribe(result => {
        const randomUserResponse: RandomUserResponse = result;
        const name: string = randomUserResponse.results[0].name.first + ' ' + randomUserResponse.results[0].name.last;
        const age: number = randomUserResponse.results[0].dob.age;
        const country: string = randomUserResponse.results[0].location.country;
        const picture: string = randomUserResponse.results[0].picture.large;

        if (team === 'madrid') {
          this.madridFanList.push(new Fan(name, age, country, picture));
        } else {
          this.barcelonaFanList.push(new Fan(name, age, country, picture));
        }

      });
  }

}
