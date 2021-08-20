import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import RoomCard from "./RoomCard";
import InfinityScroll from "../../components/InfinityScroll";

import { __getRoomList } from "../../redux/modules/room";

const DefaultRoomList = () => {
  const dispatch = useDispatch();
  const { room, searchedRoom, markedList, isLoading, paging } = useSelector(
    (state) => state.room
  );

  return (
    <>
      <InfinityScroll
        callNext={() => {
          dispatch(__getRoomList(paging.next));
        }}
        isNext={paging.next ? true : false}
        isLoading={isLoading}
      >
        <RoomContainer>
          <RoomBox>
            {/* userIdList room.bookmarkedMembers 안에 딕셔너리로 userId 들어가있어서 
  북마크 여부 확인하기 위해 userId를 뽑아내서 확인함 */}
            {searchedRoom && searchedRoom.length > 0
              ? ""
              : room.map((room, idx) => {

                  const markedIdx = markedList.findIndex((markedRoom) => markedRoom.roomId === room.roomId)

                  return (
                    <RoomCard
                      isCheck={markedIdx === -1 ? false : true}
                      key={room.roomId}
                      {...room}
                    />
                  );
                })}
          </RoomBox>
        </RoomContainer>
      </InfinityScroll>
    </>
  );
};

const RoomContainer = styled.div`
  display: flex;
`;

const RoomBox = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default DefaultRoomList;
