import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Input,
  Space,
  Form,
  Calendar,
  DatePicker,
  InputNumber,
} from "antd";
import { Prompt, RouteComponentProps } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { icePackDTO } from "../../../dto/common.dto";

function Admin({}: RouteComponentProps) {
  const password = "zerowaste";
  const [authenticated, setAuthenticated] = useState<boolean>();
  const [inputPassword, setInputPassword] = useState<string>();
  const [icePackInfo, setIcePackInfo] = useState<icePackDTO>({
    createdAt: new Date(), //default to today
    totalGather: 0,
    totalRecycle: 0,
  });

  const handleOK = () => {
    if (inputPassword === password) {
      setAuthenticated(true);
    }
  };
  const handleCancel = () => {};

  // useEffect(() => {
  //   console.log(icePackInfo);
  // }, [icePackInfo]);

  const changeIcePackDB = () => {
    axios({
      method: "POST",
      url: "/icePack",
      data: icePackInfo,
    }).then((res) => console.log(res));
  };

  return (
    <>
      {authenticated && (
        <Space
          direction="vertical"
          align="center"
          style={{
            width: "100%",
            minHeight: "100vh",
            padding: 15,
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 20 }}>아이스팩 분리수거 정보 수정 페이지</div>
          <Form
            labelCol={{ span: 8 }}
            initialValues={{
              date: moment(icePackInfo.createdAt),
              gather: icePackInfo.totalGather,
              recycle: icePackInfo.totalRecycle,
            }}
          >
            <Form.Item name="date" label="날짜">
              <DatePicker
                style={{ width: 150 }}
                onChange={(date, dateString) => {
                  console.log(date, dateString);
                  if (date !== null) {
                    setIcePackInfo({
                      ...icePackInfo,
                      createdAt: date.toDate(),
                    });
                  }
                }}
              />
            </Form.Item>
            <Form.Item name="gather" label="수거 갯수">
              <InputNumber
                style={{ width: 150 }}
                onChange={(e: number) =>
                  setIcePackInfo({ ...icePackInfo, totalGather: e })
                }
              />
            </Form.Item>
            <Form.Item name="recycle" label="재활용 갯수">
              <InputNumber
                style={{ width: 150 }}
                onChange={(e: number) => {
                  setIcePackInfo({ ...icePackInfo, totalRecycle: e });
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                onClick={() => {
                  changeIcePackDB();
                }}
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                업데이트
              </Button>
            </Form.Item>
          </Form>
        </Space>
      )}
      <Modal
        title="관리자 권한"
        visible={!authenticated}
        okText="입력"
        cancelText="취소"
        onOk={handleOK}
      >
        <p>비밀번호를 입력해주세요</p>
        <Input
          onChange={(e) => {
            setInputPassword(e.target.value);
          }}
        />
      </Modal>
    </>
  );
}

export default Admin;
