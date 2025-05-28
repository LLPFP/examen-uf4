import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { HiFingerPrint } from "react-icons/hi2";

export function Header() {
  return (
    <Menubar className="bg-black p-4 text-gray-300 shadow-md rounded-none border-b border-black flex flex-row items-center justify-between">
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

      <div className="flex justify-center items-center space-x-4 mx-auto">
        <MenubarMenu>
          <MenubarTrigger>Login</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Sign Up</MenubarTrigger>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}
