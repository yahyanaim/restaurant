# UI Components

This directory contains all shadcn/ui components that are part of this project's design system.

## Available Components

### Button
- **File**: `button.tsx`
- **Variants**: default, secondary, destructive, outline, ghost, link
- **Sizes**: default, sm, lg, icon
- **Usage**:
```tsx
import { Button } from "@/components/ui/button"

<Button>Click me</Button>
<Button variant="secondary" size="lg">Large Button</Button>
```

### Card
- **File**: `card.tsx`
- **Subcomponents**: CardHeader, CardFooter, CardTitle, CardDescription, CardContent
- **Usage**:
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

### Input
- **File**: `input.tsx`
- **Attributes**: Supports all standard HTML input attributes
- **Usage**:
```tsx
import { Input } from "@/components/ui/input"

<Input type="email" placeholder="Enter email" />
```

### Label
- **File**: `label.tsx`
- **Usage**:
```tsx
import { Label } from "@/components/ui/label"

<Label htmlFor="input-id">Label Text</Label>
```

### Badge
- **File**: `badge.tsx`
- **Variants**: default, secondary, destructive, outline
- **Usage**:
```tsx
import { Badge } from "@/components/ui/badge"

<Badge>New</Badge>
<Badge variant="outline">Tag</Badge>
```

### Avatar
- **File**: `avatar.tsx`
- **Subcomponents**: AvatarImage, AvatarFallback
- **Usage**:
```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="https://..." alt="@username" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

### Textarea
- **File**: `textarea.tsx`
- **Attributes**: Supports all standard HTML textarea attributes
- **Usage**:
```tsx
import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Enter your message" rows={4} />
```

### Dropdown Menu
- **File**: `dropdown-menu.tsx`
- **Subcomponents**: DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator
- **Usage**:
```tsx
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Styling

All components use Tailwind CSS with CSS variables for theming. Colors are defined in `src/app/globals.css` and can be customized there.

### Using cn() Utility
Merge Tailwind classes safely using the `cn()` function from `@/lib/utils`:

```tsx
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

<Button className={cn("text-lg", "px-8")}>
  Custom Button
</Button>
```

## Adding New Components

To add more shadcn/ui components:

```bash
pnpm dlx shadcn@latest add [component-name]
```

Browse available components: https://ui.shadcn.com/docs/components

## Customization

Edit component styles directly in their files. All use Tailwind CSS classes, so styling is consistent with your Tailwind configuration.

To change colors globally, edit the CSS variables in `src/app/globals.css`.
