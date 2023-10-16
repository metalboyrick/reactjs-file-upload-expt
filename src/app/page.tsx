"use client";

import UploadWidget from "@/components/UploadWidget";
import UploadWidgetDropVanilla from "@/components/UploadWidgetDropVanilla";
import UploadWidgetReactDragDrop from "@/components/UploadWidgetReactDragDrop";
import UploadWidgetReactDropzone from "@/components/UploadWidgetReactDropzone";
import { useState } from "react";

const allowedTypes = ["png", "jpg", "jpeg"];

export default function Home() {
  const [files, setFiles] = useState<FileList | File[]>([]);

  const handleSubmit = () => {
    for (let i = 0; i < files.length; i++) {
      console.log(files[i].name);
    }
  };

  const handleChange = (files: FileList | File[]) => {
    setFiles(files);
  };

  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24">
      <div>
        <h1>selected file(s)</h1>
        <div>
          {(() => {
            const resultingFiles = [];
            for (let i = 0; i < files.length; i++) {
              resultingFiles.push(files[i]);
            }

            return resultingFiles.map((file, index) => (
              <div key={index}>{file.name}</div>
            ));
          })()}
        </div>
      </div>

      <div>
        <h1>classic upload</h1>
        <UploadWidget onChange={handleChange} />
      </div>

      <div>
        <h1>vanilla drag n drop</h1>
        <UploadWidgetDropVanilla onChange={handleChange} />
      </div>

      <div>
        <h1>react-drag-drop-file</h1>
        <UploadWidgetReactDragDrop onChange={handleChange} />
      </div>

      <div>
        <h1>react-dropzone</h1>
        <UploadWidgetReactDropzone onChange={handleChange} />
      </div>

      <button onClick={handleSubmit}>submit</button>
    </main>
  );
}
