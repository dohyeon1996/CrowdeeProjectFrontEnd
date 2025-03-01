import React, {useEffect, useRef, useState} from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from "ckeditor5-custom-build/build/ckeditor";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import { Button } from "@material-ui/core";
export default function Write() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [flag, setFlag] = useState(false);
    const inputRef = useRef();
    
    
    // useEffect(()=>{
    //     // 저장 후 목록으로 이동
       
    //         history.push('/app/list');
    //     }
    // },[]);
    
    
    const handleList = () => {
        history.push('/app/list');
    }
    
    const handleReset = () => {
        
        setContent("");
    }
    
    const handleSave = () => {
        if (!isEmpty(title) && !isEmpty(content)) {

        }else {
            setFlag(true);
        }
    }
    
    const handleEditorChange = (event, editor) => {
        setContent(editor.getData());
    }
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    
    const handleClose = () => {
        setFlag(false);
    }
 
    
    
    return (

      <div className="Editor">

        <div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}} />
            <div>
            <CKEditor
              editor={ Editor }
              
              config={{
                placeholder: "기모치맨!",
                title: {isEnabled:false},
                image: {
                    styles: ['alignLeft', 'alignCenter', 'alignRight'],
                    resizeUnit: 'px',
                    resizeOptions: [
                    {
                        name: 'resizeImage:original',
                        value: null,
                        icon: 'original'
                    },
                    {
                        name: 'resizeImage:50',
                        value: '50',
                        icon: 'medium'
                    },
                    {
                        name: 'resizeImage:75',
                        value: '75',
                        icon: 'large'
                    }
                ]},
             
                
                
                toolbar: ['heading','Title', 'bold', 'italic', '|',
                'bulletedList', 'numberedList','TodoList','Underline', 'blockquote', 'link', 'code', 'codeblock', '|',
                'imageupload','MediaEmbed', 'imagestyle:alignLeft', 'imagestyle:alignCenter', 'imagestyle:alignRight', '|',
                'undo', 'redo','resizeImage:50','resizeImage:75','resizeImage:original','FontColor','FontFamily','FontSize','FontBackgroundColor',
                'Table','TableToolbar','TextTransformation'
                ],
                
               
                 simpleUpload: {
                    uploadUrl: 'http://localhost:8081/api/image/',
                }
                
              }}
              onChange={handleEditorChange}
              onBlur={ ( event, editor ) => {
                  console.log( 'Blur.', editor );
              } }
              onFocus={ ( event, editor ) => {
                  console.log( 'Focus.', editor );
              } }
              onReady={(editor) => {
                console.log(editor.ui.componentFactory);
                console.log("시작한다", editor);
              }}
          />
            </div>
          
          </div>
      </div>
    );
  }