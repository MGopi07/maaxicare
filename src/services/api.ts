const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Helper for getting the Sanctum token from local storage
const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

// Generic fetch wrapper
const fetchApi = async (endpoint: string, options: RequestInit = {}) => {
  const token = getAuthToken();
  
  const headers: Record<string, string> = {
    'Accept': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  // Attach token if present
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Only set Content-Type if we are not sending FormData
  if (!(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorData;
    try {
      errorData = await response.json();
    } catch (e) {
      errorData = null;
    }
    throw new Error(errorData?.message || `API Error: ${response.statusText}`);
  }

  // Handle empty responses (like 204 No Content for deletes/logout)
  if (response.status === 204) {
    return null;
  }

  return response.json();
};

export const api = {
  auth: {
    login: (data: Record<string, any>) => 
      fetchApi('/login', { method: 'POST', body: JSON.stringify(data) }),
    getMe: () => 
      fetchApi('/me', { method: 'GET' }),
    logout: () => 
      fetchApi('/logout', { method: 'POST' }),
  },
  categories: {
    getAll: () => 
      fetchApi('/categories', { method: 'GET' }),
    getSingle: (slug: string) => 
      fetchApi(`/categories/${slug}`, { method: 'GET' }),
    create: (data: Record<string, any>) => 
      fetchApi('/categories', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: string | number, data: Record<string, any>) => 
      fetchApi(`/categories/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: string | number) => 
      fetchApi(`/categories/${id}`, { method: 'DELETE' }),
  },
  products: {
    getAll: (params?: Record<string, any>) => {
      // Clean undefined params before stringifying
      const queryParams = new URLSearchParams();
      if (params) {
        Object.keys(params).forEach(key => {
          if (params[key] !== undefined && params[key] !== null) {
            queryParams.append(key, String(params[key]));
          }
        });
      }
      const query = queryParams.toString();
      return fetchApi(`/products${query ? `?${query}` : ''}`, { method: 'GET' });
    },
    getSingle: (slug: string, relatedLimit: number = 3) => 
      fetchApi(`/products/${slug}?related_limit=${relatedLimit}`, { method: 'GET' }),
    create: (data: Record<string, any>) => 
      fetchApi('/products', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: string | number, data: Record<string, any>) => 
      fetchApi(`/products/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: string | number) => 
      fetchApi(`/products/${id}`, { method: 'DELETE' }),
  },
  blogs: {
    getAll: (params?: Record<string, any>) => {
      const queryParams = new URLSearchParams();
      if (params) {
        Object.keys(params).forEach(key => {
          if (params[key] !== undefined && params[key] !== null) {
            queryParams.append(key, String(params[key]));
          }
        });
      }
      const query = queryParams.toString();
      return fetchApi(`/blogs${query ? `?${query}` : ''}`, { method: 'GET' });
    },
    getSingle: (slug: string) => 
      fetchApi(`/blogs/${slug}`, { method: 'GET' }),
    create: (data: Record<string, any>) => 
      fetchApi('/blogs', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: string | number, data: Record<string, any>) => 
      fetchApi(`/blogs/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: string | number) => 
      fetchApi(`/blogs/${id}`, { method: 'DELETE' }),
  },
  banners: {
    getAll: () => fetchApi('/banners', { method: 'GET' }),
    getSingle: (id: string | number) => fetchApi(`/banners/${id}`, { method: 'GET' }),
    create: (data: Record<string, any>) => fetchApi('/banners', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: string | number, data: Record<string, any>) => fetchApi(`/banners/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: string | number) => fetchApi(`/banners/${id}`, { method: 'DELETE' }),
  },
  contact: {
    submit: (data: Record<string, any>) => 
      fetchApi('/contact', { method: 'POST', body: JSON.stringify(data) }),
    getSubmissions: (params?: Record<string, any>) => {
      const queryParams = new URLSearchParams();
      if (params) {
        Object.keys(params).forEach(key => {
          if (params[key] !== undefined && params[key] !== null) {
            queryParams.append(key, String(params[key]));
          }
        });
      }
      const query = queryParams.toString();
      return fetchApi(`/submissions${query ? `?${query}` : ''}`, { method: 'GET' });
    },
    updateSubmission: (id: string | number, data: Record<string, any>) => 
      fetchApi(`/submissions/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    deleteSubmission: (id: string | number) => 
      fetchApi(`/submissions/${id}`, { method: 'DELETE' }),
  },
  media: {
    upload: (files: File | File[]) => {
      const formData = new FormData();
      if (Array.isArray(files)) {
        files.forEach(file => formData.append('files[]', file));
      } else {
        formData.append('file', files);
      }
      return fetchApi('/upload', { method: 'POST', body: formData });
    }
  }
};
