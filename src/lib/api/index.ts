import apiClient from './client';

// Export API client and related functions
export default apiClient;
export { apiClient };

// Re-export types
export * from './types';

// Export specific API methods
export const { get, post, put, delete: del } = apiClient;