import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Editor({ defaultData, setData }) {
    return (
        <CKEditor
            editor={ClassicEditor}
            data={defaultData}
            onChange={(_, editor) => setData(editor.getData())}
            onInit={(editor) => {
                // You can store the "editor" and use when it is needed.
                // console.log("Editor is ready to use!", editor);
                editor.editing.view.change((writer) => {
                writer.setStyle(
                    "height",
                    "500px",
                    editor.editing.view.document.getRoot()
                );
                });
            }}
        />
    )
}