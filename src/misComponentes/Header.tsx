import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { HiFingerPrint } from "react-icons/hi2";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <Menubar className="bg-black p-4 text-gray-300 shadow-md rounded-none border-b border-gray-600 flex flex-row items-center justify-between mt-4 mb-4 space-y-4">
      <div className="flex justify-center items-center space-x-4 mx-auto">
        <MenubarMenu>
          <MenubarTrigger className="text-lg font-bold flex items-center">
            <HiFingerPrint className="inline-block mr-3 w-6 h-6" />
            <Link href="/" className="hover:underline">
              Pandem
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/docs">Docs</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/pricing">Pricing</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Status</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>FAQs</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Contact Us</MenubarTrigger>
        </MenubarMenu>
      </div>

      <div className="flex justify-center items-center space-x-4 mx-auto mb-5">
        <MenubarMenu>
          <MenubarTrigger>Login</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <Button variant="outline" className="text-black">
            Sign Up
          </Button>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}
