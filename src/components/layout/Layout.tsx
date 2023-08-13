import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;