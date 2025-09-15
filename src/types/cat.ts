export interface ICat {
  id: string;
  name: string;
  description?: string;
  reference_image_id: string;
  affection_level: number;
  origin: string;
}

export interface ICatFull extends ICat {
  imageUrl?: string;
}

export interface IVote {
  image_id: string;
  value: 1 | 0;
}
