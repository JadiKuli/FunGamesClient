import Image from "next/image";
import { MdFileDownload } from "react-icons/md";

export default function AvailableApp() {
  return (
    <>
      <h1 className="text-4xl font-semibold mb-8">Available in</h1>
      <div className="flex items-center gap-5">
        <Image
          src={"/images/shared/playstore_download.svg"}
          width={200}
          height={200}
          alt=""
          className="hover:cursor-pointer hover:scale-110 transition duration-300"
        />
        <Image
          src={"/images/shared/appstore_download.svg"}
          width={200}
          height={200}
          alt=""
          className="hover:cursor-pointer hover:scale-110 transition duration-300"
        />
        <div className="h-14 w-[200px] rounded-xl flex items-center justify-center bg-white/10 hover:bg-white/20 hover:cursor-pointer hover:scale-110 transition duration-300 flex gap-3">
          <MdFileDownload size={20} />
          <p className="text-lg">Download .apk</p>
        </div>
      </div>
    </>
  );
}
