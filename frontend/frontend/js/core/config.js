/* LifeOS V9 config: backend + Firebase enabled */
(function(){
  const API_BASE_URL = 'https://lifeos-v9-api.onrender.com';

  window.CONFIG = {
    UI_ONLY: false,
    API_BASE_URL: API_BASE_URL,
    BACKEND_URL: API_BASE_URL,
    REQUEST_TIMEOUT: 30000
  };

  window.LOCALE = {
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/Sao_Paulo',
    lang: navigator.language || 'pt-BR',
    currency: 'BRL'
  };
})();
