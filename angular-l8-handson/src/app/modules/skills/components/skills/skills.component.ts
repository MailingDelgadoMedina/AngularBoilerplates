import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/shared/models/skill';
import { SkillsService } from 'src/app/modules/skills/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  dataService: SkillsService;

  constructor(private skillsService: SkillsService) {
    this.dataService = skillsService;
  }

  ngOnInit(): void {
    this.dataService.getSkills().subscribe((skills) => (this.skills = skills));
  }
}
