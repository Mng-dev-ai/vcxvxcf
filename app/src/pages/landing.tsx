import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import { 
  Rocket, 
  Zap, 
  Shield, 
  ArrowRight 
} from "lucide-react"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Rocket className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold">YourProduct</h1>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#features" className="text-muted-foreground hover:text-foreground">Features</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a>
          <ModeToggle />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto mt-16 text-center">
        <h2 className="text-5xl font-bold mb-4">
          Build Amazing Products <br /> Without Writing Code
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Empower your creativity with our no-code platform. Design, develop, and launch faster than ever before.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto mt-24">
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Lightning Fast</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Rapid development with intuitive drag-and-drop interface.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Secure & Scalable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Enterprise-grade security and infrastructure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Rocket className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Launch Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Deploy instantly to web, mobile, and more.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto mt-24 text-center bg-primary/10 py-16 rounded-xl">
        <h3 className="text-4xl font-bold mb-4">
          Ready to Transform Your Ideas?
        </h3>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Join thousands of creators who are building the future, without writing a single line of code.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground">
          Start Your Free Trial
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-8 mt-16 border-t">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground">© 2024 YourProduct. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}