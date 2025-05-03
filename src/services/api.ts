
import axios from 'axios';

// Define base URL based on environment
// For production, use the current domain (Vercel deployment)
// For development, use the proxy path
const baseURL = import.meta.env.PROD 
  ? '/api' // This will be served from the same domain when deployed to Vercel
  : '/api'; // This will be proxied in development

// Configure axios instance with the backend URL
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // Log all API requests for debugging
    console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`, config.data || '');
    return config;
  },
  (error) => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log(`[API Response] ${response.config.method?.toUpperCase()} ${response.config.url}:`, response.data);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(`[API Error] ${error.config?.method?.toUpperCase()} ${error.config?.url}:`, {
        status: error.response.status,
        data: error.response.data
      });
    } else if (error.request) {
      console.error('[API Error] No response received:', error.request);
    } else {
      console.error('[API Error]', error.message);
    }
    return Promise.reject(error);
  }
);

// Auth endpoints
export const authAPI = {
  login: (credentials: { cpf: string; senha: string }) => 
    api.post('/auth/login', credentials),
  verifyCPF: (cpf: string) => 
    api.get(`/auth/verify-cpf/${cpf}`),
  register: (userData: any) => 
    api.post('/auth/cadastro', userData),
  logout: () => api.post('/auth/logout'),
  getUser: () => api.get('/auth/usuario'),
  getUserInfo: (cpf: string) => 
    api.get(`/auth/usuario/${cpf}`),
};

// User endpoints
export const userAPI = {
  getSaldo: (userId: string) => api.get(`/usuarios/saldo/${userId}`),
  getProfile: (userId: string) => api.get(`/usuarios/${userId}`),
  updateProfile: (userId: string, data: any) => api.put(`/usuarios/${userId}`, data),
};

// Apostas endpoints
export const apostasAPI = {
  criarAposta: (aposta: {
    userId: string;
    tipo: string;
    valor: number;
    modalidade?: string;
    selecao?: any;
    numeros?: number[];
  }) => api.post('/apostas/criar', aposta),
  listarApostasUsuario: (userId: string) => api.get(`/apostas/listar/${userId}`),
  listar: (userId: string) => api.get(`/apostas/listar/${userId}`),
};

// Resultados endpoints
export const resultadosAPI = {
  getLatest: () => api.get('/resultados/latest'),
  getByDate: (date: string) => api.get(`/resultados/data/${date}`),
  listar: () => api.get('/resultados/listar'),
  sortear: () => api.post('/resultados/sortear'),
  verificar: (data: any) => api.post('/resultados/verificar', data),
};

// Pagamentos endpoints
export const pagamentosAPI = {
  gerarPix: (data: {
    valor: number;
    userId: string;
    nome: string;
    sobrenome?: string;
    email: string;
    cpf?: string;
    telefone?: string;
    cupom?: string;
  }) => api.post('/pagamentos/gerar-pix', data),
  
  solicitarSaque: (data: {
    valor: number;
    userId: string;
    chavePix: string;
    nome: string;
    sobrenome?: string;
    cpf?: string;
  }) => api.post('/pagamentos/solicitar-saque', data),
  
  listarTransacoes: (userId: string) => api.get(`/pagamentos/transacoes/${userId}`),
};

export default api;
