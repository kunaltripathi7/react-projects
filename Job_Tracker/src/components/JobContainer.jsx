import { Droppable } from "react-beautiful-dnd";
import JobData from "./JobData";

function JobContainer({ jobs, title, onDelete }) {
  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    // dropppableID -> just to identify uniquely, needs a callback for the droppable area, accepts provided -> provides it to parent div draggable context so to directly manipulate it(Droppable zone) we need a ref ref=(provided.innerRef), also pass props

    <Droppable droppableId={title}>
      {(
        provided,
        snapshot // contains some state vars
      ) => (
        <div
          // your JobContainer components) will stretch to match the height of the tallest item by default. if i don;t specify h-full
          className={`bg-sky-700 rounded-sm flex-1 h-full mb-10 ${
            snapshot.isDraggingOver ? "bg-sky-500" : ""
          }`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="bg-stone-700">
            <h1 className="text-stone-100 text-2xl text-center py-2">
              {formattedTitle}
            </h1>
          </div>
          {jobs.map((job, index) => (
            <JobData
              job={job}
              index={index}
              droppableId={title}
              key={index}
              onDelete={onDelete}
            />
          ))}
          {/* specify where the draggable elements will be dropped -> creates space*/}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default JobContainer;
