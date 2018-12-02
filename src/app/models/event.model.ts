import { Organiser } from './organiser.model';

export class Event {
  title: string;
  location: string;
  dateStart: Date;
  dateEnd: Date;
  headerImageUrl: string;
  organiser: Organiser;
}
