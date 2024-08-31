import React from "react";

const InProgressPage = () => {
  return (
    <div className="mt-[7rem]">
      <div className="text-[30px] font-extrabold mx-10">In Progress</div>
      <div className="overflow-x-auto mx-5">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Items{"(s)"}</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Wireless Mouse</td>
              <td>9:33am, today</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Keyboard, mouse, stick...</td>
              <td>12:01pm, today</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Iphone charger</td>
              <td>4:20pm, today</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InProgressPage;
