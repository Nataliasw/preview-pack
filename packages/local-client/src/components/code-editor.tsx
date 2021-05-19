import "./code-editor.css";
import "./syntax.css";
import MonacoEditor, { OnChange, OnMount } from "@monaco-editor/react";
import prettier from "prettier";
import parser from "prettier/parser-babel";
import { useRef } from "react";
import monacoJSXHighlighter from "monaco-jsx-highlighter";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";



interface CodeEditorProps {
  initialValue: string;
  onChange: OnChange;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorRef = useRef<any>();


  const onEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    editor.getModel()?.updateOptions({ tabSize: 2 });



    const babelParse = (code: any) => parse(code, {
      sourceType: "module",
      plugins: ["jsx"],
    });

    const highlighter = new monacoJSXHighlighter(
      //@ts-ignore
      monaco,
      babelParse,
      traverse,
      editor
    );



    highlighter.highLightOnDidChangeModelContent(100,
      () => { },
      () => { },
      undefined,
      () => { });
  }





  const onFormatClick = () => {

    const unformatted = editorRef.current.getModel().getValue();
    const formatted = prettier.format(unformatted,
      {
        parser: "babel",
        plugins: [parser],
        useTabs: false,
        semi: true,
      }).replace(/\n$/, "");

    editorRef.current.setValue(formatted);
  }

  return (
    <div className="editor-wrapper">
      <button
        className="button button-format is-info is-small"
        onClick={onFormatClick}>
        Format</button>
      <MonacoEditor
        onMount={onEditorDidMount}
        onChange={onChange}
        value={initialValue}
        theme="vs-dark"
        language="javascript"
        height="100%"
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 18,
          scrollBeyondLastLine: false,
          automaticLayout: true
        }}
      />
    </div>
  )
}

export default CodeEditor;