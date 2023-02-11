export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  };

  route(event) {
    event = event || window.event
    event.preventDefault();

    const allLink = document.querySelectorAll('a');

    window.history.pushState({}, "", event.target.href);

    allLink.forEach(element => {
      event.target.classList.add('hide');

      if (event.target.classList == 'hide') {
        element.classList.remove('hide');
        console.log(element)

      }
    })

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