// created DOM element
let element = document.createElement('div');
//properties set
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';

//appendChild()

//append element to body
document.body.appendChild(element);
//center element
element.style.textAlign = 'center';

// append ul elements to DOM element
let ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);


//moved ul elements to the left
ul.style.textAlign = 'left';

// removeChild()

//remove second element from ul
ul.removeChild(ul.querySelector('li:nth-child(2)'));

//remove all elements from ul
ul.remove();
