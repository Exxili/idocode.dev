"use client";

import "@/styles/os-select.css";
import Doors from "@/assets/doors.png";
import Pear from "@/assets/pear.png";
import Image from "next/image";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

function getUserOS() {
  const platform = window.navigator.platform;
  if (platform.includes("Win")) return "windows";
  if (platform.includes("Mac")) return "mac";
  if (platform.includes("Linux")) return "linux";
  return "unknown";
}

export const OsSelectComponent: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  // Imports
  const router = useRouter();

  const [osTime, setOsTime] = useState(5);
  const OS = getUserOS();

  const timeout = setTimeout(() => {
    setOsTime(osTime - 1);

    if (osTime === 0) {
      clearTimeout(timeout);
      onClose();

      if (OS === "windows") {
        router.push("/doors");
      }

      if (OS === "mac") {
        router.push("/pearos");
      }
    }
  }, 1000);

  const onDoorsClick = () => {
    router.push("/doors");
  };

  const onPearClick = () => {
    router.push("/pearos");
  };

  return (
    <Dialog
      header="Select your preferred user interface"
      visible={open}
      closable={false}
      dismissableMask={false}
      style={{ width: "500px", maxWidth: "500px" }}
      onHide={() => {}}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-around">
          <div
            className="bg-gray-600 rounded-xl p-[13px] m-2"
            onClick={onDoorsClick}
          >
            <Image src={Doors} height={150} width={207} alt="Doors Logo" />
          </div>
          <div
            className="bg-gray-600 rounded-xl p-[12px] m-2"
            onClick={onPearClick}
          >
            <Image src={Pear} height={150} width={207} alt="Doors Logo" />
          </div>
        </div>

        <div className="flex flex-row mt-5">
          {OS === "windows" && (
            <div className={`${inter.className} flex`}>
              Detected Windows OS, Loading Doors in {osTime} seconds...
            </div>
          )}
          {OS === "mac" && <div>Mac</div>}
          {OS === "linux" && <div>Linux</div>}
        </div>
      </div>
    </Dialog>
    // <Modal open={open}>
    //   <ModalDialog variant="soft">
    //     {/* <ModalClose /> */}
    //     <DialogTitle>Select your Operating System</DialogTitle>
    //     <DialogContent>
    //       <div className="flex flex-row justify-around">
    //         <div>
    //           <button>
    //             <Image src={Doors} height={150} width={207} alt="Doors Logo" />
    //           </button>
    //         </div>
    //         <div>
    //           <button>
    //             <Image src={Pear} height={150} width={200} alt="Pear Logo" />
    //           </button>
    //         </div>
    //       </div>
    //     </DialogContent>
    //   </ModalDialog>
  );
};
