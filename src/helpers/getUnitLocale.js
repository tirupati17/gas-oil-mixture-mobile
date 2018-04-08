export default unit => {
  switch (unit) {
    case 'liters':
      return 'litersUnit'
    case 'us':
      return 'usGallons'
    case 'imperial':
      return 'imperialGallons'
  }
}
