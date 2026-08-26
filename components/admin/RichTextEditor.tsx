"use client";

import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useCallback } from "react";

type RichTextEditorProps = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
};

export function RichTextEditor({ onChange, placeholder, value }: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false, autolink: true }),
      Placeholder.configure({ placeholder: placeholder ?? "" })
    ],
    content: value,
    editorProps: {
      attributes: { class: "rte-content" }
    },
    onUpdate: ({ editor: instance }) => onChange(instance.getHTML())
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    const previous = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Link URL", previous ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="rte">
      <div className="rte-toolbar">
        <button type="button" className={editor.isActive("bold") ? "is-active" : ""} onClick={() => editor.chain().focus().toggleBold().run()}>B</button>
        <button type="button" className={editor.isActive("italic") ? "is-active" : ""} onClick={() => editor.chain().focus().toggleItalic().run()}><em>I</em></button>
        <button type="button" className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
        <button type="button" className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>
        <button type="button" className={editor.isActive("bulletList") ? "is-active" : ""} onClick={() => editor.chain().focus().toggleBulletList().run()}>&bull; List</button>
        <button type="button" className={editor.isActive("orderedList") ? "is-active" : ""} onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</button>
        <button type="button" className={editor.isActive("blockquote") ? "is-active" : ""} onClick={() => editor.chain().focus().toggleBlockquote().run()}>&ldquo;&rdquo;</button>
        <button type="button" className={editor.isActive("link") ? "is-active" : ""} onClick={setLink}>Link</button>
        <button type="button" onClick={() => editor.chain().focus().undo().run()}>&#8634;</button>
        <button type="button" onClick={() => editor.chain().focus().redo().run()}>&#8635;</button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
