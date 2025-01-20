import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";

function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [apiResult, setApiResult] = useState([]);
  const [formattedArr, setFormattedArr] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    if (!searchQuery.trim()) {
      setError("Please enter a valid name");
      setIsLoading(false);
      return;
    }
    axios
      .get(`https://api.fda.gov/drug/label.json?search=${searchQuery}&limit=1`)
      .then((response) => {
        if (response?.data?.results && response.data.results.length > 0) {
          setApiResult(response.data.results);
          setError(null);
        } else {
          setError("No results found for the given drug name.");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setError(
          error?.response?.data?.error?.message ||
            "Error retrieving information. Please try again later."
        );
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (apiResult.length > 0) {
      handleDataFormat(apiResult);
    }
  }, [apiResult]);

  const handleDataFormat = (results) => {
    const filteredArray = [];

    console.log(results);

    if (results[0]?.openfda?.brand_name?.[0]) {
      filteredArray.push({ "Brand name": results[0]?.openfda?.brand_name[0] });
    }
    if (results[0]?.openfda?.generic_name?.[0]) {
      filteredArray.push({
        "Generic name": results[0]?.openfda?.generic_name[0],
      });
    }
    if (results[0]?.description?.[0]) {
      filteredArray.push({ Description: results[0]?.description[0] });
    }
    if (results[0]?.openfda?.manufacturer_name?.[0]) {
      filteredArray.push({
        Manufacturer: results[0]?.openfda?.manufacturer_name[0],
      });
    }
    if (results[0]?.active_ingredient?.[0]) {
      filteredArray.push({
        "Active Ingredient": results[0]?.active_ingredient?.[0],
      });
    }
    if (results[0]?.ask_doctor?.[0]) {
      filteredArray.push({
        "Ask Doctor": results[0]?.ask_doctor?.[0],
      });
    }
    if (results[0]?.ask_doctor_or_pharmacist?.[0]) {
      filteredArray.push({
        "Ask Doctor or Pharmacist": results[0]?.ask_doctor_or_pharmacist?.[0],
      });
    }
    if (results[0]?.indications_and_usage?.[0]) {
      filteredArray.push({
        "Indications and Usage": results[0]?.indications_and_usage[0],
      });
    }
    if (results[0]?.warnings_and_cautions?.[0]) {
      filteredArray.push({
        "Warnings and Cautions": results[0]?.warnings_and_cautions[0],
      });
    }
    if (results[0]?.keep_out_of_reach_of_children?.[0]) {
      filteredArray.push({
        "Keep Out of Reach of Children":
          results[0]?.keep_out_of_reach_of_children?.[0],
      });
    }
    if (results[0]?.adverse_reactions?.[0]) {
      filteredArray.push({
        "Adverse Reactions": results[0]?.adverse_reactions[0],
      });
    }
    if (results[0]?.dosage_and_administration?.[0]) {
      filteredArray.push({
        "Dosage and Administration": results[0]?.dosage_and_administration[0],
      });
    }
    if (results[0]?.drug_interactions?.[0]) {
      filteredArray.push({
        "Drug Interactions": results[0]?.drug_interactions[0],
      });
    }
    if (results[0]?.pregnancy?.[0]) {
      filteredArray.push({ Pregnancy: results[0]?.pregnancy[0] });
    }

    setFormattedArr(filteredArray);
  };
  return (
    <div id="resources-container" className="resources-container">
      <h1>Learn More About Your Medications</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter name of medicine..."
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button
          disabled={!searchQuery.trim() || isLoading}
          type="submit"
          style={{
            cursor: isLoading || !searchQuery.trim() ? "default" : "pointer",
          }}
        >
          {isLoading ? (
            <CgSpinner className="spinner search-icon" />
          ) : (
            <FaSearch className="search-icon" />
          )}
        </button>
      </form>
      {error ? <p className="error">{error}</p> : null}
      <div
        className={`drug-info-container ${
          formattedArr.length > 0 ? "" : "hide"
        }`}
      >
        {formattedArr && formattedArr.length > 0 ? (
          formattedArr.map((drugInfo, index) => {
            const [[key, value]] = Object.entries(drugInfo);
            return (
              <div className="drug-sub-info-container" key={index}>
                <h2>{key}</h2>
                <p>{value}</p>
              </div>
            );
          })
        ) : (
          <p>No drug information available.</p>
        )}
      </div>
    </div>
  );
}

export default Resources;
