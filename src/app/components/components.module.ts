import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from './navigation/navigation.component';
import { OverviewComponent } from './overview/overview.component';
import { MachineComponent } from './machine/machine.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NavigationComponent,
    OverviewComponent,
    MachineComponent,
  ],
  exports: [NavigationComponent, OverviewComponent, MachineComponent],
})
export class ComponentsModule {}
