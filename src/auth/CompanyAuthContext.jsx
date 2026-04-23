import { createContext, useState, useContext, useEffect } from 'react';

const CompanyAuthContext = createContext();

// Mock company data
const MOCK_COMPANIES = [
  {
    id: 1,
    email: 'ferrero@example.com',
    password: 'password123',
    name: 'Ferrero',
    industry: 'FMCG / Consumer Goods',
    location: 'Alba, Italy',
    logo: null,
    description: 'Leading confectionery company',
    employees: '2500+',
    website: 'www.ferrero.com'
  },
  {
    id: 2,
    email: 'gucci@example.com',
    password: 'password123',
    name: 'Gucci',
    industry: 'Fashion / Luxury',
    location: 'Florence, Italy',
    logo: null,
    description: 'Italian luxury fashion brand',
    employees: '3000+',
    website: 'www.gucci.com'
  },
  {
    id: 3,
    email: 'tiktok@example.com',
    password: 'password123',
    name: 'TikTok',
    industry: 'Social Media / Technology',
    location: 'Milan, Italy',
    logo: null,
    description: 'Short-form video platform',
    employees: '5000+',
    website: 'www.tiktok.com'
  }
];

export function CompanyAuthProvider({ children }) {
  const [company, setCompany] = useState(() => {
    const saved = localStorage.getItem('companyAuth');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {
    const found = MOCK_COMPANIES.find(
      c => c.email === email && c.password === password
    );
    
    if (found) {
      const { password: _, ...companyData } = found;
      setCompany(companyData);
      localStorage.setItem('companyAuth', JSON.stringify(companyData));
      return { success: true };
    }
    return { success: false, error: 'Email o password non corretti' };
  };

  const logout = () => {
    setCompany(null);
    localStorage.removeItem('companyAuth');
  };

  return (
    <CompanyAuthContext.Provider value={{ company, login, logout }}>
      {children}
    </CompanyAuthContext.Provider>
  );
}

export function useCompanyAuth() {
  return useContext(CompanyAuthContext);
}

export const MOCK_COMPANIES_LIST = MOCK_COMPANIES;
