import React from "react";

const PersonForm = (props) => {
  return (
    <>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label>name: </label>
              </td>
              <td style={{ paddingLeft: ".5rem" }}>
                <input
                  value={props.newName}
                  onChange={props.nameChangeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>number: </label>
              </td>
              <td style={{ paddingLeft: ".5rem" }}>
                <input
                  value={props.newNumber}
                  onChange={props.numberChangeHandler}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <button type="submit" onClick={props.addPersonHandler}>
            add
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
