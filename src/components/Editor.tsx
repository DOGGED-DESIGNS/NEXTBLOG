import React from "react";

import dynamic from "next/dynamic";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const Editor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: () => void;
}) => {
  return (
    <QuillNoSSRWrapper
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
        ],
      }}
      className="editor"
      value={value}
      onChange={onChange}
    />
  );
};

export default Editor;
