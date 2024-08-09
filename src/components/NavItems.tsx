import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface NavigationItemProps {
  name: string;
  href: string;
  isActive: boolean;
  translate: (key: string) => string;
}

function NavigationItem({ name, href, isActive, translate }: NavigationItemProps) {
  return (
    <li className={twMerge("nav-item", isActive ? 'active' : '')}>
      <Link href={href} className={twMerge("nav-link", isActive ? 'active' : '')}>
        {translate(name)}
      </Link>
    </li>
  );
}

export default NavigationItem;
