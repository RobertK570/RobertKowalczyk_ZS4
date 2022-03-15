class Samochod {
    constructor(marka, model, cena, rocznik, spalanie) {
        this.marka = marka;
        this.model = model;
        this.cena = cena;
        this.rocznik = rocznik;
        this.spalanie = spalanie;
    }
    
    wiek() {
        const data = new Date();
        const rok = data.getFullYear();
        return 'Wiek samochodu wynosi: ' + (rok - this.rocznik) + ' lat.';
    }

    koszt(cenaPaliwa) {
        //const cenaPaliwa = 7.65;
        return 'Koszt przejechania 100km wynosi: ' + (cenaPaliwa * this.spalanie) + ' zł.';
    }
}