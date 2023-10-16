"use client";

import { ChangeEventHandler } from "react";
import { FileUploader } from "react-drag-drop-files";

import { UploadWidgetProps } from "./UploadWidget";

// stateless upload widget
function UploadWidgetReactDragDrop({
  onChange,
  allowedTypes = [],
}: UploadWidgetProps) {
  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!!e.target.files && e.target.files.length > 0) {
      onChange(e.target.files);
    }
  };

  return (
    <div>
      <FileUploader
        handleChange={handleFileChange}
        name="file"
        types={allowedTypes}
        multiple
      />
    </div>
  );
}

export default UploadWidgetReactDragDrop;
