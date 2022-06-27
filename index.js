document.body.append(povuciDiv);
var povuciDivPozicija;


povuciDiv.onmousedown = function (e) {

    document.addEventListener('mousemove', pomicanjeMisa);
    povuciDiv.onmouseup = function () {
        document.removeEventListener('mousemove', pomicanjeMisa);
        povuciDiv.onmouseup = null;
    };


    let x = e.clientX - povuciDiv.getBoundingClientRect().left;
 
    let y = e.clientY - povuciDiv.getBoundingClientRect().top;


   
    function pomicanjeMisa(e) {
        pomakniNa(e.pageX, e.pageY);

        povuciDiv.hidden = true;
        let ubaciDivPozicija = document.elementFromPoint(e.clientX, e.clientY);
        povuciDiv.hidden = false;


       
        let pogodakPozicija = ubaciDivPozicija.closest('.ubaciDiv');


        if (povuciDivPozicija != ubaciDivPozicija) {
            if (povuciDivPozicija) {
                zadrziPoziciju(povuciDivPozicija);
            }
            povuciDivPozicija = pogodakPozicija;
            if (povuciDivPozicija) { 
                obradiPogodak(povuciDivPozicija);
            }
        }
    }

    function pomakniNa(xOs, yOs) {
        povuciDiv.style.left = xOs - x + 'px';
        povuciDiv.style.top = yOs - y + 'px';
    }

    function zadrziPoziciju(div) {
        div.style.background = "";
    }

    function obradiPogodak(div) {
        div.style.background = 'green';
    }


    povuciDiv.ondragstart = function () {
        return false;
    };
};