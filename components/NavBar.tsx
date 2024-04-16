import Image from "next/image";
import Logo from "../public/icon.png";

export default function NavBar() {
  const today = new Date();
  return (
    <div className="flex gap-4 items-center max-w-screen-2xl mx-auto p-2">
      <Image src={Logo} alt="logo" width={50} height={50} />
      <p className="font-bold text-lg">Contrats IDE</p>
    </div>
  );
}
