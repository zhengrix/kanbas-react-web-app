import { Course } from "../../kanbas/database";
import { Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./navigation";
import CourseHeader from "./header";
import Modules from "./modules";
import Home from "./home";
import Assignments from "./assignments";


function Courses({ courses }: { courses: Course[] }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const crumbs = useLocation().pathname.split('/');
  crumbs.splice(0, 4);
  return (
    <div className="d-flex flex-column">
      <CourseHeader 
      name={course?.number || ''} 
      breadcrumbs={crumbs.length === 0 ? [{text: 'Modules', path: ''}] : crumbs.map((crumb) => ({
        text: crumb,
        path: crumb
      }))}
      />
      <hr style={{marginLeft: 24, marginRight: 24}}/>
      <div className="d-flex flex-row">
        <CourseNavigation courseId={courseId || ""}/> 
        <div
          className="overflow-y-scroll flex-fill bottom-0 end-0"
          style={{marginLeft: 48}}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses