export interface Booking {
  name: string;
  startDate: Date;
  endDate: Date;
  resources: number;
  material: boolean;
  materialDescription: string;
}
export interface BookingResult {
  id: any;
  name: string;
  startDate: Date;
  endDate: Date;
  resource: Resource;
  material: boolean;
  materialDescription: string;
}

export interface BookingBody {
  startDate: Date;
  endDate: Date;
}

export interface Resource {
  id: any;
  count: number;
  type: RESOURCETYPE;
}

// enum MATERIALTYPE {
//   Human = 'HARD',
//   Material = 'MATERIAL',
//   Vehicle = 'VEHICLE'
// }

// export interface Material {
//   id: any;
//   count: number;
//   type: MATERIALTYPE;
// }

enum RESOURCETYPE {
  Human = 'HUMAN',
  Material = 'MATERIAL',
  Vehicle = 'VEHICLE'
}


