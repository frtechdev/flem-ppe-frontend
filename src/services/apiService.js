/**
 * Serviço de rota de API
 * @param {Object} path caminho da API
 * @param {Object} options especificações e parâmetros
 * @returns {Object} resposta HTTP
 */
export const apiService = (path, options) => {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error("Path is required"));
    }
    const baseUrl = "/api/";
    const url = baseUrl + path;
    try {
      const res = fetch(url, options);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};
