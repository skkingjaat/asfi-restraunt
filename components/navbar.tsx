"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <nav className="border-b bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="shrink-0 font-bold text-2xl text-orange-600 flex items-center gap-2">
                        <span className="text-3xl">🍗</span>
                        Lick A Chick
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button className="bg-orange-600 hover:bg-orange-700">Order Now</Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger>
                                <Menu className="h-6 w-6 text-gray-700" />
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="flex flex-col gap-6 mt-8">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="text-gray-700 hover:text-orange-600 font-medium text-lg transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                                        Order Now
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
