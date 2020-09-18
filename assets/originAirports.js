//list object of all medium and large hub international airports in the USA
    const originAiport = {
    'Albuquerque, NM' : 'ABQ',
    'Anchorage, AK' : 'ANC',
    'Atlanta, GA' : 'ATL',
    'Austin, TX' : 'AUS',
    'Baltimore, MD' : 'BWI',
    'Boston, MA' : 'BOS',
    'Buffalo, NY' : 'BUF',
    'Burbank, CA' : 'BUR',
    'Charlotte, NC' : 'CLT',
    'Chicago, IL' : 'ORD',
    'Cincinnati, OH' : 'CVG',
    'Cleveland, OH' : 'CLE',
    'Columbus, OH' : 'CMH',
    'Dallas/Fort Worth, TX' : 'DFW',
    'Denver, CO' : 'DEN',
    "Devil's Lake, ND" : 'DVL',
    'Durham/Raleigh, NC' : 'RDU',
    'El Paso, TX' : 'ELP',
    'Fort Lauderdale, FL' : 'FLL',
    'Fort Myers, FL' : 'RSW',
    'Fort Worth/Dallas, TX' : 'DFW',
    'Hartford, CT' : 'BDL',
    'Honolulu, HI' : 'HNL',
    'Houston, TX' : 'HOU',
    'Indianapolis, IN' : 'IND',
    'Jacksonville, FL' : 'JAX',
    'Jamestown, ND' : 'JMS',
    'Kahului, HI' : 'OGG',
    'Kansas City, MO' : 'MCI',
    'Las Vegas, NV' : 'LAS',
    'Los Angeles, CA' : 'LAX',
    'Miami, FL' : 'MIA',
    'Milwaukee, WI' : 'MKE',
    'Minneapolis, MN' : 'MSP',
    'Nashville, TN' : 'BNA',
    'New Orleans, LA' : 'MSY',
    'New York, NY' : 'JFK',
    'Newark, NJ' : 'EWR',
    'Oakland, CA' : 'OAK',
    'Omaha, NE' : 'OMA',
    'Ontario, CA' : 'ONT',
    'Orange County, CA' : 'SNA',
    'Orlando, FL' : 'MCO',
    'Philadelphia, PA' : 'PHL',
    'Phoenix, AZ' : 'PHX',
    'Pittsburgh, PA' : 'PIT',
    'Portland, OR' : 'PDX',
    'Raleigh/Durham, NC' : 'RDU',
    'Sacramento, CA' : 'SMF',
    'Saint Louis, MO' : 'STL',
    'Salt Lake City, UT' : 'SLC',
    'San Antonio, TX' : 'SAT',
    'San Diego, CA' : 'SAN',
    'San Francisco, CA' : 'SFO',
    'San Jose, CA' : 'SJC',
    'San Juan, Puerto Rico' : 'SJU',
    'Seattle, WA' : 'SEA',
    'Tampa, FL' : 'TPA',
    'Washington DC' : 'DCA',
    'West Palm Beach, FL' : 'PBI',
    }

//  Receives input after each onkeydown or onkeyup
//  Put that input through the airportList array and if the input matches starting at index 0
//  For each match, using something like indexOf, then you add the entire string to a separate array
//  Once you've iterated through the airportList, use that array to construct your dropdown
//  Clear the previous dropdown and then create the new dropdown