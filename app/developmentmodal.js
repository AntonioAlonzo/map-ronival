import { Modal } from "flowbite-react";
import Gallery from "./gallery";

function DevelopmentModal({
  showDetailWindow,
  setShowDetailWindow,
  development,
}) {
  return (
    <Modal
      dismissible
      position={"center-left"}
      show={showDetailWindow}
      size="sm"
      className=" border-r-0"
      onClose={() => setShowDetailWindow(false)}
    >
      <div
       style={{ "--image-url": `url(${development.gallery[0]})` }}
        className="bg-center bg-cover h-56 p-0 bg-[image:var(--image-url)]" 
      ></div>
      <Modal.Header className="bg-[#004D7B] border-r-0 rounded-t-none">
        <img src="" alt="" />
        <p className="text-white">{development ? development.name : ""}</p>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="p-6 bg-slate-200">
          <p className="px-3 pb-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
            name
          </p>
          <p className="px-3 leading-relaxed text-gray-950 dark:text-gray-400 text-justify">
            {development ? development.name : ""}
          </p>
          <br></br>
          <p className="px-3 pb-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
            description
          </p>
          <p className="px-3 leading-relaxed text-gray-950 dark:text-gray-400 text-justify">
            {development ? development.description : ""}
          </p>
        </div>
        <div className="w-full">
          {development && <Gallery pictures={development.gallery} />}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DevelopmentModal;