"use client";

import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import EmotionRegistry from "@/lib/emotionRegistry";
import theme from "@/theme/theme";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledEngineProvider injectFirst>
          <EmotionRegistry>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </EmotionRegistry>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
