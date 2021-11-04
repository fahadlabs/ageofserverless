// import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement, HTMLAttributes } from 'react';
import { HTMLAttributes } from 'react';
// import Link from 'next/link';

// interface INavigate extends AnchorHTMLAttributes<HTMLAnchorElement> {
//   title: string;
// }
// export function Navigate({ title, className = '', href, ...props }: INavigate): ReactElement<HTMLButtonElement> {
//   return (
//     <Link href={href}>
//       <a {...props}></a>
//     </Link>
//   );
// }

// interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
//   title: string;
//   working?: boolean;
// }
// export function Button({ title, working = false, disabled, className = '', ...props }: IButton): ReactElement<HTMLButtonElement> {
//   return <button disabled={disabled} {...props}></button>;
// }

interface IContainer extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}
export function Container({ className = '', ...props }: IContainer) {
  return <div className={`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ${className}`}>{props.children}</div>;
}
