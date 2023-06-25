
const Event = () => {
      const name = () => {
        alert("Please enter");
      };
    return (
      <div>
        <button
          className="p-5 border rounded font-semibold hover:bg-slate-600 hover:text-white"
          onClick={name}
        >
          {" "}
          click me
        </button>
      </div>
    );
};

export default Event;