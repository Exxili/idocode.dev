"use client";

import { Button } from "primereact/button";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function MacIndex() {
  const router = useRouter();

  const onGoBackClick = () => {
    router.push("/");
  };

  return (
    <div>
      <Button label="PearGoBack" onClick={onGoBackClick} />
    </div>
  );
}
