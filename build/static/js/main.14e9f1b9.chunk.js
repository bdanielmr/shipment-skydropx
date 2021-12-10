(this['webpackJsonpshipment-skydropx'] = this['webpackJsonpshipment-skydropx'] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = {
        'table-form-skydropx': 'tableFormSkydropx_table-form-skydropx__2xZlb',
        'term-grid': 'tableFormSkydropx_term-grid__26eLB',
        'active-background': 'tableFormSkydropx_active-background__hFgiT',
        'grid-header': 'tableFormSkydropx_grid-header__1nR9R',
        alternate: 'tableFormSkydropx_alternate__xVG7T',
        definition: 'tableFormSkydropx_definition__2b0Q1',
        wrapper: 'tableFormSkydropx_wrapper__3THgb'
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = {
        'panel-container': 'panelShipment_panel-container__232z4',
        'container-right-panel': 'panelShipment_container-right-panel__20Rqt',
        'container-left-panel': 'panelShipment_container-left-panel__2gwCU'
      };
    },
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = {
        'custom-form-globe': 'formShipSkydropx_custom-form-globe__3ITaN',
        gradient: 'formShipSkydropx_gradient__3nTug',
        'custom-form-inputs': 'formShipSkydropx_custom-form-inputs__dExBV'
      };
    },
    function (e, t, n) {
      e.exports = {
        'custom-badge': 'badgeSkydropx_custom-badge__f53zX',
        'custom-badge-container': 'badgeSkydropx_custom-badge-container__b6Nh2'
      };
    },
    function (e, t, n) {
      e.exports = {
        'custom-personal-info': 'personalInfoSkydropx_custom-personal-info__16tnk',
        'title-personal-info': 'personalInfoSkydropx_title-personal-info__3IFdb'
      };
    },
    function (e, t, n) {
      e.exports = {
        'splash-background': 'splashStartSkydropx_splash-background__1E9Cs',
        'splash-text-h3': 'splashStartSkydropx_splash-text-h3__22SMR'
      };
    },
    ,
    function (e, t, n) {
      e.exports = { 'custom-header': 'headerSkydropx_custom-header__1JHtv' };
    },
    ,
    ,
    function (e, t, n) {
      e.exports = { 'custom-input': 'inputSkydropx_custom-input__PWOaO' };
    },
    function (e, t, n) {
      e.exports = { 'custom-step': 'stepSkydropx_custom-step__2mOEY' };
    },
    function (e, t, n) {
      e.exports = { 'custom-form': 'labelForm_custom-form__3xddJ' };
    },
    function (e, t, n) {
      e.exports = { 'custom-button': 'buttonSkydropx_custom-button__24X4U' };
    },
    function (e, t, n) {
      e.exports = { 'custom-success-shipment': 'successShipment_custom-success-shipment__20kT8' };
    },
    function (e, t, n) {
      e.exports = { 'custom-card-shipment': 'cardShipment_custom-card-shipment__3k5We' };
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    function (e, t, n) {},
    ,
    function (e, t, n) {
      e.exports = {
        'home-search-movie': 'home_home-search-movie__102p6',
        'home-search-movie-body': 'home_home-search-movie-body__2B8QW',
        'home-search-movie-body-search-component':
          'home_home-search-movie-body-search-component__19PNg',
        'home-search-movie-body-list-component':
          'home_home-search-movie-body-list-component__27AgU',
        'home-search-movie-body-pagination-component':
          'home_home-search-movie-body-pagination-component__2hdHp',
        'home-search-movie-footer': 'home_home-search-movie-footer__1xl5P'
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(1),
        o = n.n(a),
        i = n(26),
        r = n.n(i),
        c = (n(41), n(42), n(3)),
        s = n(9),
        d = n(4),
        l = n(11),
        u = n.n(l),
        p = n(36),
        b = n(13),
        h = n(2),
        m = (n(44), 'get - is - submitted - success'),
        j = 'get - data - skyadvice - success',
        v = 'get - data - shipments - success',
        O = 'post - data - shipments - success',
        f = 'get - table - options - success',
        x = 'get-rates-order-success',
        g = {
          isSubmitted: !1,
          dataSkyAdvice: {},
          dataShipments: {
            address_from: {
              province: 'Ciudad de M\xe9xico',
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
              {
                weight: '1',
                distance_unit: 'CM',
                mass_unit: 'KG',
                height: 20,
                width: 30,
                length: 10
              }
            ],
            address_to: {
              province: 'Jalisco',
              city: 'Guadalajara',
              name: 'Jorge Fern\xe1ndez',
              zip: '03400',
              country: 'MX',
              address1: ' Av. L\xe1zaro C\xe1rdenas #234',
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
          ratesOrder: { data: { attributes: { id: '' } } }
        },
        _ = function (e, t) {
          switch (t.type) {
            case m:
              return Object(c.a)(Object(c.a)({}, e), {}, { isSubmitted: t.payload });
            case j:
              return Object(c.a)(Object(c.a)({}, e), {}, { dataSkyAdvice: t.payload });
            case v:
              return Object(c.a)(Object(c.a)({}, e), {}, { dataShipments: t.payload });
            case O:
              return Object(c.a)(Object(c.a)({}, e), {}, { postDataShipments: t.payload });
            case f:
              return Object(c.a)(Object(c.a)({}, e), {}, { tableOptions: t.payload });
            case x:
              return Object(c.a)(Object(c.a)({}, e), {}, { ratesOrder: t.payload });
            default:
              return e;
          }
        },
        y = n(0),
        S = Object(a.createContext)(),
        k = function (e) {
          var t = e.children,
            n = Object(a.useReducer)(_, g),
            o = Object(h.a)(n, 2),
            i = o[0],
            r = o[1];
          return Object(y.jsx)(S.Provider, { value: [i, r], children: t });
        },
        P = n(27),
        N = n.n(P),
        w = n.p + 'static/media/skydropx_logo.0c485a9e.svg',
        C = function (e) {
          var t = e.route;
          return Object(y.jsxs)(s.b, {
            to: t,
            className: N.a['custom-header'],
            children: [
              Object(y.jsx)('label', { children: 'Shipmentdropx' }),
              Object(y.jsx)('span', { children: Object(y.jsx)('hr', {}) })
            ]
          });
        };
      C.defaultProps = { route: '/' };
      var D = C,
        I = n(22),
        F = n.n(I),
        Z = n.p + 'static/media/globe.c60c46af.svg',
        T = n(30),
        E = n.n(T),
        K = function (e) {
          var t = e.name,
            n = e.value,
            a = e.error,
            o = e.handleChange,
            i = e.placeholder;
          return Object(y.jsxs)('div', {
            className: E.a['custom-input'],
            children: [
              Object(y.jsx)('label', {
                className: 'form-label',
                children: i.toLowerCase().charAt(0).toUpperCase() + i.toLowerCase().slice(1)
              }),
              Object(y.jsx)('input', {
                className: 'form-input',
                type: 'text',
                name: t,
                placeholder: 'Enter your '.concat(i.toLowerCase()),
                value: n,
                onChange: o
              }),
              a && Object(y.jsx)('p', { children: a })
            ]
          });
        };
      K.defaultProps = {
        name: '',
        value: '',
        error: '',
        handleChange: function () {},
        placeholder: 'input'
      };
      var z = K,
        A = n(31),
        J = n.n(A),
        L = function (e) {
          return Object(y.jsx)('div', { className: J.a['custom-step'], children: 'step' });
        },
        B = n(16),
        M = function (e, t) {
          var n = Object(a.useContext)(S),
            o = Object(h.a)(n, 2)[1],
            i = Object(a.useState)({
              codeZipOrigin: '',
              codeZipDestination: '',
              weightPerPackageInKg: ''
            }),
            r = Object(h.a)(i, 2),
            s = r[0],
            d = r[1],
            l = Object(a.useState)({}),
            u = Object(h.a)(l, 2),
            p = u[0],
            b = u[1],
            m = Object(a.useState)(!1),
            v = Object(h.a)(m, 2),
            O = v[0],
            f = v[1];
          return (
            Object(a.useEffect)(
              function () {
                0 === Object.keys(p).length && O && (e(), o({ type: j, payload: s }));
              },
              [p]
            ),
            {
              handleChange: function (e) {
                var t = e.target,
                  n = t.name,
                  a = t.value;
                d(Object(c.a)(Object(c.a)({}, s), {}, Object(B.a)({}, n, a)));
              },
              handleSubmit: function (e) {
                e.preventDefault(), b(t(s)), f(!0);
              },
              values: s,
              errors: p
            }
          );
        };
      function H(e) {
        var t = {};
        return (
          e.codeZipOrigin
            ? /^[0-9]+$/.test(e.codeZipOrigin.trim())
              ? 5 != e.codeZipOrigin.length &&
                (t.codeZipOrigin = 'codeZipOrigin needs to be 5 characters')
              : (t.codeZipOrigin = 'codeZipOrigin only number')
            : (t.codeZipOrigin = 'codeZipOrigin required'),
          e.codeZipDestination
            ? /^[0-9]+$/.test(e.codeZipDestination.trim())
              ? 5 != e.codeZipDestination.length &&
                (t.codeZipDestination = 'codeZipDestination needs to be 5 characters')
              : (t.codeZipDestination = 'codeZipDestination only number')
            : (t.codeZipDestination = 'codeZipDestination required'),
          e.weightPerPackageInKg
            ? /^[0-9]+$/.test(e.weightPerPackageInKg.trim())
              ? e.weightPerPackageInKg > 100 &&
                (t.weightPerPackageInKg = 'weightPerPackageInKg needs to be no more to 100kg')
              : (t.weightPerPackageInKg = 'weightPerPackageInKg only number')
            : (t.weightPerPackageInKg = 'weightPerPackageInKg required'),
          t
        );
      }
      var R = n(32),
        $ = n.n(R),
        Q = function (e) {
          return Object(y.jsx)('div', { className: $.a['custom-form'], children: e.children });
        },
        U = function (e) {
          var t,
            n = e.submitForm,
            a = M(n, H),
            o = a.handleChange,
            i = a.handleSubmit,
            r = a.values,
            c = a.errors;
          return Object(y.jsx)(Q, {
            children: Object(y.jsxs)('form', {
              onSubmit: i,
              className: 'form',
              noValidate: !0,
              children: [
                Object(y.jsxs)('div', {
                  className: F.a['custom-form-globe'],
                  children: [
                    Object(y.jsx)('img', { src: Z }),
                    Object(y.jsx)(L, {}),
                    Object(y.jsx)('div', {})
                  ]
                }),
                Object(y.jsxs)('div', {
                  className: F.a['custom-form-inputs'],
                  children: [
                    !!r &&
                      (null === (t = Object.keys(r)) || void 0 === t
                        ? void 0
                        : t.map(function (e) {
                            var t;
                            return Object(y.jsx)(
                              z,
                              {
                                name: e,
                                value: r[e],
                                error:
                                  (null === (t = c[e]) || void 0 === t
                                    ? void 0
                                    : t.slice(0, 10)) ===
                                  (null === e || void 0 === e ? void 0 : e.slice(0, 10))
                                    ? c[e]
                                    : '',
                                placeholder: e.replace(/([A-Z])/g, ' $1').trim(),
                                handleChange: o
                              },
                              e
                            );
                          })),
                    Object(y.jsx)('button', { type: 'submit', children: 'Sign up' })
                  ]
                })
              ]
            })
          });
        },
        V = 'https://api-demo.skydropx.com',
        W = 'OPLxaE9SBQ0kaVZ7PTaQD9FKIzrV4XmIPIF8QOlnU5It',
        X = 'POST',
        q = (function () {
          var e = Object(b.a)(
            u.a.mark(function e() {
              var t,
                n,
                a,
                o,
                i,
                r = arguments;
              return u.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = r.length > 0 && void 0 !== r[0] ? r[0] : ''),
                        (n = r.length > 1 && void 0 !== r[1] ? r[1] : X),
                        (a = r.length > 2 && void 0 !== r[2] ? r[2] : {}),
                        r.length > 3 && void 0 !== r[3] ? r[3] : {},
                        r.length > 4 && void 0 !== r[4] && r[4],
                        r.length > 5 && void 0 !== r[5] && r[5],
                        (o = ''.concat(V, '/').concat(t)),
                        (e.next = 9),
                        fetch(o, {
                          method: n,
                          headers: {
                            Authorization: 'Token token='.concat(W),
                            'Content-Type': 'application/json'
                          },
                          body: a
                        })
                          .then(function (e) {
                            return e.json();
                          })
                          .catch(function (e) {
                            return e;
                          })
                      );
                    case 9:
                      return (i = e.sent), e.abrupt('return', i);
                    case 11:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        G = function (e) {
          return q('v1/labels/', X, e);
        },
        Y = n(18),
        ee = n.n(Y),
        te = n(10),
        ne = n.n(te),
        ae = n(23),
        oe = n.n(ae),
        ie = function () {
          return Object(y.jsx)('div', {
            className: oe.a['custom-badge'],
            children: Object(y.jsx)('span', {
              className: oe.a['custom-badge-container'],
              children: Object(y.jsx)('p', { children: 'best choose' })
            })
          });
        },
        re = function (e) {
          var t,
            n = e.options,
            o = (e.tableOption, Object(a.useContext)(S)),
            i = Object(h.a)(o, 2),
            r = i[0],
            c = (i[1], r.tableOptions),
            s = Object(a.useState)(''),
            l = Object(h.a)(s, 2),
            u = l[0],
            p = l[1],
            b = Object(a.useState)(!1),
            m = Object(h.a)(b, 2),
            j = m[0],
            v = m[1],
            O = Object(a.useState)('#60d192'),
            f = Object(h.a)(O, 2),
            x = f[0],
            g = f[1],
            _ = Object(a.useState)(''),
            k = Object(h.a)(_, 2),
            P = k[0],
            N = k[1],
            w = Object(d.f)(),
            C = Object(d.g)();
          return (
            Object(a.useEffect)(
              function () {
                !(function () {
                  var e,
                    t = (
                      null ===
                        (e = Object.assign([], null === c || void 0 === c ? void 0 : c.included)) ||
                      void 0 === e
                        ? void 0
                        : e.filter(function (e) {
                            return 'rates' === (null === e || void 0 === e ? void 0 : e.type);
                          })
                    ).reduce(function (e, t) {
                      var n, a;
                      return (null === e ||
                      void 0 === e ||
                      null === (n = e.attributes) ||
                      void 0 === n
                        ? void 0
                        : n.days) <
                        (null === t || void 0 === t || null === (a = t.attributes) || void 0 === a
                          ? void 0
                          : a.days)
                        ? e
                        : t;
                    }, 1);
                  p(t.id), g('transparent'), v(!0);
                })();
              },
              [c]
            ),
            Object(y.jsxs)('div', {
              className: ne.a['table-form-skydropx'],
              children: [
                Object(y.jsxs)('div', {
                  id: 'app',
                  className: ne.a.wrapper,
                  children: [
                    Object(y.jsx)('div', {
                      className: ne.a['term-grid'] + ' ' + ne.a['grid-header'],
                      children:
                        !!n &&
                        n.map(function (e, t) {
                          return Object(y.jsx)(
                            'label',
                            { children: e.option },
                            null === e || void 0 === e ? void 0 : e.option
                          );
                        })
                    }),
                    null === c || void 0 === c || null === (t = c.included) || void 0 === t
                      ? void 0
                      : t.map(function (e, t) {
                          var n, a, o, i, r;
                          return (
                            'rates' === (null === e || void 0 === e ? void 0 : e.type) &&
                            Object(y.jsxs)(
                              'button',
                              {
                                id: null === e || void 0 === e ? void 0 : e.id,
                                style:
                                  (null === e || void 0 === e ? void 0 : e.id) === u
                                    ? { backgroundColor: x, border: '1px solid black' }
                                    : null,
                                onClick: function () {
                                  return p(null === e || void 0 === e ? void 0 : e.id);
                                },
                                className: ne.a['term-grid'],
                                onFocus: function (t) {
                                  return N(e.id), v(!1), void g('#60d192');
                                },
                                children: [
                                  Object(y.jsxs)('label', {
                                    children: [
                                      null === e ||
                                      void 0 === e ||
                                      null === (n = e.attributes) ||
                                      void 0 === n
                                        ? void 0
                                        : n.amount_local,
                                      '$'
                                    ]
                                  }),
                                  Object(y.jsx)('div', {
                                    className: ne.a.definition,
                                    children:
                                      null === e ||
                                      void 0 === e ||
                                      null === (a = e.attributes) ||
                                      void 0 === a
                                        ? void 0
                                        : a.provider
                                  }),
                                  Object(y.jsx)('div', {
                                    className: ne.a.alternate,
                                    children:
                                      null === e ||
                                      void 0 === e ||
                                      null === (o = e.attributes) ||
                                      void 0 === o
                                        ? void 0
                                        : o.service_level_name
                                  }),
                                  Object(y.jsxs)('div', {
                                    className: ne.a.alternate,
                                    children: [
                                      (null === e || void 0 === e ? void 0 : e.id) === u &&
                                        j &&
                                        Object(y.jsx)(ie, {}),
                                      null === e ||
                                      void 0 === e ||
                                      null === (i = e.attributes) ||
                                      void 0 === i
                                        ? void 0
                                        : i.days,
                                      ' '
                                    ]
                                  }),
                                  Object(y.jsxs)('div', {
                                    className: ne.a.alternate,
                                    children: [
                                      null === e ||
                                      void 0 === e ||
                                      null === (r = e.attributes) ||
                                      void 0 === r
                                        ? void 0
                                        : r.total_pricing,
                                      '$'
                                    ]
                                  })
                                ]
                              },
                              t
                            )
                          );
                        })
                  ]
                }),
                Object(y.jsx)('button', {
                  onClick: function () {
                    w.push({
                      pathname: '/shipment/'.concat(P),
                      state: { background: C, backgroundError: C }
                    });
                  },
                  children: 'send'
                })
              ]
            })
          );
        };
      re.defaultProps = {
        options: [
          { option: 'Rate' },
          { option: 'Provider' },
          { option: 'Service' },
          { option: 'Shipping Days' },
          { option: 'Total Price' }
        ],
        tableOption: [{}]
      };
      var ce = re,
        se = n(24),
        de = n.n(se),
        le = function () {
          var e,
            t = Object(a.useContext)(S),
            n = Object(h.a)(t, 1)[0].tableOptions;
          return Object(y.jsxs)('div', {
            className: de.a['custom-personal-info'],
            children: [
              Object(y.jsx)('p', {
                className: de.a['title-personal-info'],
                children: 'Package Information'
              }),
              null === n || void 0 === n || null === (e = n.included) || void 0 === e
                ? void 0
                : e.map(function (e, t) {
                    return (
                      'parcels' === e.type &&
                      Object(y.jsxs)(
                        'label',
                        {
                          children: [
                            Object(y.jsxs)('p', {
                              children: [
                                'Height: ',
                                ' ' + e.attributes.height,
                                e.attributes.distance_unit
                              ]
                            }),
                            Object(y.jsxs)('p', {
                              children: [
                                'Width:',
                                ' ' + e.attributes.width,
                                e.attributes.distance_unit
                              ]
                            }),
                            Object(y.jsxs)('p', {
                              children: [
                                'Length:',
                                ' ' + e.attributes.length,
                                e.attributes.distance_unit
                              ]
                            }),
                            Object(y.jsxs)('p', {
                              children: [
                                'Weight:',
                                ' ' + e.attributes.weight,
                                e.attributes.mass_unit
                              ]
                            })
                          ]
                        },
                        t
                      )
                    );
                  })
            ]
          });
        },
        ue = function (e) {
          var t = e.postDataShipments,
            n = Object(a.useContext)(S),
            o = Object(h.a)(n, 2),
            i = o[0],
            r = o[1];
          i.tableOptions;
          return (
            Object(a.useEffect)(
              function () {
                var e;
                (null === t || void 0 === t ? void 0 : t.postDataShip) &&
                  ((e = JSON.stringify(null === t || void 0 === t ? void 0 : t.postDataShip)),
                  q('v1/shipments/', X, e)).then(function (e) {
                    r({ type: f, payload: e }),
                      localStorage.setItem('OPTIONSHIP', JSON.stringify(e));
                  });
              },
              [null === t || void 0 === t ? void 0 : t.postDataShip]
            ),
            Object(y.jsxs)('div', {
              className: ee.a['panel-container'],
              children: [
                Object(y.jsx)('div', {
                  className: ee.a['container-left-panel'],
                  children: Object(y.jsx)(le, {})
                }),
                Object(y.jsx)('div', {
                  className: ee.a['container-right-panel'],
                  children: Object(y.jsx)(ce, {})
                })
              ]
            })
          );
        };
      ue.defaultProps = { postDataShipments: {} };
      var pe = ue,
        be = function (e) {
          var t = Object(a.useContext)(S),
            n = Object(h.a)(t, 2),
            o = n[0],
            i = n[1],
            r = o.dataShipments,
            s = o.dataSkyAdvice,
            l = o.isSubmitted,
            j = (o.postDataShipments, Object(d.f)());
          var v = (function () {
            var e = Object(b.a)(
              u.a.mark(function e() {
                var t;
                return u.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (t = JSON.parse(JSON.stringify(r))),
                          i({
                            type: O,
                            payload: {
                              step: 2,
                              postDataShip: Object(c.a)(
                                Object(c.a)({}, t),
                                {},
                                {
                                  address_from: Object(c.a)(
                                    Object(c.a)(
                                      {},
                                      null === t || void 0 === t ? void 0 : t.address_from
                                    ),
                                    {},
                                    { zip: null === s || void 0 === s ? void 0 : s.codeZipOrigin }
                                  ),
                                  address_to: Object(c.a)(
                                    Object(c.a)(
                                      {},
                                      null === t || void 0 === t ? void 0 : t.address_to
                                    ),
                                    {},
                                    {
                                      zip:
                                        null === s || void 0 === s ? void 0 : s.codeZipDestination
                                    }
                                  ),
                                  parcels: Object(p.a)(
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.parcels.map(function (e) {
                                          return (
                                            e.weight &&
                                              (e.weight =
                                                null === s || void 0 === s
                                                  ? void 0
                                                  : s.weightPerPackageInKg),
                                            e
                                          );
                                        })
                                  )
                                }
                              )
                            }
                          });
                      case 2:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return (
            Object(a.useEffect)(
              function () {
                l && v(), l && j.push('/shipments');
              },
              [s]
            ),
            Object(y.jsxs)(y.Fragment, {
              children: [
                Object(y.jsx)(D, {}),
                l
                  ? null
                  : Object(y.jsx)(U, {
                      submitForm: function () {
                        i({ type: m, payload: !0 });
                      }
                    })
              ]
            })
          );
        },
        he = function (e) {
          return Object(y.jsx)('div', {
            children: Object(y.jsxs)('div', {
              style: {
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              },
              children: [
                ' ',
                Object(y.jsx)('h1', { children: 'Oops!' }),
                Object(y.jsx)('a', { href: '/', children: 'regresa al inicio' })
              ]
            })
          });
        },
        me = n(25),
        je = n.n(me),
        ve = n(33),
        Oe = n.n(ve),
        fe = function (e) {
          var t = e.label,
            n = e.route;
          return Object(y.jsx)(s.b, {
            to: n,
            className: Oe.a['custom-button'],
            children: Object(y.jsx)('button', { children: t })
          });
        };
      fe.defaultProps = { label: 'Button', route: '/' };
      var xe = fe,
        ge = function (e) {
          e.history;
          return Object(y.jsxs)('div', {
            className: je.a['splash-background'],
            children: [
              Object(y.jsx)('img', { src: w }),
              Object(y.jsx)(xe, { route: '/home', label: 'Go' }),
              Object(y.jsx)('h3', {
                className: je.a['splash-text-h3'],
                children: 'Make a Shipment.'
              })
            ]
          });
        },
        _e = function (e) {
          e.match;
          var t = Object(a.useContext)(S),
            n = Object(h.a)(t, 2),
            o = n[0],
            i = n[1],
            r = o.postDataShipments;
          o.isSubmitted;
          return (
            Object(a.useEffect)(function () {
              i({ type: m, payload: !1 });
            }, []),
            Object(y.jsxs)(y.Fragment, {
              children: [Object(y.jsx)(D, {}), Object(y.jsx)(pe, { postDataShipments: r })]
            })
          );
        },
        ye = n(34),
        Se = n.n(ye),
        ke = n(35),
        Pe = n.n(ke),
        Ne = function () {
          var e = Object(a.useContext)(S),
            t = Object(h.a)(e, 1)[0].ratesOrder,
            n = t.data,
            o = (!!n && n).attributes,
            i = (!!o && o).error_message;
          return Object(y.jsxs)('div', {
            className: Pe.a['custom-card-shipment'],
            children: [
              i &&
                (null === i || void 0 === i
                  ? void 0
                  : i.map(function (e, t) {
                      return Object(y.jsx)('p', { children: e.message }, t);
                    })),
              !i &&
                (function () {
                  var e;
                  return Object.keys(
                    null === t || void 0 === t || null === (e = t.data) || void 0 === e
                      ? void 0
                      : e.attributes
                  ).map(function (e, n) {
                    var a, o;
                    return (
                      console.log(
                        e,
                        null === t || void 0 === t || null === (a = t.data) || void 0 === a
                          ? void 0
                          : a.attributes[e],
                        'obj'
                      ),
                      Object(y.jsx)(
                        'div',
                        {
                          children: ''
                            .concat(e, ': ')
                            .concat(
                              null === t || void 0 === t || null === (o = t.data) || void 0 === o
                                ? void 0
                                : o.attributes[e]
                            )
                        },
                        n
                      )
                    );
                  });
                })()
            ]
          });
        },
        we = function (e) {
          e.match;
          var t = Object(a.useContext)(S),
            n = Object(h.a)(t, 2),
            o = n[0],
            i = n[1],
            r = Object(a.useState)([]),
            c = Object(h.a)(r, 2),
            s = (c[0], c[1]),
            l = (o.postDataShipments, o.isSubmitted, o.ratesOrder, Object(d.h)());
          return (
            Object(a.useEffect)(
              function () {
                function e() {
                  return (e = Object(b.a)(
                    u.a.mark(function e() {
                      var t;
                      return u.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                G(JSON.stringify({ label_format: 'pdf', rate_id: Number(l.id) }))
                              );
                            case 2:
                              (t = e.sent), i({ type: x, payload: t }), s(t);
                            case 5:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  )).apply(this, arguments);
                }
                !(function () {
                  e.apply(this, arguments);
                })();
              },
              [l]
            ),
            Object(y.jsx)('div', {
              className: Se.a['custom-success-shipment'],
              children: Object(y.jsx)(Ne, {})
            })
          );
        },
        Ce = [
          { name: 'SplashStartSkydropx', url: '/', path: '/', component: ge, exact: !0 },
          { name: 'Home', url: '/home', path: '/home', component: be, exact: !0 },
          {
            name: 'InfoPageShipment',
            url: '/shipments',
            path: '/shipments',
            component: _e,
            exact: !0
          },
          {
            name: 'SuccessShipment',
            url: '/shipment',
            path: '/shipment/:id',
            component: we,
            exact: !0
          },
          { name: 'Error404', url: '/', path: '/', component: he, exact: !1 }
        ];
      function De(e) {
        return Object(y.jsx)(s.a, { children: Object(y.jsx)(Ie, {}) });
      }
      function Ie(e) {
        e.dataId, e.cToken, e.aToken, e.stylePa;
        var t = Object(d.g)(),
          n = t.state && t.state.background;
        t.state && t.state.backgroundError;
        return Object(y.jsxs)(y.Fragment, {
          children: [
            Object(y.jsx)(d.c, {
              location: n || t,
              children: Ce.map(function (e, t) {
                return Object(y.jsx)(
                  d.a,
                  {
                    path: ''.concat(e.path),
                    render: function (t) {
                      return Object(y.jsx)(
                        e.component,
                        Object(c.a)(Object(c.a)({}, t), {}, { routes: e.routes })
                      );
                    },
                    exact: e.exact
                  },
                  t
                );
              })
            }),
            n && Object(y.jsx)(d.a, { path: '/shipment/:id', children: Object(y.jsx)(we, {}) })
          ]
        });
      }
      var Fe = function () {
          return Object(y.jsx)('div', {
            className: 'App',
            children: Object(y.jsx)(k, { children: Object(y.jsx)(De, {}) })
          });
        },
        Ze = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 55))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  o = t.getFCP,
                  i = t.getLCP,
                  r = t.getTTFB;
                n(e), a(e), o(e), i(e), r(e);
              });
        };
      r.a.render(
        Object(y.jsx)(o.a.StrictMode, { children: Object(y.jsx)(Fe, {}) }),
        document.getElementById('root')
      ),
        Ze();
    }
  ],
  [[54, 1, 2]]
]);
//# sourceMappingURL=main.14e9f1b9.chunk.js.map
