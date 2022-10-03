import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {


  powers=['Really Smart','Super Flexible','Super Hot','Weather Changer'];

  model=new Hero(18,'Dr. IQ',this.powers[0],'Chuck Oveerstreet');

  submitted=false;

  onSubmit(){
    this.submitted=true;
  }

  newHero(){
    this.model=new Hero(42,'','');
  }

  showFormControls(form:any) {
    return form && form.controls.name && form.controls.name.value;
  }

  skyDog():Hero {
    const myHero=new Hero(42,'SkyDog','Fetch any object at any distance','Lesile Rollover');
  
    console.log('My hero is called '+myHero.name);
  
    return myHero;
  }

  
}


