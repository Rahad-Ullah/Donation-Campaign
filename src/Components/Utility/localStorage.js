const getStoredDonations = () => {
    const storedDonations = localStorage.getItem('donations')
    if(storedDonations) {
        return JSON.parse(storedDonations)
    }
    return [];
}

const saveDonation = (id) => {
    const storedDonations = getStoredDonations();
    storedDonations.push(id)
    localStorage.setItem('donations', JSON.stringify(storedDonations))
}

export {getStoredDonations, saveDonation}