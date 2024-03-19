import React from 'react'
import Link from 'next/link';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

export const Header = () => {
  return (
    <Navbar fluid rounded className='bg-slate-300'>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="/next.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button as={Link} href="/auth">Iniciar sesión</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active>Home</NavbarLink>
        <NavbarLink as={Link} href="/personal">Personal</NavbarLink>
        <NavbarLink href="/contratos">Contratos</NavbarLink>
        <NavbarLink href="/horarios">Horarios</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}
