import { IProduct } from './product.interface';
import { Status } from './status.enum';

export interface Booking {
  id: number;
  product: IProduct | null;
  managerEmail: string;
  clientEmail: string | null;
  status: Status;
  date: number;
}

export interface BookingRequest {
  product: IProduct | null;
  managerEmail: string;
  clientEmail: string | null;
  status: Status;
  date: number;
}
