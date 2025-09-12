// API service layer for wedding website
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Generic API request handler
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Request failed' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    // Handle non-JSON responses (like image data)
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return response;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// Health check
export const healthCheck = () => apiRequest('/health');

// Photo Gallery API
export const galleryApi = {
  // Get all photos metadata
  getPhotos: () => apiRequest('/photos'),
  
  // Get individual photo as blob URL
  getPhoto: async (photoId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/photos/${photoId}/image`);
      if (!response.ok) throw new Error('Failed to fetch image');
      
      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: response.headers.get('content-type') });
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error('Failed to fetch photo:', error);
      throw error;
    }
  },

  // Upload photo (admin only)
  uploadPhoto: async (formData, token) => {
    return apiRequest('/photos', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        // Don't set Content-Type for FormData, let browser set it with boundary
      },
      body: formData,
    });
  },

  // Update photo metadata (admin only)
  updatePhoto: async (photoId, photoData, token) => {
    return apiRequest(`/photos/${photoId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(photoData),
    });
  },

  // Delete photo (admin only)
  deletePhoto: async (photoId, token) => {
    return apiRequest(`/photos/${photoId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  },
};

// Story API
export const storyApi = {
  getStory: () => apiRequest('/story'),
  
  updateStory: async (storyData, token) => {
    return apiRequest('/story', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(storyData),
    });
  },
};

// Schedule API
export const scheduleApi = {
  getSchedule: () => apiRequest('/schedule'),
  
  updateSchedule: async (scheduleData, token) => {
    return apiRequest('/schedule', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(scheduleData),
    });
  },
};

// Trivia API
export const triviaApi = {
  getTrivia: () => apiRequest('/trivia'),
  
  updateTrivia: async (triviaData, token) => {
    return apiRequest('/trivia', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(triviaData),
    });
  },
};

// Site Configuration API
export const siteApi = {
  getConfig: () => apiRequest('/site-config'),
  
  updateConfig: async (configData, token) => {
    return apiRequest('/site-config', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(configData),
    });
  },
};

// Authentication API
export const authApi = {
  login: async (credentials) => {
    return apiRequest('/admin/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  logout: async (token) => {
    return apiRequest('/admin/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  verifyToken: async (token) => {
    return apiRequest('/admin/verify', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  },
};

// Utility function to handle file downloads
export const downloadFile = async (endpoint, filename, token = null) => {
  try {
    const headers = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, { headers });
    if (!response.ok) throw new Error('Download failed');

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (error) {
    console.error('File download failed:', error);
    throw error;
  }
};

// Error handling utilities
export const isNetworkError = (error) => {
  return error instanceof TypeError && error.message === 'Failed to fetch';
};

export const getErrorMessage = (error) => {
  if (isNetworkError(error)) {
    return 'Unable to connect to server. Please check your internet connection.';
  }
  return error.message || 'An unexpected error occurred.';
};