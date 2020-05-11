import React,{Component} from 'react'
import { EditorState, convertToRaw,ContentState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default class RichText extends Component {

  state = {
    editorState: EditorState.createEmpty()//初始化一个编辑器状态
	}

	//根据富文本还原出效果文本，以及编辑器状态
	setRichText = (html)=>{
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.setState({editorState})
    }
	}
	
	//用于获取效果文本对应的富文本
	getRichText = ()=>{
		const { editorState } = this.state;
		return draftToHtml(convertToRaw(editorState.getCurrentContent()))
	}

	//当用户在富文本输入框内输入的东西改变时，调用onEditorStateChange
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState} //编辑器的状态
          //wrapperClassName="demo1" //wrapper区域样式的类名
          editorStyle={{ //editor区域样式的类名
						border:'1px solid black',
						paddingLeft:'10px',
						minHeight:'200px',
						lineHeight:'10px'
					}} 
          onEditorStateChange={this.onEditorStateChange} //编辑器改变的回调
        />
      </div>
    );
  }
}