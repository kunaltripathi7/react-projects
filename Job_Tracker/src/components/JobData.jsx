import { Draggable } from "react-beautiful-dnd";

function JobData({ job, index, droppableId, onDelete }) {
  return (
    // Why index?? draggableId? -> ??
    <Draggable
      draggableId={`${job.id}`} // requires a unique draggable id each one
      key={job.id}
      index={index} // requires an index to uniquely identify in each droppable position of the draggable element
    >
      {(provided, snapshot) => (
        <div
          className={`bg-rose-400 my-4 mx-6 h-20 p-2 flex justify-between gap-1 ${
            snapshot.isDragging ? " shadow-md shadow-black" : ""
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="text-sm flex flex-col">
            <h2 className={`text-stone-800 space-mono-bold`}>{job.position}</h2>
            <p className="space-mono-regular-italic">{job.company}</p>
          </div>
          <div>
            <div>
              <span className="space-mono-bold-italic text-stone-700 text-xs mr-1">
                Due-Date:
              </span>
              <span className="space-mono-regular-italic text-xs">
                {job.dueDate}
              </span>
            </div>
            <button
              className="my-3 ml-24 text-stone-100"
              onClick={() => onDelete(droppableId, job.id)}
            >
              ✅
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default JobData;
