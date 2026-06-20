import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'group/button inline-flex items-center justify-center rounded-[16px] border border-transparent bg-clip-padding text-sm font-semibold transition-all duration-300 ease-out outline-none select-none focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-70 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-[rgba(255,255,255,0.12)] backdrop-blur-[16px] border-[rgba(255,255,255,0.25)] shadow-[0_8px_32px_rgba(0,0,0,0.12)] text-white hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(37,99,235,0.25)] hover:bg-gradient-to-r hover:from-[rgba(37,99,235,0.9)] hover:to-[rgba(59,130,246,0.8)]',
        secondary:
          'bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] border-[rgba(255,255,255,0.3)] text-white hover:bg-[rgba(255,255,255,0.15)] hover:-translate-y-0.5',
        glass:
          'bg-[rgba(255,255,255,0.05)] backdrop-blur-[20px] border-[rgba(255,255,255,0.18)] text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:bg-[rgba(255,255,255,0.14)] hover:-translate-y-0.5',
        ghost:
          'bg-transparent text-white hover:bg-[rgba(255,255,255,0.08)]',
        link:
          'text-white underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-[56px] gap-2 px-7',
        sm: 'h-[48px] gap-2 px-6 text-sm',
        lg: 'h-[64px] gap-3 px-8 text-base',
        icon: 'h-[56px] w-[56px] rounded-full p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'primary',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
