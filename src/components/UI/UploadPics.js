import React, { useState, useEffect } from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { postImg } from "../../services/service";
import { useDispatch } from "react-redux";
import { SET_IMG } from "../../redux/slices/img";

const UploadPics = () => {
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  let fileURLs = [];
  useEffect(() => {
    fileURLs = fileList.map(curr => curr.fileURL);
    dispatch(SET_IMG(fileURLs));
  }, [fileList]);
  const upload = async ({ file, onSuccess, onError }) => {
    if (file.size > 1048576) {
      onError();
      toast.error("Please upload image less than 10MB");
    } else {
      const res = await postImg(file);
      onSuccess(null, file);
      setFileList([...fileList, { uid: file.uid, fileURL: res.data.result }]);
    }
  };

  const remove = file => {
    setFileList(fileList.filter(curr => curr.uid !== file.uid));
  };
  return (
    <>
      <Upload
        customRequest={upload}
        onRemove={remove}
        accept="image/*"
        listType="picture"
      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </>
  );
};

export default UploadPics;
