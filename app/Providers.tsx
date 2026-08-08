"use client";

import { LanguageProvider } from "../lib/LanguageContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
