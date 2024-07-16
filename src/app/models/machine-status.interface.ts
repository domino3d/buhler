import { MachineStatus } from './machine-status.enum';

export interface Machine {
  name: string;
  icon: string;
  status: MachineStatus;
}
