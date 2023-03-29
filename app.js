let screen = document.querySelector('form input');
let btns = [...document.querySelectorAll('.buttons button')];

    btns.forEach((btn) => {
        btn.addEventListener('click', (el) => {
           //console.log(btn.dataset.num);
           let valeur = el.currentTarget.dataset.num;

           switch(valeur) {
              case 'C':
                screen.value = "";
                break;
              case 'DEL':
                screen.value = screen.value.slice(0, -1);
                break;
              case '=':
                const answer = eval(screen.value);
                screen.value === '' ? '' : screen.value = answer
                break;
              default:
                const listes = btns.map(btn => {
                  return btn.innerHTML;
                })
                listes.includes(valeur)
                ? screen.value += valeur
                : ''
       }
       })
    });
       
    window.addEventListener('error', (e) => {
        console.log(`Error Santax`);
        confirm(`cette Operation Ne Peut Pas Etre Executer : ${e.message}`)
    })

    
