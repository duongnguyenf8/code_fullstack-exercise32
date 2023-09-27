new F8.create('first-title', {
  data: () => {
    return {
      msg: 'Hello thế giới',
    };
  },
  template: `
  <h1>{{msg}}</h1>
  `,
});

new F8.create('second-title', {
  data: () => {
    return {
      msg: 'HTML là ngôn ngữ đánh dấu siêu văn bản',
    };
  },
  template: `
  <h1>{{msg}}</h1>
  <button v-on:mouseover="msg='HTML là ngôn ngữ mẹ đẻ'" v-on:mouseout="msg='HTML là ngôn ngữ lập trình'">Change</button>
  `,
});

new F8.create('counter-element', {
  data: () => {
    return {
      count: 0,
      count2: 10,
    };
  },
  template: `
  <h1>uchiha {{count}} hahaha</h1>
  <h1>edokawa {{count}} shinichi</h1>
  <h1>nobi {{count}} shizuka</h1>
  <h1>nobi {{count2}} shizuka</h1>
  <button v-on:click="count++; count2--">+</button>
  <button v-on:click="count--; count2++">-</button>
  `,
});
