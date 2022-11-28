import React, { useCallback, useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Footer } from "./Footer";

import { SavedCategoryContext } from "./Main";

export const MainContent = () => {
  const { category, setCategory } = useContext(SavedCategoryContext);

  const [selector, setSelector] = useState();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = useCallback(() => {
    setIsLoaded(false);

    const baseURL = `https://www.melivecode.com/api/users`;

    axios
      .get(baseURL)
      .then(function (response) {
        const res = response.data;

        let data = res;

        const Populate = () => {
          for (let i = 0; i < 10; i++) {
            data = [...data.concat(res)];

            if (i === 10 - 1) {
              let resultArray = [];

              for (let i = 0; i < data.length; i++) {
                const tempObj = {
                  ...data[i],
                  id: i,
                  company: "industry Co., Ltd.",
                  source: "source",
                  owner: "himself",
                  addDate: "01/01/22",
                  editDate: "31/31/22",
                  status: "confirm",
                  webSite: "www.google.com",
                  activity: "2 min ago",
                  telephone: "099-9999999",
                };

                resultArray.push(tempObj);
              }

              setItems(resultArray);
              setIsLoaded(true);
            }
          }
        };

        Populate();
      })
      .catch(function (error) {
        setItems(null);
        setIsLoaded(true);
        setError(error);
      })
      .then(function () {});
  }, []);

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  useEffect(() => {
    setSelector(category);
  }, [category]);

  function ShowError() {
    return (
      <div>
        <p>Error : {error}</p>
      </div>
    );
  }
  function ShowLoading() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    ShowError();
  } else if (!isLoaded) {
    ShowLoading();
  } else {
    return (
      <div className="ps-4 pe-4 pb-4">
        <DataTable
          style={{ minWidth: "1024px" }}
          className=" "
          columns={selector}
          data={items}
          defaultSortFieldId={1}
          noDataComponent="No record to display :("
          pagination
          showPaginationBottom={items.length > 10 ? true : false}
          paginationPerPage={25}
          paginationComponentOptions={{
            selectAllRowsItem: true,
            selectAllRowsItemText: "All",
            rowsPerPageText: "",
            rangeSeparatorText: "from",
          }}
          paginationRowsPerPageOptions={[25, 50, 75, 100]}
        />
        <Footer />
      </div>
    );
  }
};
