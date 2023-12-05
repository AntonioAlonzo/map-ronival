import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({pictures}) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  
  const slides = pictures.map((item) => ({
    src: item,
    width: 3840,
    height: 2560,
  }));

  return (
    <div className="w-full">
        <div className="relative">
          <div className="h-40">
            <span className="absolute text-white bottom-1 pl-2 font-bold">{ pictures.length + " fotos"}</span>
            <div style={{ backgroundImage: `url("${pictures[0]}")` }} className="h-full bg-center bg-cover"></div>
            <div className="bg-black opacity-0 hover:opacity-75 h-40 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out" onClick={() => {
                      setOpen(true);
                      setImage(pictures[0].imageUrl);
                    }}
            >
              <p className="text-white">
                <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
              </p>
            </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        showPrevNext={false}
        slides={slides}
      />
    </div>
  );
}