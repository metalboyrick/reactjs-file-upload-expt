"use client";

import {
  ChangeEventHandler,
  DragEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { UploadWidgetProps } from "./UploadWidget";

// stateless upload widget
function UploadWidgetDropVanilla({ onChange }: UploadWidgetProps) {
  const inputTagRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const [isDragActive, setIsDragActive] = useState(false);

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragActive(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragActive(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragActive(false);

    const files = e.dataTransfer?.files ?? [];

    if (files && files.length) {
      onChange(files);
    }
  };

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!!e.target.files && e.target.files.length > 0) {
      onChange(e.target.files);
    }
  };

  useEffect(() => {
    const rootElem = rootRef?.current;
    rootElem?.addEventListener("dragenter", handleDragEnter);
    rootElem?.addEventListener("dragleave", handleDragLeave);
    rootElem?.addEventListener("drop", handleDrop);

    return () => {
      rootElem?.removeEventListener("dragenter", handleDragEnter);
      rootElem?.removeEventListener("dragleave", handleDragLeave);
      rootElem?.removeEventListener("drop", handleDrop);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={rootRef}
      className="bg-blue-500"
      onClick={() => inputTagRef?.current?.click()}
    >
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
      <input ref={inputTagRef} type="file" onChange={handleFileChange} hidden />
    </div>
  );
}

export default UploadWidgetDropVanilla;
