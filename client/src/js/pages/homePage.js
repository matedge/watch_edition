// const $ = require('jquery');

class HomePage {
  template() {
    return `
      <p>Date: <span class="clock-date"></span></p>
      <p>Time: <span class="clock-time"></span></p>
      <img src="../../images/logo.png" alt="" />
      <div>Hello, World!</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at feugiat massa. Nullam et pellentesque mauris. Aenean vel molestie velit. Aenean dui metus, pellentesque nec molestie sit amet, tempus vel velit. Donec nec dui sapien. Nunc fermentum, erat et condimentum facilisis, nunc nisl placerat enim, non tincidunt massa felis ut libero. Proin tincidunt lectus sit amet sollicitudin fermentum.</p>
      <p>Donec dapibus velit a bibendum pulvinar. Nulla sit amet nisl fringilla, ullamcorper dui vitae, ullamcorper nisi. Fusce sit amet nunc ultrices, malesuada urna a, venenatis purus. Morbi hendrerit, magna ut tempus imperdiet, felis est vestibulum quam, nec suscipit ex risus ac eros. Mauris interdum, odio vel ultricies aliquet, erat eros pulvinar leo, a ultrices diam ante eu libero. Donec imperdiet non risus vel fringilla. Cras vitae orci eu ligula lobortis consectetur id et lacus. Morbi ut mi in leo iaculis ullamcorper. Pellentesque elementum tortor eros, non finibus felis varius consequat. Suspendisse potenti.</p>
    `;
  }

  createElement() {
    const element = document.createElement('div');
    element.innerHTML = this.template();
    return element;
  }

  // right() {
  //   window.App.navigate('contacts');
  // }
  //
  // top() {
  //   $('#watch-face').animate({ scrollTop: '-=70px' });
  // }
  //
  // button() {
  //   $('#watch-face').animate({ scrollTop: '+=70px' });
  // }
}

module.exports = HomePage;
