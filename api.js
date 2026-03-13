const API_BASE_URL = 'https://softrate-call.onrender.com/api/admin';
// Uncomment below for local development
// const API_BASE_URL = 'http://localhost:4000/api/admin';

const api = {
    login: async (email, password) => {
        const res = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        return res.json();
    },
    
    getCompanies: async (token) => {
        const res = await fetch(`${API_BASE_URL}/companies`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        return { status: res.status, data };
    },
    
    approveCompany: async (id, token) => {
        const res = await fetch(`${API_BASE_URL}/approve/${id}`, {
            method: 'PATCH',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return res.json();
    },
    
    rejectCompany: async (id, token) => {
        const res = await fetch(`${API_BASE_URL}/reject/${id}`, {
            method: 'PATCH',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return res.json();
    }
};
