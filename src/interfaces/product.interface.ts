export interface IProduct {
  id: string;
  name: string;
  places: string;
  price: string;
  address: string;
  description: string;
  imgUrl: string;
  bigImg?: string;
  kitchen?: string;
  workTime?: string;
  hasKaraoke?: boolean;
  hasSmokingArea?: boolean;
  parkingArea?: string;
}
