import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinSight",
  description: "One stop Budgeting Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/titlelogo.png" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider // <-- ADD THIS
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted-50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-600">
                <p>Made with 🔥 by IET DAVV students</p>
              </div>
            </footer>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
