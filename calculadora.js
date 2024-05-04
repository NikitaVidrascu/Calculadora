const pantalla = document.querySelector('#pantalla');
const botones = document.querySelectorAll('button');

//Calculadora
botones.forEach((item) => {//Recorre todos los botones constantemente
    item.onclick = () => {//Si se llega a pulsar alguno entrara al filtro
        if (item.id == 'limpiar') {//Si se pulsa el boton C (con id limpiar)
            pantalla.innerText = '';//Vaciara la pantalla
        } else if (item.id == 'eliminar') {//Si se pulsa el boton <-(con id eliminar)
            let string = pantalla.innerText.toString();//Almacenara todo lo que hay en la pantalla en un string
            pantalla.innerText = string.slice(0, -1);//Quitara el ultimo caracter
        } else if (pantalla.innerText != '' && item.id == 'igual') {//Si se pulsa el boton = (con el id igual) y la pantalla no esta vacia
            let input = pantalla.innerText.replace('^', '**').replace('÷', '/').replace('x', '*');//Convierte todos los operadores a unos que entienda JavaScript
            pantalla.innerText = eval(input);//Hace la operacion que esta en la pantalla
        } else if (pantalla.innerText == '' && item.id == 'igual') {//Si se pulsa el boton = (con el id igual) y la pantalla esta vacia
            pantalla.innerText = 'Vacio'//Mostrara el mensaje 'Vacio'
            setTimeout(() => (pantalla.innerText = ''), 2000)//El mensaje durara 2000 milisegundos (2 segundos) y se vaciara
        } else {
            pantalla.innerText += item.id//Si no es ninguno de los anteriores, quedaran solo los numeros y los operadores que se mostraran por pantalla si se llega a pulsarlos
        }
    }
})


//Cambio de tema 
const botonCambiarTema = document.querySelector('.activador-tema');
const Calculadora = document.querySelector('.calculadora')
const iconoTema = document.querySelector('.icono-tema')

let estaOscuro = true;//Por defecto estara en oscuro
botonCambiarTema.onclick = () => {//Si se llega a pulsar al boton del tema 
    Calculadora.classList.toggle('oscuro');//Se quitara o pondra la clase oscuro que se encarga del tema de la calculadora
    botonCambiarTema.classList.toggle('activo');//Se quitara o pondra la clase activo que se encarga del tema del boton que sera siempre el contrario
    estaOscuro = !estaOscuro;//Cambiara el estado de True a False o de False a True
}

//Detector de eventos de pulsar teclas
document.addEventListener('keydown', function (event) {
    const key = event.key;//Variable que guarda la tecla que se pulsa
    if (key >= 0 && key <= 9) pantalla.innerText += key;//Muestra por patalla cualquier numero entre el 0 y el 9
    else if (key == 'Enter' || key == '=') {//En caso de que se pulse el entero o el = se procesara la operacion
        let input = pantalla.innerText.replace('^', '**').replace('÷', '/').replace('x', '*');
        pantalla.innerText = eval(input);
    } else if (key == 'Backspace') {//En caso de que se pulse la tecla de borrar, borrara el ultimo caracter
        let string = pantalla.innerText.toString();
        pantalla.innerText = string.slice(0, -1);
    } else if (key === 'Delete') {//En caso de que se pulse la tecla de suprimir, borrara todo lo que hay en la pantalla
        pantalla.innerText = ''
    } else if (key == '+' || key == '-' || key == '*' || key == '/' || key == '^' || key == '(' || key == ')')//Mostrara cualquiera de estos caracteres por pantalla
    pantalla.innerText += key; 

});