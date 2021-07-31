import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

//components

import ModifyRoomModal from "../components/ModifyRoomModal";
//elements
import Button from "../elem/Button";
//redux
import { __deleteRoom, __exitRoom } from "../redux/modules/room";

//map의 list에서 받아오는 값
const RoomCard = ({ _id, roomImage, roomName, subtitle, master, tag, history }) => {
  const dispatch = useDispatch();
  const [showModModal, setShowModModal] = useState(false);

  const openModModal = () => {
    setShowModModal(true);
  };

  const closeModModal = () => {
    setShowModModal(false);
  };

  return (
    <>
      <ModifyRoomModal
        roomId={_id}
        showModModal={showModModal}
        closeModModal={closeModModal}
      />
      <Div>
        <div onClick={() => {history.push(`/workspace/${_id}`)}}>
          <Image src={roomImage} />
          <div>
            <div>{roomName}</div>
            <div>{subtitle}</div>
            <div>{master}</div>
            <div>{tag}</div>
          </div>
        </div>
        <div>
          <Button _onClick={openModModal}>수정하기</Button>
          <Button
            _onClick={(e) => {
              console.log(_id)
              dispatch(__deleteRoom(_id));
            }}
          >
            삭제하기
          </Button>
          <Button _onClick={(e) => {
            dispatch(__exitRoom(_id));
          }}>나가기</Button>
        </div>
      </Div>
    </>
  );
};

const Image = styled.img`
/* max-width: 400px;
max-height: 300px; */
width: 300px;
height: 200px;
/* height: auto; */
`;

const Div = styled.div`
width: 350px;
height: 300px;
`;

export default RoomCard;
