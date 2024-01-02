import { Component } from '@angular/core';
import {en, faker} from '@faker-js/faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wort';
  myFaker  = faker.lorem.sentence() ; 
  myInput:string = '' ; 
  can = 'incorrect' ; 
  myInputText(value:string)
  {
    this.myInput = value ; 
  }
  compare(radomLetter:string , enteredLetter:string)
  {
    if (!enteredLetter)
    {
        return "pennding"
    }
    if (radomLetter===enteredLetter)
    {
      return "correct"
    }
    else 
    {
      return "incorrect"
    }
  }


}
