import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import { FcGoogle } from "react-icons/fc";
// import { BiTachometer } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaWpforms } from "react-icons/fa";
import { FcUp } from "react-icons/fc";
import { FaRegUserCircle } from "react-icons/fa";
import { BsChatDots, BsThreeDotsVertical } from "react-icons/bs";
import Navbar from "../../../components/NavBar";
import { employerNavItems } from "../../../helpers/navbarItems";
import useChangePageTitle from "../../../hooks/useChangePageTitle";

const MyCandidates = ({ appliedCandidates, intrestedCandidates }) => {
  const [applied, setApplied] = useState([...appliedCandidates]);
  const [shortListed, setShortListed] = useState([]);
  const [rejected, setRejected] = useState([]);

  useChangePageTitle("My Candidates");
  const onDragStart = (e, id) => {
    e.dataTransfer.setData("draggedCandidate", id);
    console.log("Drag Started");
  };

  const draggingOver = (e) => {
    e.preventDefault();
    console.log("Dragging Over");
  };

  const shortListedDrop = (e) => {
    let datatransfered = e.dataTransfer.getData("draggedCandidate");
    // console.log("datatransfered", datatransfered);
    function sort(val) {
      return val.id == datatransfered;
    }
    // console.log("Dropped");
    const data = applied.filter(sort);
    // console.log("data info", data);
    data[0].status = "shortListed";
    // console.log(data);
    setShortListed(shortListed.concat(data));
    setApplied((current) =>
      current.filter((candidate) => {
        return candidate.id !== data[0].id;
      })
    );
  };

  const rejectedDrop = (e) => {
    let datatransfered = e.dataTransfer.getData("draggedCandidate");
    function sort(val) {
      return val.id == datatransfered;
    }
    const data = applied.filter(sort);
    data[0].status = "rejected";

    setRejected(rejected.concat(data));
    setApplied((current) =>
      current.filter((candidate) => {
        return candidate.id !== data[0].id;
      })
    );
  };

  const dropCandidate = (e) => {
    let datatransfered = e.dataTransfer.getData("draggedCandidate");
    function sort(val) {
      return val.id == datatransfered;
    }
    const shortListedData = shortListed.filter(sort);
    const rejectedData = rejected.filter(sort);

    if (
      shortListedData.length > 0 &&
      shortListedData[0].status == "shortListed"
    ) {
      setApplied(applied.concat(shortListedData));

      setShortListed((current) =>
        current.filter((candidate) => {
          return candidate.id !== shortListedData[0].id;
        })
      );
    } else if (
      rejectedData.length > 0 &&
      rejectedData[0].status == "rejected"
    ) {
      setApplied(applied.concat(rejectedData));

      setRejected((current) =>
        current.filter((candidate) => {
          return candidate.id !== rejectedData[0].id;
        })
      );
    }
  };
  return (
    <>
      <div className="my-candidates-page">
        <div className="my-candidates-container ">
          <div className="right-side-menu">
            <div className="right-side-menu-heading">
              <h4>My Candidates</h4>
              <select className="right-side-menu-select">
                <option>UX UI Designer</option>
                <option>React Developer</option>
              </select>
            </div>
            <div className="right-side-menu-containers">
              <div
                className="right-side-menu-container"
                droppable="true"
                onDragOver={(e) => draggingOver(e)}
                onDrop={(e) => {
                  dropCandidate(e);
                  // shortListedToApplied(e)
                  // rejectedToApplied(e)
                }}
              >
                <div className="right-side-menu-top-text1">
                  <div className="right-side-menu-top-text-heading">
                    <p>Applied</p>
                    <div className="right-side-menu-top-text2">
                      <h5>{applied.length}</h5>
                      <p>
                        <FcUp className="right-side-menu-top-icon" />
                        10%
                      </p>
                    </div>
                  </div>
                  <div className="right-side-menu-top-slider">
                    <div className="right-side-menu-top-container1-progress-bar">
                      <span className="progess-value">72%</span>
                    </div>
                  </div>
                </div>

                {applied.map((val, index) => {
                  return (
                    <div
                      key={val.id}
                      draggable
                      className="candidate"
                      onDragStart={(e) => {
                        onDragStart(e, val.id);
                      }}
                    >
                      <div className="candidate-name">
                        <val.profileIcon
                          className="profile-icon"
                          key={val.id}
                        />
                        <div>
                          <h6>{val.title}</h6>
                          <p>{val.role}</p>
                        </div>
                      </div>
                      <div className="candidate-icons">
                        <val.formIcon className="candidate-sub-icon" />
                        <val.chatIcon className="candidate-sub-icon" />
                        <val.menuIcon className="candidate-sub-icon" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="right-side-menu-container">
                <div className="right-side-menu-top-text1">
                  <div className="right-side-menu-top-text-heading">
                    <p>Intrested</p>
                    <div className="right-side-menu-top-text2">
                      <h5>{intrestedCandidates?.length}</h5>
                      <p>
                        <FcUp className="right-side-menu-top-icon" />
                        6%
                      </p>
                    </div>
                  </div>
                  <div className="right-side-menu-top-slider">
                    <div className="right-side-menu-top-container2-progress-bar">
                      <span className="progess-value">87%</span>
                    </div>
                  </div>
                </div>
                {intrestedCandidates?.map((val) => {
                  return (
                    <div key={val.id} draggable className="candidate">
                      <div className="candidate-name">
                        <val.profileIcon className="profile-icon" />
                        <div>
                          <h6>{val.title}</h6>
                          <p>{val.role}</p>
                        </div>
                      </div>
                      <div className="candidate-icons">
                        <val.formIcon className="candidate-sub-icon" />
                        <val.chatIcon className="candidate-sub-icon" />
                        <val.menuIcon className="candidate-sub-icon" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                className="right-side-menu-container"
                droppable="true"
                onDragOver={(e) => draggingOver(e)}
                onDrop={(e) => shortListedDrop(e)}
              >
                <div className="right-side-menu-top-text1">
                  <div className="right-side-menu-top-text-heading">
                    <p>Short Listed</p>
                    <div className="right-side-menu-top-text2">
                      <h5>{shortListed.length}</h5>
                      <p>
                        <FcUp className="right-side-menu-top-icon" />
                        8%
                      </p>
                    </div>
                  </div>
                  <div className="right-side-menu-top-slider">
                    <div className="right-side-menu-top-container3-progress-bar">
                      <span className="progess-value">59%</span>
                    </div>
                  </div>
                </div>
                <div>
                  {shortListed.length == 0 ? (
                    <div className="drag-drop">Drag & Drop</div>
                  ) : (
                    ""
                  )}
                  {shortListed?.map((val, index) => {
                    return (
                      <div
                        key={val.id}
                        draggable
                        className="candidate"
                        onDragStart={(e) => {
                          onDragStart(e, val.id);
                        }}
                      >
                        <div className="candidate-name">
                          <val.profileIcon
                            className="profile-icon"
                            key={val.id}
                          />
                          <div>
                            <h6>{val.title}</h6>
                            <p>{val.role}</p>
                          </div>
                        </div>
                        <div className="candidate-icons">
                          <val.formIcon className="candidate-sub-icon" />
                          <val.chatIcon className="candidate-sub-icon" />
                          <val.menuIcon className="candidate-sub-icon" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="right-side-menu-container"
                droppable="true"
                onDragOver={(e) => draggingOver(e)}
                onDrop={(e) => rejectedDrop(e)}
              >
                <div className="right-side-menu-top-text1">
                  <div className="right-side-menu-top-text-heading">
                    <p>Rejected</p>
                    <div className="right-side-menu-top-text2">
                      <h5>{rejected.length}</h5>
                      <p>
                        <FcUp className="right-side-menu-top-icon" />
                        2%
                      </p>
                    </div>
                  </div>
                  <div className="right-side-menu-top-slider">
                    <div className="right-side-menu-top-container4-progress-bar">
                      <span className="progess-value">25%</span>
                    </div>
                  </div>
                </div>
                <div>
                  {rejected.length == 0 ? (
                    <div className="drag-drop">Drag & Drop</div>
                  ) : (
                    ""
                  )}
                  {rejected?.map((val, index) => {
                    return (
                      <div
                        key={val.id}
                        draggable
                        className="candidate"
                        onDragStart={(e) => {
                          onDragStart(e, val.id);
                        }}
                      >
                        <div className="candidate-name">
                          <val.profileIcon
                            className="profile-icon"
                            key={val.id}
                          />
                          <div>
                            <h6>{val.title}</h6>
                            <p>{val.role}</p>
                          </div>
                        </div>
                        <div className="candidate-icons">
                          <val.formIcon className="candidate-sub-icon" />
                          <val.chatIcon className="candidate-sub-icon" />
                          <val.menuIcon className="candidate-sub-icon" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCandidates;
