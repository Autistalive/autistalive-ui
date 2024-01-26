"use client";

import "@/app/global.css";

import { useAuth } from "@/hooks/auth";
import Navigation from "./(app)/Navigation";

const RootLayout = ({ children }) => {
  const { user } = useAuth({ middleware: "guest" });

  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen bg-gray-100">
          <Navigation user={user} />
          {children}
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js">
        </script>
      </body>
    </html>
  );
};

export default RootLayout;
