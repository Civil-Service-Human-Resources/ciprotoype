
var users = [
  { name: 'Micheal Burnham',
    email: 'mb@example.com',
    businessName: 'Discovery',
    agentCode: 'NCC-1031',
    userType: 'agent',
    password: 'letmein',
    requests: [
        {
            title: 'test'
        },
        {
            title: 'test'
        },
        {
            title: 'test'
        }
    ],
    cases: [
        {
            'address': 'Old Mill Cafe, Coast Road, Bardsea, Ulverston, Cumbria, LA12 9RB',
            'client': 'ABC Client',
            'effectiveDate': '1 Apr 2017',
            'type': 'Check',
            'expiryDate': '1 Sept 2017'
        },
        {
         'address': '2 Lorem St, Ipsum ABC 123',
         'client': 'DEF Client',
         'effectiveDate': '13 Jun 2017',
         'type': 'Challenge',
         'expiryDate': '13 Aug 2018'
     }
    ],
    messages: [
      {
        id: 1,
        read: false,
        template: 'C010c',
        subject: 'Check acknowledgement (C010c)',
        address: 'Example Pub Moon under the water, 5 - 7a Temple Place, Brighton BN3 7JB',
        reference: 'FDZ443256522',
        received: 'Just now',
        submissionDate: '13 February 2018 06:42 PM',
        client: 'Mr A Client'
      },
      {
        id: 2,
        read: false,
        template: 'C010c',
        subject: 'Check acknowledgement (C010c)',
        address: 'Example Pub Moon under the water, 5 - 7a Temple Place, Brighton BN3 7JB',
        reference: 'FDZ443256522',
        received: 'Today',
        submissionDate: '13 February 2018 06:42 PM',
        client: 'Mr A Client'
      },
      {
        id: 3,
        read: false,
        template: 'C010c',
        subject: 'Check acknowledgement (C010c)',
        address: 'Example Pub Moon under the water, 5 - 7a Temple Place, Brighton BN3 7JB',
        reference: 'FDZ443256522',
        received: 'Yesterday',
        submissionDate: '13 February 2018 06:42 PM',
        client: 'Mr A Client'
      },
      {
        id: 4,
        read: false,
        template: 'C010c',
        subject: 'Check acknowledgement (C010c)',
        address: 'Example Pub Moon under the water, 5 - 7a Temple Place, Brighton BN3 7JB',
        reference: 'FDZ443256522',
        received: 'Yesterday',
        submissionDate: '13 February 2018 06:42 PM',
        client: 'Mr A Client'
      },
      {
        id: 5,
        read: false,
        template: 'C010c',
        subject: 'Check acknowledgement (C010c)',
        address: 'Example Pub Moon under the water, 5 - 7a Temple Place, Brighton BN3 7JB',
        reference: 'FDZ443256522',
        received: '2 days ago',
        submissionDate: '13 February 2018 06:42 PM',
        client: 'Mr A Client'
      },
      {
        id: 6,
        read: false,
        template: 'C010c',
        subject: 'Check acknowledgement (C010c)',
        address: 'Example Pub Moon under the water, 5 - 7a Temple Place, Brighton BN3 7JB',
        reference: 'FDZ443256522',
        received: 'Last week',
        submissionDate: '13 February 2018 06:42 PM',
        client: 'Mr A Client'
      },
      {
        id: 7,
        read: false,
        template: 'C010c',
        subject: 'Check acknowledgement (C010c)',
        address: 'Example Pub Moon under the water, 5 - 7a Temple Place, Brighton BN3 7JB',
        reference: 'FDZ443256522',
        received: 'Last week',
        submissionDate: '13 February 2018 06:42 PM',
        client: 'Mr A Client'
      }
    ],
    checkCases : [
        {
          'reference': 'FDZ443256522',
          'laRef': '81399454811',
          'sections':[
          {
            'title' : 'Case details',
            'items' : [
              {'label': 'Check case reference', 'value': 'RER43336113'},
              {'label': 'Property', 'value': 'Example Pub Moon under the water, 5 - 7a Temple Place, Brighton BN3 7JB'},
              {'label': 'Local authority reference', 'value':  '1110/3456744356'},
              {'label': 'Rateable value', 'value':  '£3,550'},
              {'label': 'Pimary description', 'value':  'PUBLIC HOUSE'},
              {'label': 'Effective date', 'value':  '25 December 2017'},
              {'label': 'Date check case submitted', 'value':  '18 January 2018'},
              {'label': 'Reason for case', 'value':  'Change in local area'},
              {'label': 'Smaller proposer', 'value':  'Yes'},
              {'label': 'Region', 'value':  'Provincial'},
              {'label': 'Basis of valuation', 'value':  'Fair maintainable turnover'}
            ]
          }
        ],
        'arrTradeReciepts':[
          {'tradeReceiptDay':'12','tradeReceiptMonth':'03','tradeReceiptYear':'2017','tradingYear':'52','tradingWeeks':'','drinkReceipt':'120000','foodReceipt':'40000','accommodationReceipt':'0','otherReceipt':'27000'},
          {'tradeReceiptDay':'12','tradeReceiptMonth':'03','tradeReceiptYear':'2016','tradingYear':'52','tradingWeeks':'','drinkReceipt':'110000','foodReceipt':'20500','accommodationReceipt':'0','otherReceipt':'0'}
        ],
        supportingDocuments: [
          {
            'title': 'search_and_sort_data_platform_stub_relationships.jpg',
            'url': '#'
          },
          {
            'title': 'search_and_sort_mapping.jpg',
            'url': '#'
          }
        ]

      },
      {
        type: 'check',
        address: '13 Nowhere Terrace, Trumpton, TT42 4AS',
        reference: 'FDZ443256521',
        received: '12 August 2017 07:52 PM'
      }
    ],
  },
  { name: 'Reginald Barclay',
    email: 'rb@example.com',
    businessName: 'Enterprise',
    userType: 'individual',
    password: 'password1',
    messages: [
      {
        id: 1,
        read: false,
        template: 'C010a',
        subject: 'Check acknowledgement (C010a)',
        address: 'Example Hotel, Penrose, Wadebridge PL27 7TB',
        reference: 'FDZ443256521',
        received: 'an hour ago'
      },
      {
        id: 2,
        read: false,
        template: 'C010b',
        subject: 'Check acknowledgement (C010b)',
        address: 'Example Shop, St Katharine\'s & Wapping, London E1W',
        reference: 'FDZ443256765',
        received: 'Yesterday'
      },
    ],
    drafts: [
        {
          'address': 'Old Mill Cafe, Coast Road, Bardsea, Ulverston, Cumbria, LA12 9RB',
          'client': 'ABC Client',
          'effectiveDate': '1 Apr 2017',
          'type': 'Check',
          'expiryDate': '1 Sept 2017'
        },
        {
         'address': '2 Lorem St, Ipsum ABC 123',
         'client': 'DEF Client',
         'effectiveDate': '13 Jun 2017',
         'type': 'Challenge',
         'expiryDate': '13 Aug 2018'
      }
     ],
      checkCases : [
        {
          'reference': 'FDZ443256521',
          'laRef': '79737938099',
          'sections':[
          {
            'title' : 'Case details',
            'items' : [
              {'label': 'Check case reference', 'value': 'RER43336113'},
              {'label': 'Property', 'value': 'Example Hotel, Penrose, Wadebridge PL27 7TB'},
              {'label': 'Local authority reference', 'value':  '1110/3456744356'},
              {'label': 'Rateable value', 'value':  '£3,550'},
              {'label': 'Pimary description', 'value':  'OFFICES AND PREMISES'},
              {'label': 'Effective date', 'value':  '25 December 2017'},
              {'label': 'Date check case submitted', 'value':  '18 January 2018'},
              {'label': 'Reason for case', 'value':  'Change in local area'},
              {'label': 'Smaller proposer', 'value':  'Yes'},
              {'label': 'Region', 'value':  'Provincial'},
              {'label': 'Basis of valuation', 'value':  'Fair maintainable turnover'}
            ]
          }
        ],
        'arrTradeReciepts':[
          {'tradeReceiptDay':'12','tradeReceiptMonth':'03','tradeReceiptYear':'2017','tradingYear':'52','tradingWeeks':'','drinkReceipt':'120000','foodReceipt':'40000','accommodationReceipt':'0','otherReceipt':'27000'},
          {'tradeReceiptDay':'12','tradeReceiptMonth':'03','tradeReceiptYear':'2016','tradingYear':'52','tradingWeeks':'','drinkReceipt':'110000','foodReceipt':'20500','accommodationReceipt':'0','otherReceipt':'0'}
        ],
        supportingDocuments: [
          {
            'title': 'search_and_sort_data_platform_stub_relationships.jpg',
            'url': '#'
          },
          {
            'title': 'search_and_sort_mapping.jpg',
            'url': '#'
          }
        ]

      },
      {
          'reference': 'FDZ443256765',
          'laRef': '11207740499',
          'sections':[
          {
            'title' : 'Case details',
            'items' : [
              {'label': 'Check case reference', 'value': 'RER43336546'},
              {'label': 'Property', 'value': 'Example Shop, St Katharine\'s & Wapping, London E1W'},
              {'label': 'Local authority reference', 'value':  '1110/3456744356'},
              {'label': 'Rateable value', 'value':  '£4,560'},
              {'label': 'Pimary description', 'value':  'OFFICES AND PREMISES'},
              {'label': 'Effective date', 'value':  '25 December 2017'},
              {'label': 'Date check case submitted', 'value':  '18 January 2018'},
              {'label': 'Reason for case', 'value':  'Change in local area'},
              {'label': 'Smaller proposer', 'value':  'Yes'}
            ]
          }
        ],
        supportingDocuments: [
          {
            'title': 'search_and_sort_data_platform_stub_relationships.jpg',
            'url': '#'
          }
        ]

      },
    ],
    agents: [
    {
      agentName: 'Fox Mulder',
      code: '34464',
      managedProperties: []
    },
    {
      agentName: 'Dana Scully',
      code: '53469',
      managedProperties: []
    }
    ]
  }

  ]

  module.exports = users
