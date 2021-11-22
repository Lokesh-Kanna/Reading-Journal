import * as React from "react";
import { NavBar } from "./NavBar";
import {
  PinkCheckboxes,
  OrangeCheckboxes,
  GreenCheckboxes,
} from "./Checkboxes";

export function DistributeTBR({ books }) {
  return (
    <div>
      <NavBar />
      <div className="tablediv">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">READING LIST</th>
              <th scope="col">TO BE READ</th>
              <th scope="col">CURRENTLY READING</th>
              <th scope="col">READ</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              return <Tr name={book.name} author={book.author} id={index} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
function Tr({ name, author, id }) {
  return (
    <tr>
      <th scope="row">{id + 1}</th>
      <td className="tblnmerow">
        <div>
          <span className="tblnms">{name}</span> <br></br>
          <span className="tblauthnms">{`- ${author}`}</span>
        </div>
      </td>
      <td className="tblnmerow">
        <PinkCheckboxes />
      </td>
      <td className="tblnmerow">
        <OrangeCheckboxes />
      </td>
      <td className="tblnmerow">
        <GreenCheckboxes />
      </td>
    </tr>
  );
}
