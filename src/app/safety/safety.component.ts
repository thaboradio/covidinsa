import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent implements OnInit {
safetyData = [{
 id: 1,
 Description: 'Wash your hands regularly with plenty of soap and water'
},
{
  id: 2,
  Description: 'Keep an alcohol-based sanitizer ready for times when soap and water are not available.'
},
{
  id: 3,
  Description: 'Don\'t touch your eyes, mouth or nose with unclean hands.'
},
{
  id: 4,
  Description: 'Keep Distance of at least 1 meter from anyone coughing or sneezing.'
},
{
  id: 5,
  Description: 'Follow no touch greetings to avoid spreading of germs.'
}];
  constructor() { }

  ngOnInit() {
  }
}
