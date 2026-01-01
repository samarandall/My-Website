"use client";
import CartPopUp from "@/components/cartPopUp/CartPopUp";
import SideMenu from "@/reusableComponents/sideMenu/SideMenu";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { CartStateContext } from '@/hooks/CartContext';
import React, { useContext } from 'react';

export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { menuOpen, setMenuOpen } = useContext(CartStateContext);

  return (
    <>
      <Navbar />
      <br /><br /><br />
      <SideMenu contents={<CartPopUp />} open={menuOpen} setOpen={setMenuOpen} />
      {children}
      <Footer />
    </>
  );
}

