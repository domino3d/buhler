import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineComponent } from '@components/machine/machine.component';
import { Machine } from '@app/models/machine-status.interface';
import { MachineService } from '@app/services/machine.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, MachineComponent],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  machines: Machine[] = [];

  constructor(private machineService: MachineService) {}

  ngOnInit(): void {
    this.machineService
      .getMachines()
      .subscribe((data) => (this.machines = data));
  }
}
