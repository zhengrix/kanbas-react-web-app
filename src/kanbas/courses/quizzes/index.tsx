import React from "react";
import { FaCheckCircle, FaEllipsisV, FaChevronDown, FaSpaceShuttle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../database";
import Header from "./Header";
import "./index.css";


function Quizzes() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <span style={{marginRight: 24}}>
      <Header />
      <hr/>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaChevronDown className="me-2" /> Assignment Quizzes
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item d-flex flex-row justify-content-between align-items-center">
                <span className="d-flex flex-row align-items-center">
                  <FaSpaceShuttle color="green" className="mx-3"/>
                  <span>
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="quiz-name-text">
                      {assignment.title}
                    </Link> <br />
                    <span className="quiz-sub-text">
                      <Link to={''}>Multiple Modules</Link> <span>| Due {assignment.dueDate} | {assignment.points} pts</span>
                    </span>
                  </span>
                </span>
                <span>
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </span>
);}
export default Quizzes;