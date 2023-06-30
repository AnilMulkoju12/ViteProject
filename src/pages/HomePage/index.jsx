import React, { useState, useEffect } from "react";
import "./styles.scss";
import { DragandDrop } from "../../components/Drag&Drop/draganddrop";
const draganddrop = () => {
  const [appiledUser, setAppliedUser] = useState([...DragandDrop]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [rejectedUser, setRejectedUser] = useState([]);
  const onDrag = (e, id, target) => {
    const draggedInfo = {
      id: id,
      target: target,
    };
    return e.dataTransfer.setData("draggedUser", JSON.stringify(draggedInfo));
  };
  const draggingOver = (e) => {
    e.preventDefault();
    console.log("dragging Over");
  };
  const onDrop = (e) => {

    let draggedData = JSON.parse(e.dataTransfer.getData("draggedUser"));
    console.log("draggedData",draggedData.target)
    const user1 = appiledUser.filter((val) => {
      return val.id == draggedData.id;
    });
    const user2 = selectedUser.filter((val) => {
      return val.id == draggedData.id;
    });
    const user3 = rejectedUser.filter((val) => {
      return val.id == draggedData.id;
    });
    console.log(user3[0],"user3")
    if (user1&& draggedData.target === "applied") {
      setSelectedUser([...selectedUser].concat(user1));
      setAppliedUser((current) => {
        return current.filter((user) => {
          return user.id !== user1[0].id;
        });
      });
    } 
    else if (user2  && draggedData.target === "selected") {
      setAppliedUser([...appiledUser].concat(user2));
      setSelectedUser((current) => {
        return current.filter((user) => {
          return user.id !== user2[0].id;
        });
      });
    }
    else{
      setRejectedUser([...rejectedUser].concat(user3));
      setAppliedUser((current) => {
        return current.filter((user) => {
          return user.id !== user3[0].id;
        });
      });
    }
  };
  console.log("rejectedUser",rejectedUser);  
  useEffect(() => {
    console.log(rejectedUser, "rejectedUser");
  }, [rejectedUser]);

  return (
    <div>
      <h2 style={{margin:'50px 650px'}}>Drag & Drop</h2>
      <div className="homepage-container">
        <div
          className="homepage-container__cards1"
          onDragOver={draggingOver}
          onDrop={onDrop}
        >
          {(appiledUser.length == 0 ?<h4>Drop Here</h4> :"" )}
          {appiledUser.map((user) => {
            return (
              <div
                className="homepage-container__card"
                key={user.id}
                draggable
                onDragStart={(e) => {
                  onDrag(e, user.id, "applied");
                }}
              >
                <h3>{user.userName}</h3>
              </div>
            );
          })}
        </div>
        <div
          className="homepage-container__cards2"
          onDragOver={draggingOver}
          onDrop={onDrop}
        >
          {(selectedUser.length == 0 ?<h4>Drop Here</h4> :"" )}
          
          {selectedUser.map((user) => {
            return (
              <div
                className="homepage-container__card"
                key={user.id}
                draggable
                onDragStart={(e) => {
                  onDrag(e, user.id, "selected");
                }}
              >
                <h3>{user.userName}</h3>
              </div>
            );
          })}
        </div>
        <div
          className="homepage-container__cards3"
          onDragOver={draggingOver}
          onDrop={onDrop}
        >
          {(rejectedUser.length == 0 ?<h4>Drop Here</h4> :"" )}
          
          {rejectedUser.map((user) => {
            return (
              <div
                className="homepage-container__card"
                key={user.id}
                draggable
                onDragStart={(e) => {
                  onDrag(e, user.id, "rejected");
                }}
              >
                <h3>{user.userName}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default draganddrop;
