const langTranslations = {
  'hindi': {
    'View Pricing': 'मूल्य निर्धारण देखें',
    'Manage Campaigns': 'अभियान प्रबंधित करें',
    'DATE': 'दिनांक',
    'CAMPAIGN': 'अभियान',
    'VIEW': 'देखे गए',
    'ACTIONS': 'कार्रवाई',
    'Upcoming Campaigns': 'आगामी अभियान',
    'Live Campaigns': 'लाइव अभियान',
    'Past Campaigns': 'पिछले अभियान',
    'Report': 'विवरण',
    'Schedule Again': 'सूची दुबारा बनाये',
    'Days ahead': 'दिन बाकी',
    'Days ago': 'दिन बीत गए',
    'Live Now': 'अभी जारी है',
    'Month': 'महीना',
    'Year': 'साल',
    '1 Week - 1 Month': '1 सप्ताह - 1 महीना',
    '6 Months': '6 महीने',
    '1 Year': '1 साल',
    'Close': 'बंद करे',
    'Pricing': 'मूल्य निर्धारण',
  }
}

export const translate = (l, key) => {
  if(l === 'hindi') {
    return langTranslations?.[l]?.[key] ? langTranslations[l][key] : key;
  } else {
    return key;
  }
}
