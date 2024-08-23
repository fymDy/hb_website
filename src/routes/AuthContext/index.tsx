/*
 * @Author: Mark
 * @Date: 2024-08-23 15:17:07
 * @LastEditTime: 2024-08-23 15:18:11
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_website/src/routes/AuthContext/index.tsx
 */
import React, { useEffect } from 'react';
import { ReactNode, createContext, useContext, useState } from "react";

import cache from '@/utils/cache';
import { TOKEN_KEY } from '@/enums/cacheEnums';
interface AuthContextType {
token: string | null;
login: (data: any) => void
logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
    const [token, setToken] = useState<string | null>(
        cache.get(TOKEN_KEY)
      )

    const login = (data:any) => {
        setToken(data.token)
        cache.set(TOKEN_KEY,data.token)
      };
      const logout = () => {
        setToken(null)
        cache.remove(TOKEN_KEY)
      };
   
  return (
    <AuthContext.Provider value={{token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
