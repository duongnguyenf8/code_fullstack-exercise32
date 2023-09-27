new F8.create('counter-element', {
  data: () => {
    return {
      count: 0,
    };
  },
  template: `
  <h1>uchiha {{count}} hahaha</h1>
  <h1>edokawa {{count}} shinichi</h1>
  <h1>nobi {{count}} shizuka</h1>
  <button v-on:click="count++">+</button>
  <button v-on:click="count--">-</button>
  `,
});
new F8.create('do-not-know-element', {
  data: () => {
    return {
      msg: 'HTML là ngôn ngữ lập trình',
    };
  },
  template: `
  <h1>{{msg}}</h1>
  <button v-on:mouseover="msg='HTML là ngôn ngữ mẹ đẻ'" v-on:click="msg='HTML là ngôn ngữ lập trình'">Change</button>
  `,
});
new F8.create('hello-the-gioi', {
  data: () => {
    return {
      header: 'Hello thế giới',
    };
  },
  template: `
  <h1>{{header}}</h1>
  `,
});
