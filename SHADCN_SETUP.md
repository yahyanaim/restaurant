# shadcn/ui Setup Guide

This project is now configured with **shadcn/ui** - a collection of beautiful, accessible components built with Radix UI and Tailwind CSS.

## What's Included

### Installed Components
The following shadcn/ui components are already installed and ready to use:

- **Button** - Multiple variants (default, secondary, destructive, outline, ghost, link) and sizes
- **Card** - Container component with header, title, description, and content sections
- **Input** - Form input element
- **Label** - Form label element
- **Badge** - Small label component with multiple variants
- **Avatar** - User profile picture component with fallback
- **Textarea** - Multi-line text input
- **Dropdown Menu** - Accessible menu component

### Key Features

✅ **Fully Styled with Tailwind CSS** - All components use Tailwind CSS with CSS variables for theming  
✅ **Accessible** - Built on Radix UI primitives for excellent accessibility  
✅ **Icons Included** - Lucide React icons library is pre-configured  
✅ **Dark Mode Ready** - CSS variables support light and dark themes  
✅ **Type Safe** - Full TypeScript support for all components  

## Quick Start

### Using Components

Import and use components directly:

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

### Adding New Components

To add more shadcn/ui components to your project, use:

```bash
pnpm dlx shadcn@latest add [component-name]
```

Example:
```bash
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add checkbox
pnpm dlx shadcn@latest add tabs
```

Available components: https://ui.shadcn.com/docs/components

## File Structure

```
src/
├── components/
│   └── ui/                    # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── badge.tsx
│       ├── avatar.tsx
│       ├── textarea.tsx
│       └── dropdown-menu.tsx
├── lib/
│   └── utils.ts              # Utility function (cn) for merging Tailwind classes
└── app/
    ├── globals.css           # Global styles with CSS variables
    └── components-demo/      # Component showcase page
```

## Configuration

### tailwind.config.ts
- Theme colors are defined as CSS variables in `src/app/globals.css`
- Custom colors (primary, secondary, accent, sand) are extended with HSL variables
- `tailwindcss-animate` plugin is included for smooth animations

### components.json
- Specifies the component registry and configuration
- Uses "new-york" style
- Configured for TypeScript and React Server Components (RSC)
- Icon library: Lucide React

## Styling & Customization

### CSS Variables
All shadcn/ui components use CSS variables defined in `src/app/globals.css`:

- **--primary** / **--primary-foreground** - Primary colors
- **--secondary** / **--secondary-foreground** - Secondary colors
- **--accent** / **--accent-foreground** - Accent colors
- **--destructive** / **--destructive-foreground** - Error/danger colors
- **--background** / **--foreground** - Base colors
- **--card** / **--card-foreground** - Card component colors
- **--muted** / **--muted-foreground** - Muted colors
- **--border** - Border color
- **--input** - Input field color
- **--ring** - Focus ring color

### Utility Function
The `cn()` function in `src/lib/utils.ts` merges Tailwind classes while handling conflicts:

```tsx
import { cn } from "@/lib/utils"

<Button className={cn("text-lg", "px-8")}>
  Click me
</Button>
```

## Component Showcase

Visit `/components-demo` to see all installed components in action with live examples and code snippets.

## Dependencies

New dependencies added by shadcn/ui:

```json
{
  "@radix-ui/react-avatar": "^1.1.11",
  "@radix-ui/react-dropdown-menu": "^2.1.16",
  "@radix-ui/react-label": "^2.1.8",
  "@radix-ui/react-slot": "^1.2.4",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.561.0",
  "tailwind-merge": "^3.4.0",
  "tailwindcss-animate": "^1.0.7"
}
```

## Resources

- **shadcn/ui Documentation**: https://ui.shadcn.com
- **Radix UI**: https://radix-ui.com
- **Tailwind CSS**: https://tailwindcss.com
- **Lucide Icons**: https://lucide.dev

## Next Steps

1. ✅ Check out the component showcase at `/components-demo`
2. Start using components in your pages and custom components
3. Add more components as needed with `pnpm dlx shadcn@latest add [component-name]`
4. Customize colors by editing CSS variables in `src/app/globals.css`
5. Create your own components using shadcn/ui components as building blocks
