import Notfoundimage from "/Images/Notfoundimage.png";

function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <img src={Notfoundimage} alt="" />
      </div>
    </div>
  );
}

export default NotFound;
