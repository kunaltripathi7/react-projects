import { useState } from "react";
import Header from "./components/Header";
import JobContainer from "./components/JobContainer";
import InputField from "./components/InputField";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [jobs, setJobs] = useState({
    applied: [
      {
        id: 1213,
        position: "Software Engineer",
        company: "Meta",
        dueDate: "02-04-24",
      },
      {
        id: 24324,
        position: "Software Engineer",
        company: "Meta",
        dueDate: "02-04-24",
      },

      {
        id: 3546,
        position: "Product Manager",
        company: "Apple",
        dueDate: "12-08-24",
      },
      {
        id: 48768,
        position: "Frontend Developer",
        company: "Microsoft",
        dueDate: "07-03-24",
      },
      {
        id: 598769,
        position: "UX Designer",
        company: "Amazon",
        dueDate: "09-11-24",
      },
    ],
    interview: [
      {
        id: 65342,
        position: "Backend Developer",
        company: "Netflix",
        dueDate: "03-06-24",
      },
    ],
    offer: [
      {
        id: 7463456,
        position: "Mobile Developer",
        company: "Samsung",
        dueDate: "07-12-24",
      },
    ],
    rejected: [
      {
        id: 8768457,
        position: "Machine Learning ",
        company: "NVIDIA",
        dueDate: "09-05-24",
      },
      {
        id: 976458,
        position: "Software Developer",
        company: "Sony",
        dueDate: "12-07-24",
      },
      {
        id: 1076534734,
        position: "Data Scientist",
        company: "LG",
        dueDate: "07-11-24",
      },
    ],
  });

  function handleAddJob(position, company, dueDate) {
    const newJob = {
      id: jobs.applied.length + 1,
      position,
      company,
      dueDate,
    };
    setJobs((jobs) => ({
      ...jobs,
      applied: [...jobs.applied, newJob],
    }));
  }

  function handleDeleteJob(containerId, jobId) {
    // beneficial to give the same droppableId
    setJobs((jobs) => {
      const updated = { ...jobs };
      updated[`${containerId}`] = jobs[`${containerId}`].filter(
        (job) => job.id !== jobId
      );
      return updated;
    });
  }

  function onDragEnd(res) {
    const { source, destination } = res;
    // all possibilites handle
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;
    let add;
    let active = jobs;
    // remove from the source
    add = active[source.droppableId].at(source.index);
    active[source.droppableId].splice(source.index, 1);
    // drop to destination
    active[destination.droppableId].splice(destination.index, 0, add);

    setJobs(active);
  }

  return (
    <div className="bg-sky-600 min-h-dvh">
      <Header />
      <InputField onAdd={handleAddJob} />
      {/* onDragEnd ->  */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-10 w-full px-10">
          {Object.keys(jobs).map((section) => (
            <JobContainer
              jobs={jobs[section]}
              title={section.toString()}
              key={section}
              onDelete={handleDeleteJob}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;

// --save to include in dependencies o/w manually
// doesn't works in strict mode - react-beautiful-dnd
