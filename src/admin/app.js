const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    "es",
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    es: {
      "Auth.form.welcome.title":
        "¡Bienvenido al dashboard de Web Dev Hut, colaborador!",
      "Auth.form.welcome.subtitle": "Ingresa tus datos",
      // Translate a plugin's key/value pair by adding the plugin's name as a prefix
      // In this case, we translate the "plugin.name" key of plugin "content-type-builder"
    },
    en: {
      "Auth.form.welcome.title":
        "Welcome to Web Dev Hut's Dashboard, collaborator!",
      "Auth.form.welcome.subtitle": "Enter your details",
      // Translate a plugin's key/value pair by adding the plugin's name as a prefix
      // In this case, we translate the "plugin.name" key of plugin "content-type-builder"
    },
  },
  themes: {
    colors: {
      // Only 5 shade for tone
      // Navy Blue
      primary100: "#ac73e6",
      primary200: "#9736e8",
      primary500: "#ac73e6",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
