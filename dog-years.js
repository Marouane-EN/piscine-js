function dogYears(name,age) {
    const dogyear = (age / 31557600 )*7
    if (name === 'earth') {
        return Number((dogYears).toFixed(2))
    }
    if (name === 'mercury') {
        return Number((dogYears / 0.2408467).toFixed(2))
    }
    if (name === 'venus') {
        return Number((dogYears / 0.61519726).toFixed(2)) 
    }
    if (name === 'mars') {
        return Number((dogYears / 1.8808158).toFixed(2))
    }
    if (name === 'jupiter') {
        return Number((dogYears / 11.862615).toFixed(2))
    }
    if (name === 'saturn') {
        return Number((dogYears / 29.447498).toFixed(2)) 
    }
    if (name === 'uranus') {
        return Number((dogYears / 84.016846).toFixed(2))
    }
    if (name === 'neptune') {
        return Number((dogYears / 164.79132).toFixed(2))
    }
}