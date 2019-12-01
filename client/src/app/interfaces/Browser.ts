import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface Browser {
  browserName: string;
  status: string;
  minVersion: number;
  minYear: [string, number];
  icon: IconDefinition;
}
