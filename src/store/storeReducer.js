/* eslint-disable no-case-declarations */
const types = {
  getDataSkyAdviceSuccess: 'get - data - skyadvice - success',
  getDataShipmentsSuccess: 'get - data - shipments - success'
};

const initialStore = {
  dataSkyAdvice: {},
  dataShipments: {
    address_from: {
      province: 'Ciudad de México',
      city: 'Azcapotzalco',
      name: 'Jose Fernando',
      zip: '03230',
      country: 'MX',
      address1: 'Av. Principal #234',
      company: 'skydropx',
      address2: 'Centro',
      phone: '5555555555',
      email: 'skydropx@email.com'
    },
    parcels: [
      { weight: '1', distance_unit: 'CM', mass_unit: 'KG', height: 20, width: 30, length: 10 }
    ],
    address_to: {
      province: 'Jalisco',
      city: 'Guadalajara',
      name: 'Jorge Fernández',
      zip: '03400',
      country: 'MX',
      address1: ' Av. Lázaro Cárdenas #234',
      company: '-',
      address2: 'Americana',
      phone: '5555555555',
      email: 'ejemplo@skydropx.com',
      reference: 'Frente a tienda de abarro',
      contents: 'trigo'
    }
  }
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.getDataSkyAdviceSuccess:
      return {
        ...state,
        dataSkyAdvice: action.payload
      };
    case types.getDataShipmentsSuccess:
      console.log('0action.payload', action.payload);
      return {
        ...state,
        dataShipments: action.payload
      };
    default:
      return state;
  }
};

export { initialStore, types };
export default storeReducer;
