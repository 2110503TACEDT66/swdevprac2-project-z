interface CompanyItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    region: string,
    website: string,
    description: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }
  
  interface CompanyJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CompanyItem[]
  }

  interface BookingItem {
    name: string,
    surname: string,
    id: string,
    hospital: string,
    bookDate: string
  }