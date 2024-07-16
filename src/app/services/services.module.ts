import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MachineService } from '@services/machine.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [MachineService, HttpClientModule],
})
export class ServicesModule {}
