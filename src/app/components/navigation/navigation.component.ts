import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Machine } from '@app/models/machine-status.interface';
import { MachineService } from '@app/services/machine.service';
import { timer } from 'rxjs/internal/observable/timer';
import { map } from 'rxjs/internal/operators/map';
import { MachineStatus } from '@app/models/machine-status.enum';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  machines: Machine[] = [];
  currentDate = new Date();

  constructor(private machineService: MachineService) {}

  ngOnInit(): void {
    this.machineService
      .getMachines()
      .subscribe((data) => (this.machines = data));

    // timer(0, 60 * 1000) // 1 minute
    timer(0, 1000)
      .pipe(map((x) => (this.currentDate = new Date())))
      .subscribe();
  }

  getStatusIcon(status: MachineStatus): string {
    return this.machineService.getStatusIcon(status);
  }
}
