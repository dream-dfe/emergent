import React, { forwardRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import ListItem from "@tiptap/extension-list-item";
import CodeBlock from "@tiptap/extension-code-block";
import TextEditorMenuBar from "./text-editor-menu-bar";
import Underline from "@tiptap/extension-underline";
import OrderedList from "@tiptap/extension-ordered-list";

type TextEditorProps = {
  onChange: (content: string) => void;
};

const RichTextEditor = forwardRef<HTMLDivElement, TextEditorProps>(
  ({ onChange }, ref) => {
    const editor = useEditor({
      extensions: [
        StarterKit, Underline
      ],

      content: "",
      onUpdate: ({ editor }) => {
        onChange(editor.getHTML());
      },
      editorProps: {
        attributes: {
          class:
            "min-h-[150px] cursor-text rounded-md border p-5 ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        },
      },
      
    });

    if (!editor) {
      return null;
    }

    return (
      <div ref={ref}>
        <TextEditorMenuBar editor={editor} />
        <EditorContent editor={editor} style={{ whiteSpace: "pre-line" }} />
      </div>
    );
  },
);

export default RichTextEditor;
