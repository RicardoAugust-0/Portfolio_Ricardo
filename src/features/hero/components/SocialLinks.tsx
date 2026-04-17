import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '../../../shared/components/ui/button';

export const CustomGithub = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.3 3.8 5.1 4 5.1 4a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.5 11.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    </svg>
  )
);
CustomGithub.displayName = 'CustomGithub';

export const CustomLinkedin = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
);
CustomLinkedin.displayName = 'CustomLinkedin';

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
  target?: string;
  rel?: string;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://linkedin.com/in/ricardo-augusto',
    icon: <CustomLinkedin className="h-5 w-5" />,
    label: 'LinkedIn',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    href: 'https://github.com/ricardo-augusto',
    icon: <CustomGithub className="h-5 w-5" />,
    label: 'GitHub',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    href: 'mailto:ricardo@example.com',
    icon: <Mail className="h-5 w-5" />,
    label: 'Email',
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-2">
      {socialLinks.map((link) => (
        <Button
          key={link.label}
          variant="outline"
          size="icon"
          className="rounded-full shadow-sm hover:border-primary/50 hover:text-primary transition-all"
          asChild
        >
          <a
            href={link.href}
            target={link.target}
            rel={link.rel}
            aria-label={link.label}
            title={link.label}
          >
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  );
}
