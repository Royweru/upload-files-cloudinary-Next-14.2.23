/* eslint-disable @typescript-eslint/no-unused-vars */
import UploadFile from "./simpleUploader";
import { SimpleUploaderClient } from "./simpleUploaderClient";

export default function Home() {
  return (
    <div className=" w-full min-h-screen flex items-center justify-center">
      <SimpleUploaderClient/>
    </div>
  );
}
