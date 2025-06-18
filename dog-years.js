function dogYears(name, age) {
    let dogyear = (age / 31557600) * 7
    if (name === 'earth') {
        return Number((dogyear).toFixed(2))
    }
    if (name === 'mercury') {
        return Number((dogyear / 0.2408467).toFixed(2))
    }
    if (name === 'venus') {
        return Number((dogyear / 0.61519726).toFixed(2))
    }
    if (name === 'mars') {
        return Number((dogyear / 1.8808158).toFixed(2))
    }
    if (name === 'jupiter') {
        return Number((dogyear / 11.862615).toFixed(2))
    }
    if (name === 'saturn') {
        return Number((dogyear / 29.447498).toFixed(2))
    }
    if (name === 'uranus') {
        return Number((dogyear / 84.016846).toFixed(2))
    }
    if (name === 'neptune') {
        return Number((dogyear / 164.79132).toFixed(2))
    }
}
