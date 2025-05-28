import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export function Header() {
  return (
    <Menubar className=" bg-black p-4 text-gray-200 shadow-md rounded-none border-b border-black flex flex-row items-center justify-between">
      <MenubarMenu>
        <MenubarTrigger>Pandem</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Docs</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Pricing</MenubarTrigger>
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
