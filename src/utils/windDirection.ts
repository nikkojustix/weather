const windDirection = (deg: number): string => {
  if (deg < 22.5 || deg >= 337.5) return 'северный'
  else if (deg < 67.5) return 'северо-восточный'
  else if (deg < 112.5) return 'восточный'
  else if (deg < 157.5) return 'юго-восточный'
  else if (deg < 202.5) return 'южный'
  else if (deg < 247.5) return 'юго-западный'
  else if (deg < 292.5) return 'западный'
  else return 'северо-западный'
}


export default windDirection