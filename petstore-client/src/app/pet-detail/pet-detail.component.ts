import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../model/pet';
import { PetService } from "src/app/services/pet.service";
import {OrderService} from "../services/order.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  private pet: Pet;

  constructor(
    private petService: PetService,
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPet();
  }

  getPet() {
    this.petService.getSelectedPet()
      .subscribe(pet => this.pet = pet);
  }

  onOrder(pet: Pet){
    this.orderService.orderPet(pet).subscribe(data => {
      this.router.navigate(['/home/orders']);
    })
  }
}
