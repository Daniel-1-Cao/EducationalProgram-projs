import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [addname, setAddname] = useState("");

  // const searchResult = async (e) => {
  //   e.preventDefault();
  //   let base = "http://localhost:5000/search";
  //   if (name !== "") {
  //     base += `?name=${name}`;
  //     if (location !== "") {
  //       base += `&location=${location}`;
  //     }
  //   } else if (location !== "") {
  //     base += `?location=${location}`;
  //   }

  //   const response = await fetch(base, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const result = await response.json();
  //   let s = "";
  //   for (const entry in result) {
  //     s += `${entry}: ${result[entry]}\n`;
  //   }
  //   setResult(s === "" ? "No results found" : s);
  //   setName("");
  //   setLocation("");
  // };

  const searchResult = (e) => {
    e.preventDefault();
    let base = "http://localhost:5000/search";
    if (name !== "") {
      base += `?name=${name}`;
      if (location !== "") {
        base += `&location=${location}`;
      }
    } else if (location !== "") {
      base += `?location=${location}`;
    }

    fetch(base, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        let s = "";
        for (const entry in result) {
          s += `${entry}: ${result[entry]}\n`;
        }
        setResult(s === "" ? "No results found" : s);
        setName("");
        setLocation("");
      });
  };

  // const addPerson = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch(`http://localhost:5000/addppl`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: addname,
  //     }),
  //   });
  //   const result = await response.json();
  //   try {
  //     if (!response.ok) {
  //       throw new Error(result.error.message);
  //     }
  //     console.log(result);
  //     setAddname("");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const addPerson = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/addppl`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: addname,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((result) => {
            throw new Error(result.error.message);
          });
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setAddname("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3 style={{ whiteSpace: "pre-wrap" }}>{result}</h3>
      <form>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label>Location:</label>
        <input
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        ></input>
        <button onClick={searchResult}>Submit</button>
      </form>

      <input
        value={addname}
        onChange={(e) => {
          setAddname(e.target.value);
        }}
      ></input>
      <button onClick={addPerson}>Add</button>
    </div>
  );
}

export default App;
