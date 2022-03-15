class Komis {
    constructor (nazwa) {
        this.nazwa = nazwa;
        this.samochody = [];
    }
    
    dodajSamochod(auto) {
        this.samochody.push(auto);
    }

    wyswietlSamochody() {
        const div = document.querySelector('div');

        //div.innerHTML = `<div>${this.samochody[0].marka} </div>`;

        this.samochody.forEach(auto => {
            div.innerHTML += `<p> <b> Marka: </b> ${auto.marka} </p>`;
            div.innerHTML += `<p> <b> Model: </b> ${auto.model} </p>`;
            div.innerHTML += `<p> <b> Cena: </b> ${auto.cena} zł</p>`;
            div.innerHTML += `<p> <b> Rocznik: </b> ${auto.rocznik} </p>`;
            div.innerHTML += `<hr>`;
        });
    }

    usunSamochody(auto) {
            
        this.samochody.splice();
    }
}