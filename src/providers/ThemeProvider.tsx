"use client";

import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import React, { ReactNode, useContext, useEffect, useState } from "react";

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { theme }: ThemeContextType = useContext(ThemeContext)!;
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={`${theme} themeContainer`}>{children}</div>;
  }
};

export default ThemeProvider;
