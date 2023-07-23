import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}

export default Layout;
