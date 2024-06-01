// components/Header.tsx
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <h1>Pete Johnson Electric</h1>
      <Image src="/PJES-100pct.png" alt="Logo" width={240} height={179} />
    </header>
  );
};

export default Header;
