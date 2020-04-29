<template>
  <sys-form :submit-function="submit">
    <p v-if="canSelectSources">
      <a
        href="#"
        @click.prevent="$store.commit('payment/setPage', 'billing-select')">
        Select an existing payment method
      </a>
    </p>

    <div>
      <sys-label for="stripe-card-input">
        Card number
      </sys-label>

      <div id="stripe-card-input" />

      <sys-input-error>
        {{ stripeCardError }}
      </sys-input-error>
    </div>

    <div class="half">
      <sys-label for="stripe-expiration-input">
        Expiration
      </sys-label>

      <div id="stripe-expiration-input" />

      <sys-input-error>
        {{ stripeExpirationError }}
      </sys-input-error>
    </div>

    <div class="half">
      <sys-label for="stripe-cvc-input">
        CVC
      </sys-label>

      <div id="stripe-cvc-input" />

      <sys-input-error>
        {{ stripeCVCError }}
      </sys-input-error>
    </div>

    <sys-form-input
      id="fname"
      v-model="firstName"
      autocomplete="given-name"
      label="First Name"
      name="fname"
      placeholder="John"
      validation="required"
    />

    <sys-form-input
      id="lname"
      v-model="lastName"
      autocomplete="family-name"
      label="Last Name"
      name="lname"
      placeholder="Smith"
      validation="required"
    />

    <sys-form-input
      id="address1"
      v-model="address1"
      autocomplete="address-line1"
      label="Address 1"
      name="address1"
      placeholder="4240 Carson St #101"
      validation="required"
    />

    <sys-form-input
      id="address2"
      v-model="address2"
      autocomplete="address-line2"
      label="Address 2"
      name="address2"
    />

    <sys-form-input
      id="city"
      v-model="city"
      autocomplete="address-level2"
      label="City"
      name="city"
      placeholder="Denver"
      validation="required"
    />

    <sys-form-input
      id="state"
      v-model="state"
      autocomplete="address-level1"
      class="half"
      label="State"
      name="state"
      placeholder="CO"
      validation="required"
    />

    <sys-form-input
      id="zip"
      v-model="zip"
      autocomplete="postal-code"
      class="half"
      label="ZIP"
      name="zip"
      placeholder="80239"
      validation="required"
    />

    <sys-form-select
      id="country"
      v-model="country"
      autocomplete="country"
      label="Country"
      name="country"
    >
      <option
        value="AX"
        :selected="(country === 'AX')"
      >
        Aland Islands
      </option>
      <option
        value="AF"
        :selected="(country === 'AF')"
      >
        Afghanistan
      </option>
      <option
        value="AL"
        :selected="(country === 'AL')"
      >
        Albania
      </option>
      <option
        value="DZ"
        :selected="(country === 'DZ')"
      >
        Algeria
      </option>
      <option
        value="AS"
        :selected="(country === 'AS')"
      >
        American Samoa
      </option>
      <option
        value="AD"
        :selected="(country === 'AD')"
      >
        Andorra
      </option>
      <option
        value="AO"
        :selected="(country === 'AO')"
      >
        Angola
      </option>
      <option
        value="AI"
        :selected="(country === 'AI')"
      >
        Anguilla
      </option>
      <option
        value="AQ"
        :selected="(country === 'AQ')"
      >
        Antarctica
      </option>
      <option
        value="AG"
        :selected="(country === 'AG')"
      >
        Antigua and Barbuda
      </option>
      <option
        value="AR"
        :selected="(country === 'AR')"
      >
        Argentina
      </option>
      <option
        value="AM"
        :selected="(country === 'AM')"
      >
        Armenia
      </option>
      <option
        value="AW"
        :selected="(country === 'AW')"
      >
        Aruba
      </option>
      <option
        value="AU"
        :selected="(country === 'AU')"
      >
        Australia
      </option>
      <option
        value="AT"
        :selected="(country === 'AT')"
      >
        Austria
      </option>
      <option
        value="AZ"
        :selected="(country === 'AZ')"
      >
        Azerbaijan
      </option>
      <option
        value="BS"
        :selected="(country === 'BS')"
      >
        Bahamas
      </option>
      <option
        value="BH"
        :selected="(country === 'BH')"
      >
        Bahrain
      </option>
      <option
        value="BD"
        :selected="(country === 'BD')"
      >
        Bangladesh
      </option>
      <option
        value="BB"
        :selected="(country === 'BB')"
      >
        Barbados
      </option>
      <option
        value="BY"
        :selected="(country === 'BY')"
      >
        Belarus
      </option>
      <option
        value="BE"
        :selected="(country === 'BE')"
      >
        Belgium
      </option>
      <option
        value="BZ"
        :selected="(country === 'BZ')"
      >
        Belize
      </option>
      <option
        value="BJ"
        :selected="(country === 'BJ')"
      >
        Benin
      </option>
      <option
        value="BM"
        :selected="(country === 'BM')"
      >
        Bermuda
      </option>
      <option
        value="BT"
        :selected="(country === 'BT')"
      >
        Bhutan
      </option>
      <option
        value="BO"
        :selected="(country === 'BO')"
      >
        Bolivia
      </option>
      <option
        value="BA"
        :selected="(country === 'BA')"
      >
        Bosnia and Herzegovina
      </option>
      <option
        value="BW"
        :selected="(country === 'BW')"
      >
        Botswana
      </option>
      <option
        value="BV"
        :selected="(country === 'BV')"
      >
        Bouvet Island
      </option>
      <option
        value="BR"
        :selected="(country === 'BR')"
      >
        Brazil
      </option>
      <option
        value="IO"
        :selected="(country === 'IO')"
      >
        British Indian Ocean Territory
      </option>
      <option
        value="BN"
        :selected="(country === 'BN')"
      >
        Brunei Darussalam
      </option>
      <option
        value="BG"
        :selected="(country === 'BG')"
      >
        Bulgaria
      </option>
      <option
        value="BF"
        :selected="(country === 'BF')"
      >
        Burkina Faso
      </option>
      <option
        value="BI"
        :selected="(country === 'BI')"
      >
        Burundi
      </option>
      <option
        value="KH"
        :selected="(country === 'KH')"
      >
        Cambodia
      </option>
      <option
        value="CM"
        :selected="(country === 'CM')"
      >
        Cameroon
      </option>
      <option
        value="CA"
        :selected="(country === 'CA')"
      >
        Canada
      </option>
      <option
        value="CV"
        :selected="(country === 'CV')"
      >
        Cape Verde
      </option>
      <option
        value="CI"
        :selected="(country === 'CI')"
      >
        Côte D'Ivoire
      </option>
      <option
        value="KY"
        :selected="(country === 'KY')"
      >
        Cayman Islands
      </option>
      <option
        value="CF"
        :selected="(country === 'CF')"
      >
        Central African Republic
      </option>
      <option
        value="TD"
        :selected="(country === 'TD')"
      >
        Chad
      </option>
      <option
        value="CL"
        :selected="(country === 'CL')"
      >
        Chile
      </option>
      <option
        value="CN"
        :selected="(country === 'CN')"
      >
        China
      </option>
      <option
        value="CX"
        :selected="(country === 'CX')"
      >
        Christmas Island
      </option>
      <option
        value="CC"
        :selected="(country === 'CC')"
      >
        Cocos (Keeling) Islands
      </option>
      <option
        value="CO"
        :selected="(country === 'CO')"
      >
        Colombia
      </option>
      <option
        value="CW"
        :selected="(country === 'CW')"
      >
        Curaçao
      </option>
      <option
        value="KM"
        :selected="(country === 'KM')"
      >
        Comoros
      </option>
      <option
        value="CG"
        :selected="(country === 'CG')"
      >
        Congo
      </option>
      <option
        value="CD"
        :selected="(country === 'CD')"
      >
        Congo, The Democratic Republic of the
      </option>
      <option
        value="CK"
        :selected="(country === 'CK')"
      >
        Cook Islands
      </option>
      <option
        value="CR"
        :selected="(country === 'CR')"
      >
        Costa Rica
      </option>
      <option
        value="HR"
        :selected="(country === 'HR')"
      >
        Croatia
      </option>
      <option
        value="CU"
        :selected="(country === 'CU')"
      >
        Cuba
      </option>
      <option
        value="CY"
        :selected="(country === 'CY')"
      >
        Cyprus
      </option>
      <option
        value="CZ"
        :selected="(country === 'CZ')"
      >
        Czech Republic
      </option>
      <option
        value="DK"
        :selected="(country === 'DK')"
      >
        Denmark
      </option>
      <option
        value="DJ"
        :selected="(country === 'DJ')"
      >
        Djibouti
      </option>
      <option
        value="DM"
        :selected="(country === 'DM')"
      >
        Dominica
      </option>
      <option
        value="DO"
        :selected="(country === 'DO')"
      >
        Dominican Republic
      </option>
      <option
        value="EC"
        :selected="(country === 'EC')"
      >
        Ecuador
      </option>
      <option
        value="EG"
        :selected="(country === 'EG')"
      >
        Egypt
      </option>
      <option
        value="SV"
        :selected="(country === 'SV')"
      >
        El Salvador
      </option>
      <option
        value="GQ"
        :selected="(country === 'GQ')"
      >
        Equatorial Guinea
      </option>
      <option
        value="ER"
        :selected="(country === 'ER')"
      >
        Eritrea
      </option>
      <option
        value="EE"
        :selected="(country === 'EE')"
      >
        Estonia
      </option>
      <option
        value="ET"
        :selected="(country === 'ET')"
      >
        Ethiopia
      </option>
      <option
        value="FK"
        :selected="(country === 'FK')"
      >
        Falkland Islands (Malvinas)
      </option>
      <option
        value="FO"
        :selected="(country === 'FO')"
      >
        Faroe Islands
      </option>
      <option
        value="FJ"
        :selected="(country === 'FJ')"
      >
        Fiji
      </option>
      <option
        value="FI"
        :selected="(country === 'FI')"
      >
        Finland
      </option>
      <option
        value="FR"
        :selected="(country === 'FR')"
      >
        France
      </option>
      <option
        value="GF"
        :selected="(country === 'GF')"
      >
        French Guiana
      </option>
      <option
        value="PF"
        :selected="(country === 'PF')"
      >
        French Polynesia
      </option>
      <option
        value="TF"
        :selected="(country === 'TF')"
      >
        French Southern Territories
      </option>
      <option
        value="GA"
        :selected="(country === 'GA')"
      >
        Gabon
      </option>
      <option
        value="GM"
        :selected="(country === 'GM')"
      >
        Gambia
      </option>
      <option
        value="GE"
        :selected="(country === 'GE')"
      >
        Georgia
      </option>
      <option
        value="DE"
        :selected="(country === 'DE')"
      >
        Germany
      </option>
      <option
        value="GH"
        :selected="(country === 'GH')"
      >
        Ghana
      </option>
      <option
        value="GI"
        :selected="(country === 'GI')"
      >
        Gibraltar
      </option>
      <option
        value="GR"
        :selected="(country === 'GR')"
      >
        Greece
      </option>
      <option
        value="GL"
        :selected="(country === 'GL')"
      >
        Greenland
      </option>
      <option
        value="GD"
        :selected="(country === 'GD')"
      >
        Grenada
      </option>
      <option
        value="GP"
        :selected="(country === 'GP')"
      >
        Guadeloupe
      </option>
      <option
        value="GU"
        :selected="(country === 'GU')"
      >
        Guam
      </option>
      <option
        value="GT"
        :selected="(country === 'GT')"
      >
        Guatemala
      </option>
      <option
        value="GN"
        :selected="(country === 'GN')"
      >
        Guinea
      </option>
      <option
        value="GW"
        :selected="(country === 'GW')"
      >
        Guinea-Bissau
      </option>
      <option
        value="GY"
        :selected="(country === 'GY')"
      >
        Guyana
      </option>
      <option
        value="HT"
        :selected="(country === 'HT')"
      >
        Haiti
      </option>
      <option
        value="HM"
        :selected="(country === 'HM')"
      >
        Heard Island and McDonald Islands
      </option>
      <option
        value="VA"
        :selected="(country === 'VA')"
      >
        Holy See (Vatican City State)
      </option>
      <option
        value="HN"
        :selected="(country === 'HN')"
      >
        Honduras
      </option>
      <option
        value="HK"
        :selected="(country === 'HK')"
      >
        Hong Kong
      </option>
      <option
        value="HU"
        :selected="(country === 'HU')"
      >
        Hungary
      </option>
      <option
        value="IS"
        :selected="(country === 'IS')"
      >
        Iceland
      </option>
      <option
        value="IN"
        :selected="(country === 'IN')"
      >
        India
      </option>
      <option
        value="ID"
        :selected="(country === 'ID')"
      >
        Indonesia
      </option>
      <option
        value="IR"
        :selected="(country === 'IR')"
      >
        Iran, Islamic Republic of
      </option>
      <option
        value="IQ"
        :selected="(country === 'IQ')"
      >
        Iraq
      </option>
      <option
        value="IE"
        :selected="(country === 'IE')"
      >
        Ireland
      </option>
      <option
        value="IL"
        :selected="(country === 'IL')"
      >
        Israel
      </option>
      <option
        value="IT"
        :selected="(country === 'IT')"
      >
        Italy
      </option>
      <option
        value="JM"
        :selected="(country === 'JM')"
      >
        Jamaica
      </option>
      <option
        value="JP"
        :selected="(country === 'JP')"
      >
        Japan
      </option>
      <option
        value="JO"
        :selected="(country === 'JO')"
      >
        Jordan
      </option>
      <option
        value="KZ"
        :selected="(country === 'KZ')"
      >
        Kazakhstan
      </option>
      <option
        value="KE"
        :selected="(country === 'KE')"
      >
        Kenya
      </option>
      <option
        value="KI"
        :selected="(country === 'KI')"
      >
        Kiribati
      </option>
      <option
        value="KR"
        :selected="(country === 'KR')"
      >
        Korea, Republic of
      </option>
      <option
        value="KP"
        :selected="(country === 'KP')"
      >
        Korea, Democratic People's Republic of
      </option>
      <option
        value="KW"
        :selected="(country === 'KW')"
      >
        Kuwait
      </option>
      <option
        value="KG"
        :selected="(country === 'KG')"
      >
        Kyrgyzstan
      </option>
      <option
        value="LA"
        :selected="(country === 'LA')"
      >
        Lao People's Democratic Republic
      </option>
      <option
        value="LV"
        :selected="(country === 'LV')"
      >
        Latvia
      </option>
      <option
        value="LB"
        :selected="(country === 'LB')"
      >
        Lebanon
      </option>
      <option
        value="LS"
        :selected="(country === 'LS')"
      >
        Lesotho
      </option>
      <option
        value="LR"
        :selected="(country === 'LR')"
      >
        Liberia
      </option>
      <option
        value="LY"
        :selected="(country === 'LY')"
      >
        Libyan Arab Jamahiriya
      </option>
      <option
        value="LI"
        :selected="(country === 'LI')"
      >
        Liechtenstein
      </option>
      <option
        value="LT"
        :selected="(country === 'LT')"
      >
        Lithuania
      </option>
      <option
        value="LU"
        :selected="(country === 'LU')"
      >
        Luxembourg
      </option>
      <option
        value="MO"
        :selected="(country === 'MO')"
      >
        Macau
      </option>
      <option
        value="MK"
        :selected="(country === 'MK')"
      >
        Macedonia, The Former Yugoslav Republic of
      </option>
      <option
        value="MG"
        :selected="(country === 'MG')"
      >
        Madagascar
      </option>
      <option
        value="MW"
        :selected="(country === 'MW')"
      >
        Malawi
      </option>
      <option
        value="MY"
        :selected="(country === 'MY')"
      >
        Malaysia
      </option>
      <option
        value="MV"
        :selected="(country === 'MV')"
      >
        Maldives
      </option>
      <option
        value="ML"
        :selected="(country === 'ML')"
      >
        Mali
      </option>
      <option
        value="MT"
        :selected="(country === 'MT')"
      >
        Malta
      </option>
      <option
        value="MH"
        :selected="(country === 'MH')"
      >
        Marshall Islands
      </option>
      <option
        value="MQ"
        :selected="(country === 'MQ')"
      >
        Martinique
      </option>
      <option
        value="MR"
        :selected="(country === 'MR')"
      >
        Mauritania
      </option>
      <option
        value="MU"
        :selected="(country === 'MU')"
      >
        Mauritius
      </option>
      <option
        value="YT"
        :selected="(country === 'YT')"
      >
        Mayotte
      </option>
      <option
        value="MX"
        :selected="(country === 'MX')"
      >
        Mexico
      </option>
      <option
        value="FM"
        :selected="(country === 'FM')"
      >
        Micronesia, Federated States of
      </option>
      <option
        value="MD"
        :selected="(country === 'MD')"
      >
        Moldova, Republic of
      </option>
      <option
        value="MC"
        :selected="(country === 'MC')"
      >
        Monaco
      </option>
      <option
        value="MN"
        :selected="(country === 'MN')"
      >
        Mongolia
      </option>
      <option
        value="MS"
        :selected="(country === 'MS')"
      >
        Montserrat
      </option>
      <option
        value="MA"
        :selected="(country === 'MA')"
      >
        Morocco
      </option>
      <option
        value="MZ"
        :selected="(country === 'MZ')"
      >
        Mozambique
      </option>
      <option
        value="MM"
        :selected="(country === 'MM')"
      >
        Myanmar
      </option>
      <option
        value="NA"
        :selected="(country === 'NA')"
      >
        Namibia
      </option>
      <option
        value="NR"
        :selected="(country === 'NR')"
      >
        Nauru
      </option>
      <option
        value="NP"
        :selected="(country === 'NP')"
      >
        Nepal
      </option>
      <option
        value="NL"
        :selected="(country === 'NL')"
      >
        Netherlands
      </option>
      <option
        value="AN"
        :selected="(country === 'AN')"
      >
        Netherlands Antilles
      </option>
      <option
        value="NC"
        :selected="(country === 'NC')"
      >
        New Caledonia
      </option>
      <option
        value="NZ"
        :selected="(country === 'NZ')"
      >
        New Zealand
      </option>
      <option
        value="NI"
        :selected="(country === 'NI')"
      >
        Nicaragua
      </option>
      <option
        value="NE"
        :selected="(country === 'NE')"
      >
        Niger
      </option>
      <option
        value="NG"
        :selected="(country === 'NG')"
      >
        Nigeria
      </option>
      <option
        value="NU"
        :selected="(country === 'NU')"
      >
        Niue
      </option>
      <option
        value="NF"
        :selected="(country === 'NF')"
      >
        Norfolk Island
      </option>
      <option
        value="MP"
        :selected="(country === 'MP')"
      >
        Northern Mariana Islands
      </option>
      <option
        value="NO"
        :selected="(country === 'NO')"
      >
        Norway
      </option>
      <option
        value="OM"
        :selected="(country === 'OM')"
      >
        Oman
      </option>
      <option
        value="PK"
        :selected="(country === 'PK')"
      >
        Pakistan
      </option>
      <option
        value="PW"
        :selected="(country === 'PW')"
      >
        Palau
      </option>
      <option
        value="PS"
        :selected="(country === 'PS')"
      >
        Palestinian Territory, Occupied
      </option>
      <option
        value="PA"
        :selected="(country === 'PA')"
      >
        Panama
      </option>
      <option
        value="PG"
        :selected="(country === 'PG')"
      >
        Papua New Guinea
      </option>
      <option
        value="PY"
        :selected="(country === 'PY')"
      >
        Paraguay
      </option>
      <option
        value="PE"
        :selected="(country === 'PE')"
      >
        Peru
      </option>
      <option
        value="PH"
        :selected="(country === 'PH')"
      >
        Philippines
      </option>
      <option
        value="PN"
        :selected="(country === 'PN')"
      >
        Pitcairn
      </option>
      <option
        value="PL"
        :selected="(country === 'PL')"
      >
        Poland
      </option>
      <option
        value="PT"
        :selected="(country === 'PT')"
      >
        Portugal
      </option>
      <option
        value="PR"
        :selected="(country === 'PR')"
      >
        Puerto Rico
      </option>
      <option
        value="QA"
        :selected="(country === 'QA')"
      >
        Qatar
      </option>
      <option
        value="RE"
        :selected="(country === 'RE')"
      >
        Reunion
      </option>
      <option
        value="RO"
        :selected="(country === 'RO')"
      >
        Romania
      </option>
      <option
        value="RU"
        :selected="(country === 'RU')"
      >
        Russian Federation
      </option>
      <option
        value="RW"
        :selected="(country === 'RW')"
      >
        Rwanda
      </option>
      <option
        value="SH"
        :selected="(country === 'SH')"
      >
        Saint Helena
      </option>
      <option
        value="KN"
        :selected="(country === 'KN')"
      >
        Saint Kitts and Nevis
      </option>
      <option
        value="LC"
        :selected="(country === 'LC')"
      >
        Saint Lucia
      </option>
      <option
        value="PM"
        :selected="(country === 'PM')"
      >
        Saint Pierre and Miquelon
      </option>
      <option
        value="VC"
        :selected="(country === 'VC')"
      >
        Saint Vincent and the Grenadines
      </option>
      <option
        value="WS"
        :selected="(country === 'WS')"
      >
        Samoa
      </option>
      <option
        value="SM"
        :selected="(country === 'SM')"
      >
        San Marino
      </option>
      <option
        value="ST"
        :selected="(country === 'ST')"
      >
        Sao Tome and Principe
      </option>
      <option
        value="SA"
        :selected="(country === 'SA')"
      >
        Saudi Arabia
      </option>
      <option
        value="SN"
        :selected="(country === 'SN')"
      >
        Senegal
      </option>
      <option
        value="CS"
        :selected="(country === 'CS')"
      >
        Serbia and Montenegro
      </option>
      <option
        value="SC"
        :selected="(country === 'SC')"
      >
        Seychelles
      </option>
      <option
        value="SL"
        :selected="(country === 'SL')"
      >
        Sierra Leone
      </option>
      <option
        value="SG"
        :selected="(country === 'SG')"
      >
        Singapore
      </option>
      <option
        value="SK"
        :selected="(country === 'SK')"
      >
        Slovakia
      </option>
      <option
        value="SI"
        :selected="(country === 'SI')"
      >
        Slovenia
      </option>
      <option
        value="SB"
        :selected="(country === 'SB')"
      >
        Solomon Islands
      </option>
      <option
        value="SO"
        :selected="(country === 'SO')"
      >
        Somalia
      </option>
      <option
        value="ZA"
        :selected="(country === 'ZA')"
      >
        South Africa
      </option>
      <option
        value="GS"
        :selected="(country === 'GS')"
      >
        South Georgia and the South Sandwich Islands
      </option>
      <option
        value="ES"
        :selected="(country === 'ES')"
      >
        Spain
      </option>
      <option
        value="LK"
        :selected="(country === 'LK')"
      >
        Sri Lanka
      </option>
      <option
        value="SD"
        :selected="(country === 'SD')"
      >
        Sudan
      </option>
      <option
        value="SR"
        :selected="(country === 'SR')"
      >
        Suriname
      </option>
      <option
        value="SJ"
        :selected="(country === 'SJ')"
      >
        Svalbard and Jan Mayen
      </option>
      <option
        value="SZ"
        :selected="(country === 'SZ')"
      >
        Swaziland
      </option>
      <option
        value="SE"
        :selected="(country === 'SE')"
      >
        Sweden
      </option>
      <option
        value="CH"
        :selected="(country === 'CH')"
      >
        Switzerland
      </option>
      <option
        value="SY"
        :selected="(country === 'SY')"
      >
        Syrian Arab Republic
      </option>
      <option
        value="TW"
        :selected="(country === 'TW')"
      >
        Taiwan
      </option>
      <option
        value="TJ"
        :selected="(country === 'TJ')"
      >
        Tajikistan
      </option>
      <option
        value="TZ"
        :selected="(country === 'TZ')"
      >
        Tanzania, United Republic of
      </option>
      <option
        value="TH"
        :selected="(country === 'TH')"
      >
        Thailand
      </option>
      <option
        value="TL"
        :selected="(country === 'TL')"
      >
        Timor-Leste
      </option>
      <option
        value="TG"
        :selected="(country === 'TG')"
      >
        Togo
      </option>
      <option
        value="TK"
        :selected="(country === 'TK')"
      >
        Tokelau
      </option>
      <option
        value="TO"
        :selected="(country === 'TO')"
      >
        Tonga
      </option>
      <option
        value="TT"
        :selected="(country === 'TT')"
      >
        Trinidad and Tobago
      </option>
      <option
        value="TN"
        :selected="(country === 'TN')"
      >
        Tunisia
      </option>
      <option
        value="TR"
        :selected="(country === 'TR')"
      >
        Turkey
      </option>
      <option
        value="TM"
        :selected="(country === 'TM')"
      >
        Turkmenistan
      </option>
      <option
        value="TC"
        :selected="(country === 'TC')"
      >
        Turks and Caicos Islands
      </option>
      <option
        value="TV"
        :selected="(country === 'TV')"
      >
        Tuvalu
      </option>
      <option
        value="UG"
        :selected="(country === 'UG')"
      >
        Uganda
      </option>
      <option
        value="UA"
        :selected="(country === 'UA')"
      >
        Ukraine
      </option>
      <option
        value="AE"
        :selected="(country === 'AE')"
      >
        United Arab Emirates
      </option>
      <option
        value="GB"
        :selected="(country === 'GB')"
      >
        United Kingdom
      </option>
      <option
        value="US"
        :selected="(country === 'US')"
      >
        United States
      </option>
      <option
        value="UM"
        :selected="(country === 'UM')"
      >
        United States Minor Outlying Islands
      </option>
      <option
        value="UY"
        :selected="(country === 'UY')"
      >
        Uruguay
      </option>
      <option
        value="UZ"
        :selected="(country === 'UZ')"
      >
        Uzbekistan
      </option>
      <option
        value="VU"
        :selected="(country === 'VU')"
      >
        Vanuatu
      </option>
      <option
        value="VE"
        :selected="(country === 'VE')"
      >
        Venezuela
      </option>
      <option
        value="VN"
        :selected="(country === 'VN')"
      >
        Vietnam
      </option>
      <option
        value="VG"
        :selected="(country === 'VG')"
      >
        Virgin Islands, British
      </option>
      <option
        value="VI"
        :selected="(country === 'VI')"
      >
        Virgin Islands, U.S.
      </option>
      <option
        value="WF"
        :selected="(country === 'WF')"
      >
        Wallis and Futuna
      </option>
      <option
        value="EH"
        :selected="(country === 'EH')"
      >
        Western Sahara
      </option>
      <option
        value="YE"
        :selected="(country === 'YE')"
      >
        Yemen
      </option>
      <option
        value="ZM"
        :selected="(country === 'ZM')"
      >
        Zambia
      </option>
      <option
        value="ZW"
        :selected="(country === 'ZW')"
      >
        Zimbabwe
      </option>
    </sys-form-select>

    <template v-slot:actions="{ submittable }">
      <div class="buttons">
        <sys-form-button
          ghost
          @click.prevent="$store.dispatch('payment/gotoPreviousPage')"
        >
          <font-awesome-icon :icon="faChevronLeft" />
          <span>Back</span>
        </sys-form-button>

        <sys-form-button
          type="submit"
          color="primary"
          :disabled="!submittable || !valid"
        >
          Review
        </sys-form-button>
      </div>
    </template>
  </sys-form>
</template>

<style scoped>
  .loading {
    display: block;
    margin: 2rem auto;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1rem;
  }

  form p {
    margin: 0 1rem 2rem;
  }

  form >>> > div {
    margin: 0.6rem 1rem 0;
    flex: 1 1 100%;
  }

  form >>> > div:last-child {
    flex: 1 1 100%;
    margin: 0 1rem;
    width: 100%;
  }

  .half {
    flex: 1 1 40%;
  }

  >>> .StripeElement {
    background-color: var(--color-light-form-input-background);
    border-radius: 3px;
    border: 1px solid var(--color-light-form-input-border);
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.06);
    color: var(--color-light-form-input-foreground);
    display: block;
    font-family: var(--font-family-sans);
    font-size: 1rem;
    height: 2.4rem;
    line-height: 2.4rem;
    margin: 0;
    padding: 0.5rem;
    transition: border-color 0.2s ease;
  }

  >>> .StripeElement--focus {
    border-color: var(--color-light-form-input-active);
  }

  >>> .StripeElement--invalid {
    border-color: var(--color-light-form-input-invalid);
  }
</style>

<script>
  import { faChevronLeft, faSpinner } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { mapGetters } from 'vuex'

  export default {
    name: 'PaymentInfoBillingCreate',

    components: {
      FontAwesomeIcon
    },

    data: () => ({
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      country: 'US',

      stripe: null,

      stripeCard: null,
      stripeCardError: null,
      stripeCardValid: false,

      stripeExpiration: null,
      stripeExpirationError: null,
      stripeExpirationValid: false,

      stripeCVC: null,
      stripeCVCError: null,
      stripeCVCValid: false
    }),

    computed: {
      ...mapGetters('payment', ['canSelectSources']),

      faChevronLeft: () => faChevronLeft,
      faSpinner: () => faSpinner,

      valid () {
        return [
          this.stripeCardValid,
          this.stripeExpirationValid,
          this.stripeCVCValid
        ].every((v) => v)
      }
    },

    mounted () {
      // HACK: vee-validate is not initiating corretly preventing the submit
      // button from ever being _not_ disabled. This is a hacky hack fix
      this.$children[0].$children[0].validate({ silent: true })

      this.setupStripeCard()

      this.maybeGrabFromStore()
    },

    methods: {
      async createAddress () {
        return this.$store.dispatch('payment/createAddress', {
          firstName: this.firstName,
          lastName: this.lastName,
          address1: this.address1,
          address2: this.address2,
          city: this.city,
          state: this.state,
          zip: this.zip,
          country: this.country
        })
      },

      async createSource () {
        const stripe = await this.waitForStripe()
        const { token, error } = await stripe.createToken(this.stripeCard, {
          name: `${this.firstName} ${this.lastName}`,
          address_line1: this.address1,
          address_line2: this.address2,
          address_city: this.city,
          address_state: this.state,
          address_zip: this.zip,
          address_country: this.country,
          currency: 'USD'
        })

        if (token != null) {
          return this.$store.dispatch('payment/createSource', {
            addressId: this.$store.state.payment.address.id,
            token: token.id
          })
        } else {
          this.$store.commit('payment/setError', error.message)
          return false
        }
      },

      maybeGrabFromStore () {
        const storeData = this.$store.state['payment/address']

        if (storeData != null) {
          this.firstName = storeData.firstName || ''
          this.lastName = storeData.lastName || ''
          this.address1 = storeData.address1 || ''
          this.address2 = storeData.address2 || ''
          this.city = storeData.city || ''
          this.state = storeData.state || ''
          this.zip = storeData.zip || ''
          this.country = storeData.country || 'US'
        }
      },

      async setupStripeCard () {
        const stripe = await this.waitForStripe()
        const elements = stripe.elements()
        const style = {
          base: {
            height: '1.5rem',
            lineHeight: '1.5rem'
          }
        }

        this.stripeCard = elements.create('cardNumber', { style })
        this.stripeCard.mount('#stripe-card-input')

        this.stripeCard.addEventListener('change', (event) => {
          if (event.error) {
            this.stripeCardError = event.error.message
            this.stripeCardValid = false
          } else {
            this.stripeCardError = null
            this.stripeCardValid = true
          }
        })

        this.stripeExpiration = elements.create('cardExpiry')
        this.stripeExpiration.mount('#stripe-expiration-input', { style })

        this.stripeExpiration.addEventListener('change', (event) => {
          if (event.error) {
            this.stripeExpirationError = event.error.message
            this.stripeExpirationValid = false
          } else {
            this.stripeExpirationError = null
            this.stripeExpirationValid = true
          }
        })

        this.stripeCVC = elements.create('cardCvc')
        this.stripeCVC.mount('#stripe-cvc-input', { style })

        this.stripeCVC.addEventListener('change', (event) => {
          if (event.error) {
            this.stripeCVCError = event.error.message
            this.stipreCVCValid = false
          } else {
            this.stripeCVCError = null
            this.stripeCVCValid = true
          }
        })
      },

      async submit () {
        const addressRes = await this.createAddress()

        if (addressRes) {
          const sourceRes = await this.createSource()

          if (sourceRes) {
            await this.$store.dispatch('payment/gotoNextPage')
          }
        }
      },

      async waitForStripe () {
        const namespace = 'Stripe'
        const src = 'https://js.stripe.com/v3/'
        const key = process.env.STRIPE_KEY

        if (window[`${namespace}Instance`] != null) {
          return window[`${namespace}Instance`]
        }

        let el = document.querySelector(`[src="${src}"]`)
        if (el == null) {
          el = document.createElement('script')
          el.src = src
          el.async = true
          document.head.appendChild(el)
        }

        return new Promise((resolve, reject) => {
          el.addEventListener('load', () => {
            window[`${namespace}Instance`] = window[namespace](key)
            return resolve(window[`${namespace}Instance`])
          })

          el.addEventListener('error', (err) => {
            return reject(err)
          })
        })
      }
    }
  }
</script>
