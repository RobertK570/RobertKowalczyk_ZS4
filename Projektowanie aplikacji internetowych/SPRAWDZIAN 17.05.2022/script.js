const guzior = document.querySelector('#los');
let kulki = [];
let tmp = 0;
const out = document.querySelector('#out');

guzior.addEventListener('click', function(e){
    e.preventDefault();

    const ilosc = document.querySelector('input[name="ilosc"]').value * 1;
    const poczatek = document.querySelector('input[name="poczatek"]').value * 1;
    const koniec = document.querySelector('input[name="kuniec"]').value * 1;

    function losowanie(min, max) {
        return Math.round(Math.random() * (max - min)) + 1;
    }
    
    let i = 1;

    for (i=1; i<=ilosc; i++)
    {
      do
      {
        randoms = losowanie(poczatek, koniec);
        nastepna = true;
        for (j=1; j<=tmp; j++){
          if (randoms == kulki[j]) {
            nastepna = false;
          }
        }
        if (nastepna == true) {
          tmp++;
          kulki[tmp] = randoms;
        }
      }
      while(nastepna!=true);
    }

    out.textContent += kulki;
});