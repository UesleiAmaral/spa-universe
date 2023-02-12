export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  };

  route(event) {
    event = event || window.event
    event.preventDefault();

    this.addSelect(event);

    window.history.pushState({}, "", event.target.href);

    this.handle();
  };

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes['/'];
    fetch(route)
      .then(data => data.text())
      .then(html => {

        document.querySelector('#app').innerHTML = html;
      });
  };

  addSelect(event) {

    const allLink = document.querySelectorAll('a');

    if (event.target.innerText == 'Home') {
      allLink[0].classList.add('select');
      allLink[1].classList.remove('select');
      allLink[2].classList.remove('select');

    }
    else if (event.target.innerText == 'O Universo') {
      allLink[0].classList.remove('select');
      allLink[1].classList.add('select');
      allLink[2].classList.remove('select');

    }
    else if (event.target.innerText == 'Exploração') {
      allLink[0].classList.remove('select');
      allLink[1].classList.remove('select');
      allLink[2].classList.add('select');

    }
  };

};