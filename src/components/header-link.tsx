import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface HeaderLinkProps extends NavLinkProps {}

export const HeaderLink: FC<PropsWithChildren<HeaderLinkProps>> = ({
  className,
  ...props
}) => {
  return (
    <NavLink
      end
      className={({ isActive }) =>
        clsx(
          'text-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white active:bg-gray-800',
          isActive && 'bg-gray-700 text-white',
          className
        )
      }
      {...props}
    />
  );
};
