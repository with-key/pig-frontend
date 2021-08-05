import React, { useState, useRef } from "react";
import styled from "styled-components";
import AWS from "aws-sdk";

import { useDispatch, useSelector } from "react-redux";

//components
import ImgUploader from "../../components/ImgUploader";

// elements
import { Button } from "../../elem";

//redux
import { __joinRoom } from "../../redux/modules/room";

const JoinRoomModal = ({ showModal, closeModal }) => {
  const dispatch = useDispatch();
  const [inviteCode, setInviteCode] = useState();
  const changeHandler = (e) => {
    const { value, name } = e.target;
    setInviteCode({ ...inviteCode, [name]: value });
  };

  const join = () => {
    dispatch(__joinRoom(inviteCode));
    closeModal();
  };

  return (
    <>
      {showModal ? (
        <ModalContainer>
          <ModalOverlay onClick={closeModal}></ModalOverlay>
          <ModalContent>
            <input
              name="inviteCode"
              placeholder="초대코드 입력해주세요!"
              onChange={changeHandler}
            />
            <Button _onClick={join}>방 참여하기</Button>
          </ModalContent>
        </ModalContainer>
      ) : null}
    </>
  );
};
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const ModalOverlay = styled.div`
  position: absolute;

  display: initial;
  
  width: 100%;
  height: 100%;
  
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  position: relative;

  width: 400px;
  height: 400px;
  padding-top: 5px;
  
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  
  text-align: center;
`;

export default JoinRoomModal;