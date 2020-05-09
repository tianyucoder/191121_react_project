import React,{Component} from 'react'
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

//将图片转为base64
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default class PictureWall extends Component {

  state = {
    previewVisible: false, //控制是否展示预览框
    previewImage: '', //预览图片的url或base64
		previewTitle: '', //预览窗图片的标题
		//fileList中是所有上传过的文件
    fileList: [
      {
        uid: '-1', //必备属性，底层读取后作为react中的key去使用
        name: 'image.png', //图片名
        status: 'done', //图片状态，有：uploading done error removed中
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',//图片地址
      }
    ],
  };

	//预览窗关闭按钮的回调（程序员无需修改）
  handleCancel = () => this.setState({ previewVisible: false });

	//点击预览按钮的回调，("小眼睛按钮"，程序员无需修改)
  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

	//重要！！！！！图片状态发生改变的回调，在antd照片墙组件中每一个上传的图片都是有状态的。
  handleChange = ({file,fileList}) => {
		if(file.status === 'done'){
			console.log('恭喜图片上传成功');
		}else if(file.status === 'removed'){
			console.log('你删除了一个图片,名为：',file.name);
		}
		this.setState({fileList});
	}


  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">点我选择图片</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 4 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}