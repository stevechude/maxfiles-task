import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { tableData } from "../../lib/mockdata";

type Props = {
  top: string;
  headers: string[];
  data: any[];
};

const WorkflowCard = ({ top, headers, data }: Props) => {
  const [itemsPerPage] = useState(5);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="border-[#707070] rounded-sm w-full md:w-[20rem] lg:w-[35rem] bg-white text-xs lg:text-sm overflow-auto">
      <div className="p-1 md:p-2 flex flex-col gap-1 border">
        <p className="font-semibold">{top}</p>

        {/* table */}
        <table className="w-full border">
          <thead className="bg-[#F8F8FA]">
            <tr>
              {headers?.map((header: any, i: number) => (
                <th
                  key={i}
                  className={`text-left text-[#707070] font-normal px-4 py-1.5 border ${
                    i === 0 ? "lg:w-[60%]" : ""
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(odd)]:bg-[#ECECF1] [&>*:nth-child(even)]:bg-white text-[#000] w-full">
            {currentItems?.map((dt, i) => (
              <tr key={dt.sn} className="border-y">
                <td className="py-1 px-4 capitalize">{dt.title}</td>
                <td className="py-1 px-4"></td>
                <td className="py-1 px-4">
                  <button className="bg-[#A7A7F3] border border-[#707070] outline-none rounded-md text-xs lg:text-sm py-0.5 px-4">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* pagination */}
        <div className="flex items-center justify-end">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="previous"
            containerClassName="paginationContainer"
            activeClassName="paginationActive"
            pageClassName="eachElem"
            previousLinkClassName="prevBtnClass"
            nextLinkClassName="nexBtnClass"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkflowCard;
