"use client";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {ReactNode} from "react";
import {faX} from "@fortawesome/free-solid-svg-icons";

interface Props {
   children: ReactNode;
}

function Modal({children}: Props) {
   const searchParams = useSearchParams();
   const modal = searchParams.get("modal");
   const pathname = usePathname();

   return (
      <>
         {modal && (
            <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center p-4">
               <div className="relative">
                  <Link href={pathname} className="absolute right-0 m-2">
                     <div className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
                        <FontAwesomeIcon icon={faX} />
                     </div>
                  </Link>
                  <div className="flex flex-col items-center">{children}</div>
               </div>
            </dialog>
         )}
      </>
   );
}

export default Modal;
