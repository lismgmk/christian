// import Vue from "vue";
// import  VueI18n from "vue-i18n";
//
// Vue.use(VueI18n);
//
// export default ({ app, store }) => {
//   // Set i18n instance on app
//   // This way we can use it globaly in our components
//   app.i18n = new VueI18n({
//     // Set the initial locale (here, based on our store's initial value)
//     locale: store.state.locale,
//
//     // Set the fallback locale in case the current lovcale can't be found
//     fallbackLocale: "fr",
//
//     // Associate each locale to a content file
//     messages: {
//       en: require("~/static/content-en.json"),
//       fr: require("~/static/content-fr.json")
//     }
//   });
// };

export default req => {
  if (process.server) {
    let broswerLang = req.headers["accept-language"]
      .split(",")[0]
      .toLocaleLowerCase()
      .substring(0, 2);
    return broswerLang;
  }
};
