import Leavetablerow from "./Leavetablerow"
export default function Leavetable() {
  return (
    <div className="overflow-x-auto">
      <table className="table bg-gray-200">
          <thead className="text-black">
              <tr>
                  <th>Approver(s)</th>
                  <th>Leave Date</th>
                  <th>Hours Requested</th>
                  <th>Submitted</th>
                  <th>Status</th>
                  <th>Hours Worked</th>
                  <th>Update Request</th>
              </tr>
          </thead>
          <tbody>
              <Leavetablerow />
              {/* {items.map((item, index) => <overtimetablerow request = {request} key = {index}/> )} */}
              {/* Mapping data from the database */}
          </tbody>
        </table>
      </div>
  )
}
