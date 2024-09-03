import React, { useRef, useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { useDownloadExcel } from "react-export-table-to-excel";
import { data } from "../data.js";

const Dashboard = () => {
  const [seacrh, setSearch] = useState("");
  const [yearSearch, setYearSeacrh] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 10;
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const record = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / dataPerPage);
  const numberOfPage = [...Array(npage + 1).keys()].slice(1);

  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };
  return (
    <>
      <div className=" w-full">
        <div className="flex mt-3 gap-5 justify-end mr-14">
          <input
            type="text"
            placeholder="search..."
            className="border border-black w-80 rounded-md px-3"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            type="text"
            className="border-black border rounded-md px-4"
            placeholder="Year"
            onChange={(e) => setYearSeacrh(e.target.value)}
          />

          {/* <DownloadTableExcel
            filename="users table"
            sheet="users"
            currentTableRef={tableRef.current}
          >
            <button className="bg-slate-950 text-white px-4 py-3 rounded-lg hover:bg-slate-800 ">
              Download Excel
            </button>
          </DownloadTableExcel> */}

          <button
            onClick={onDownload}
            className="bg-slate-950 text-white px-4 py-3 rounded-lg hover:bg-slate-800 "
          >
            Download Excel
          </button>
        </div>
        <div className="container mt-5">
          <div className="relative ">
            <table
              ref={tableRef}
              className="w-full text-sm text-left rtl:text-right"
            >
              <thead className="text-sm bg-slate-200 uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    genres
                  </th>
                  <th scope="col" className="px-6 py-3">
                    year
                  </th>
                  <th scope="col" className="px-6 py-3">
                    date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    time
                  </th>
                </tr>
              </thead>
              <tbody>
                {record
                  .filter((item) => {
                    return seacrh.toLowerCase() === ""
                      ? item
                      : item.title.toLowerCase().includes(seacrh);
                  })
                  .filter((item) => {
                    return yearSearch.toLowerCase() === ""
                      ? item
                      : item.year.toString().includes(yearSearch);
                  })
                  .map((item) => (
                    <tr key={item.id} className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium">
                        {item.title}
                      </th>
                      <td className="px-6 py-4">{item.genres}</td>
                      <td className="px-6 py-4">{item.year}</td>
                      <td className="px-6 py-4">{item.date}</td>
                      <td className="px-6 py-4">{item.time}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* pagination */}
        <div>
          <nav>
            <ul class="inline-flex gap-1 text-base h-10">
              <li>
                <a
                  href="#"
                  onClick={prevPage}
                  className="flex items-center justify-center px-4 h-10 ms-0 leading-tight bg-blue-500 text-white rounded-md"
                >
                  prev
                </a>
              </li>
              {numberOfPage.map((n, i) => (
                <li>
                  <a
                    href="#"
                    key={i}
                    onClick={() => changePage(n)}
                    className={`flex items-center justify-center px-4 h-10 leading-tight rounded-xl ${
                      currentPage === n ? "bg-blue-500" : ""
                    }`}
                  >
                    {n}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#"
                  onClick={nextPage}
                  className="flex items-center justify-center px-4 h-10 ms-0 leading-tight bg-blue-500 text-white rounded-md"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
