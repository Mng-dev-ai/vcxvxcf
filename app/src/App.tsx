import { LandingPage } from '@/pages/landing'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <LandingPage />
      <Toaster />
    </ThemeProvider>
  )
}

export default App