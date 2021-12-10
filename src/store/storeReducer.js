/* eslint-disable no-case-declarations */
const types = {
  getIsSubmittedSuccess: 'get - is - submitted - success',
  getDataSkyAdviceSuccess: 'get - data - skyadvice - success',
  getDataShipmentsSuccess: 'get - data - shipments - success',
  postDataShipmentsSuccess: 'post - data - shipments - success',
  getTableOptionsSuccess: 'get - table - options - success',
  getRatesOrderSuccess: 'get-rates-order-success',
  getErrorSuccess: 'get-error-success',
  getLoadingSuccess: 'get-loading-success'
};

const initialStore = {
  isSubmitted: false,
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
  },
  postDataShipments: {},
  tableOptions: [],
  ratesOrder: {},
  errorGlobal: [],
  loadingConsult: false,
  showComponent: false
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.getIsSubmittedSuccess:
      return {
        ...state,
        isSubmitted: action.payload
      };
    case types.getDataSkyAdviceSuccess:
      return {
        ...state,
        dataSkyAdvice: action.payload
      };
    case types.getDataShipmentsSuccess:
      return {
        ...state,
        dataShipments: action.payload
      };
    case types.postDataShipmentsSuccess:
      return {
        ...state,
        postDataShipments: action.payload
      };
    case types.getTableOptionsSuccess:
      return {
        ...state,
        tableOptions: action.payload
      };
    case types.getRatesOrderSuccess:
      return {
        ...state,
        ratesOrder: action.payload
      };
    case types.getErrorSuccess:
      return {
        ...state,
        errorGlobal: action.payload
      };
    case types.getLoadingSuccess:
      return {
        ...state,
        loadingConsult: action.payload,
        showComponent: action.payloadShow
      };
    default:
      return state;
  }
};

export { initialStore, types };
export default storeReducer;
