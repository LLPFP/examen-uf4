import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
export function Header() {
  return (
    <Menubar className=" bg-black p-4 text-gray-200 shadow-md rounded-none border-b border-black flex flex-row items-center justify-between">
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/">Pandem</Link>
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

      <MenubarMenu>
        <MenubarTrigger>Login</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Sign Up</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
