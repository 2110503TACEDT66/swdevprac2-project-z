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
    email: string,
    company: string,
    bookDate: string,
    bookTime: string
  }