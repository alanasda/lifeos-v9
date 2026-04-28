/**
 * LifeOS V9 API client.
 * Connects frontend to Render backend.
 */
'use strict';

(function () {
  const API_BASE_URL =
    window.CONFIG?.API_BASE_URL ||
    window.CONFIG?.BACKEND_URL ||
    'https://lifeos-v9-api.onrender.com';

  async function request(path, options = {}) {
    const url = `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        mode: 'cors',
        credentials: 'omit'
      });

      const text = await response.text();
      const data = text ? JSON.parse(text) : null;

      if (!response.ok) {
        throw new Error(data?.message || data?.error || `HTTP ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('[LifeOSAPI]', error);
      throw error;
    }
  }

  window.LifeOSAPI = {
    get: (path, options = {}) =>
      request(path, { ...options, method: 'GET' }),

    post: (path, body = {}, options = {}) =>
      request(path, {
        ...options,
        method: 'POST',
        body: JSON.stringify(body)
      }),

    put: (path, body = {}, options = {}) =>
      request(path, {
        ...options,
        method: 'PUT',
        body: JSON.stringify(body)
      }),

    patch: (path, body = {}, options = {}) =>
      request(path, {
        ...options,
        method: 'PATCH',
        body: JSON.stringify(body)
      }),

    delete: (path, options = {}) =>
      request(path, { ...options, method: 'DELETE' }),

    health: () => request('/health')
  };
})();
