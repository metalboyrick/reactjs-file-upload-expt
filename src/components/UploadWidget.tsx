"use client";

import { ChangeEventHandler } from "react";

export interface UploadWidgetProps {
  onChange: (files: FileList | File[]) => void;
  allowedTypes?: string[];
}

// stateless upload widget
function UploadWidget({ onChange }: UploadWidgetProps) {
  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!!e.target.files && e.target.files.length > 0) {
      onChange(e.target.files);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default UploadWidget;
