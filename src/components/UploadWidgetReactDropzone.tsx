"use client";

import { ChangeEventHandler } from "react";
import { useDropzone } from "react-dropzone";

import { UploadWidgetProps } from "./UploadWidget";

// stateless upload widget
function UploadWidgetReactDropzone({ onChange }: UploadWidgetProps) {
  const onDrop = (acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps({
        className: "bg-red-500",
      })}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default UploadWidgetReactDropzone;
