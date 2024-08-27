import {
  RiBold,
  RiItalic,
  RiStrikethrough,
  RiCodeSSlashLine,
  RiListOrdered2,
} from "react-icons/ri";
import { Editor } from "@tiptap/react";
import { AiOutlineRedo, AiOutlineUndo } from "react-icons/ai";
import { BsTypeUnderline } from "react-icons/bs";
import { IoListOutline } from "react-icons/io5";

export default function TextEditorMenuBar({
  editor,
}: {
  editor: Editor | null;
}) {
  if (!editor) {
    return null;
  }
  return (
    <div className="mb-2 flex space-x-2">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        
        className={`p-2 ${editor.isActive("bold") ? "bg-violet-500 text-white rounded-md" : ""}`}
      >
        <RiBold className="size-5"/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 ${editor.isActive("underline") ? "bg-violet-500 text-white rounded-md" : ""}`}
      >
        <BsTypeUnderline className="size-5"/>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-2 ${editor.isActive("italic") ? "bg-violet-500 text-white rounded-md" : ""}`}
      >
        <RiItalic />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`p-2 ${editor.isActive("strike") ? "bg-violet-500 text-white rounded-md" : ""}`}
      >
        <RiStrikethrough className="size-5"/>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`p-2 ${editor.isActive("code") ? "bg-violet-500 text-white rounded-md" : ""}`}
      >
        <RiCodeSSlashLine className="size-5" />
      </button>
      <button
      type="button"
        onClick={() => {
          editor.chain().focus().toggleBulletList().run();
        }}
        className={`p-2 ${editor.isActive("bulletList") ? "bg-violet-500 text-white rounded-md" : ""}`}
      >
        <IoListOutline className="size-5"/>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        className={`p-2 ${editor.isActive("orderedList") ? "bg-violet-500 text-white rounded-md" : ""}`}
      >
        <RiListOrdered2 className="size-5"/>
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().undo().run();
        }}
        disabled={!editor.can().chain().focus().undo().run()}
        className={`p-2 ${editor.isActive("undo") ? "bg-violet-500 text-white rounded-md" : ""}`}
      >
        <AiOutlineUndo className="size-5" />
      </button>
      <button
        onClick={() => {
          editor.chain().focus().redo().run();
        }}
        disabled={!editor.can().chain().focus().redo().run()}
        className={`p-2 ${editor.isActive("redo") ? "bg-violet-500 text-white rounded-md" : ""}`}
      >
        <AiOutlineRedo className="size-5" />
      </button>
    </div>
  );
}
