import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Heart, Share2, Settings } from "lucide-react";

export const dynamic = "force-static";

export default function ComponentsDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            shadcn/ui Components Showcase
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Beautiful, accessible components built with Radix UI and Tailwind CSS. 
            All styled consistently with your Tailwind configuration.
          </p>
        </div>

        <div className="space-y-8">
          {/* Buttons Section */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">Buttons</h2>
              <p className="text-muted-foreground">Multiple variants and sizes</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cards Section */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">Cards</h2>
              <p className="text-muted-foreground">Flexible container with header and content</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This is a basic card component with header and content sections. 
                    Perfect for displaying information in a structured way.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>Card with interactive elements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Cards can contain any content you need, including forms and other components.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Form Elements Section */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">Form Elements</h2>
              <p className="text-muted-foreground">Input fields and labels</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={4} />
                  </div>
                  <Button className="w-full">Submit</Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Badges Section */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">Badges</h2>
              <p className="text-muted-foreground">Small label components</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Avatar Section */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">Avatars</h2>
              <p className="text-muted-foreground">User profile pictures</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Dropdown Menu Section */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">Dropdown Menu</h2>
              <p className="text-muted-foreground">Accessible menu component</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <Menu className="w-4 h-4 mr-2" />
                      Open Menu
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Heart className="w-4 h-4 mr-2" />
                      Favorite
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </section>

          {/* Icons Section */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">Icons (Lucide)</h2>
              <p className="text-muted-foreground">Beautiful icon library included</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <Heart className="w-8 h-8 text-destructive" />
                    <span className="text-xs text-muted-foreground">Heart</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Share2 className="w-8 h-8 text-primary" />
                    <span className="text-xs text-muted-foreground">Share</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="w-8 h-8 text-accent" />
                    <span className="text-xs text-muted-foreground">Settings</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Menu className="w-8 h-8 text-secondary" />
                    <span className="text-xs text-muted-foreground">Menu</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Color System Section */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">Color System</h2>
              <p className="text-muted-foreground">Tailwind CSS color variables</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="h-12 bg-primary rounded-md mb-2" />
                    <p className="text-xs font-medium">Primary</p>
                  </div>
                  <div>
                    <div className="h-12 bg-secondary rounded-md mb-2" />
                    <p className="text-xs font-medium">Secondary</p>
                  </div>
                  <div>
                    <div className="h-12 bg-accent rounded-md mb-2" />
                    <p className="text-xs font-medium">Accent</p>
                  </div>
                  <div>
                    <div className="h-12 bg-destructive rounded-md mb-2" />
                    <p className="text-xs font-medium">Destructive</p>
                  </div>
                  <div>
                    <div className="h-12 bg-muted rounded-md mb-2" />
                    <p className="text-xs font-medium">Muted</p>
                  </div>
                  <div>
                    <div className="h-12 bg-card rounded-md mb-2" />
                    <p className="text-xs font-medium">Card</p>
                  </div>
                  <div>
                    <div className="h-12 bg-background border-2 border-border rounded-md mb-2" />
                    <p className="text-xs font-medium">Background</p>
                  </div>
                  <div>
                    <div className="h-12 bg-popover rounded-md mb-2" />
                    <p className="text-xs font-medium">Popover</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Getting Started Section */}
          <section>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">Getting Started</h2>
              <p className="text-muted-foreground">How to use shadcn/ui components</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Import Components</h3>
                    <pre className="bg-secondary text-secondary-foreground p-3 rounded-md overflow-x-auto">
                      <code>{`import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"`}</code>
                    </pre>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2. Use in Your Components</h3>
                    <pre className="bg-secondary text-secondary-foreground p-3 rounded-md overflow-x-auto">
                      <code>{`export default function Page() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  )
}`}</code>
                    </pre>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3. Add More Components</h3>
                    <p className="text-muted-foreground">
                      Use <code className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">pnpm dlx shadcn@latest add [component-name]</code> to add more components.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
