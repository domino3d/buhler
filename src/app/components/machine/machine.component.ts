import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MachineStatus } from '@app/models/machine-status.enum';
import { Machine } from '@app/models/machine-status.interface';
import { MachineService } from '@app/services/machine.service';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { OverviewComponent } from '@components/overview/overview.component';

@Component({
  selector: 'app-machine',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NavigationComponent,
    OverviewComponent,
    MachineComponent,
  ],
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss'],
})
export class MachineComponent {
  @Input() machine!: Machine;

  constructor(private machineService: MachineService) {}

  getStatusIcon(status: MachineStatus): string {
    return this.machineService.getStatusIcon(status);
  }
}
