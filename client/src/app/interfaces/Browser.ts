import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface Browser {
  browser: string;
  status: string;
  minVersion: number;
  minYear: [string, number];
  icon: IconDefinition;
}
