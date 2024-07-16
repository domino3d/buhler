import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MachineStatus } from '@models/machine-status.enum';
import { Machine } from '@app/models/machine-status.interface';

@Injectable({
  providedIn: 'root',
})
export class MachineService {
  private jsonUrl = 'assets/machines.json';

  constructor(private http: HttpClient) {}

  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.jsonUrl);
  }

  getStatusIcon(status: MachineStatus): string {
    switch (status) {
      case MachineStatus.Running:
        return 'refresh';
      case MachineStatus.Alarm:
        return 'error';
      case MachineStatus.Warning:
        return 'warning';
      default:
        return '';
    }
  }
}
