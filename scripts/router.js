export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  };

  route(event) {
    event = event || window.event
    event.preventDefault();

    const allLink = document.querySelectorAll('a');

    allLink.forEach(element => {
      event.target.classList.add('select');

      if (event.target.classList == 'select') {
        element.classList.remove('select');

      }

    })

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


};