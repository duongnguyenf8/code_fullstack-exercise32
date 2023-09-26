const element = new F8.create('chao-the-gioi', {
  data: () => {
    return {
      count: 0,
      msg: 'HTML là ngôn ngữ lập trình',
    };
  },
  template: `
  <h1>{{msg}}</h1>
  <h1>uchiha {{count}} hahaha</h1>
  <h1>edokawa {{count}} shinichi</h1>
  <h1>nobi {{count}} shizuka</h1>
  <button v-on:click="count++">+</button>
  <button v-on:click="count--">-</button>
  <button v-on:mouseover="msg='HTML là ngôn ngữ mẹ đẻ'" v-on:click="msg='HTML là ngôn ngữ lập trình'">Change</button>
  `,
});
