"use client";

import { useEffect, useState } from "react";
import styles from "./FilterSidebar.module.css";
import { RxCross2 } from "react-icons/rx";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

export default function Filters({ isFilterHidden, setIsFilterHedden }) {
  const [gender, setGender] = useState({
    all: false,
    men: false,
    women: false,
    babyKids: false,
  });
  const [occasion, setOccasion] = useState("All");
  const [work, setWork] = useState("All");
  const [fabric, setFabric] = useState("All");
  const [segment, setSegment] = useState("All");
  const [suitableFor, setSuitableFor] = useState("All");
  const [rawMaterials, setRawMaterials] = useState("All");
  const [pattern, setPattern] = useState("All");
  const [isIdealForClicked, setIsIdealForClicked] = useState(false);
  const handleGenderChange = (e) => {
    const { name, checked } = e.target;

    if (name === "all") {
      setGender({
        all: checked,
        men: checked,
        women: checked,
        babyKids: checked,
      });
    } else {
      setGender((prev) => {
        const updated = {
          ...prev,
          [name]: checked,
        };

        const allSelected = updated.babyKids && updated.men && updated.women;
        updated.all = allSelected;
        return updated;
      });
    }
  };

  const handleSelectAll = (setter) => {
    setter("All");
  };

  const handleCloseFilter = () => {
    setIsFilterHedden(true);
  };

  if (isFilterHidden) return null;

  return (
    <>
      <div className={styles.filters_container}>
        <div className={styles.filter_option}>
          <input type="checkbox" id={styles.custom} name="all" />
          <label htmlFor="all-gender">CUSTOMIZBLE</label>
        </div>
        <div className={styles.expandAndCompress}>
          <h2 className={styles.filters_title}>IDEAL FOR </h2>
          {isIdealForClicked ? (
            <span onClick={() => setIsIdealForClicked(false)}>
              <FaAngleUp />
            </span>
          ) : (
            <span onClick={() => setIsIdealForClicked(true)}>
              <FaAngleDown />
            </span>
          )}
        </div>
        {isIdealForClicked && (
          <div className={styles.filter_section}>
            <div className={styles.filter_option}>
              <input
                type="checkbox"
                id={styles.all_gender}
                name="all"
                checked={gender.all}
                onChange={handleGenderChange}
              />
              <label htmlFor="all-gender">All</label>
            </div>
            <button
              className={styles.unselect_all}
              onClick={() => {
                setGender({
                  all: false,
                  men: false,
                  women: false,
                  babyKids: false,
                });
              }}
            >
              Unselect all
            </button>

            <div className={styles.filter_option}>
              <input
                type="checkbox"
                id={styles.men}
                name="men"
                checked={gender.men}
                onChange={handleGenderChange}
              />
              <label htmlFor="men">Men</label>
            </div>

            <div className={styles.filter_option}>
              <input
                type="checkbox"
                id={styles.women}
                name="women"
                checked={gender.women}
                onChange={handleGenderChange}
              />
              <label htmlFor="women">Women</label>
            </div>

            <div className={styles.filter_option}>
              <input
                type="checkbox"
                id={styles.babyKids}
                name="babyKids"
                checked={gender.babyKids}
                onChange={handleGenderChange}
              />
              <label htmlFor="babyKids">Baby & Kids</label>
            </div>
          </div>
        )}

        <hr className={styles.filter_divider} />

        <FilterCategory
          title="OCCASION"
          value={occasion}
          onSelectAll={() => handleSelectAll(setOccasion)}
        />

        <hr className={styles.filter_divider} />

        <FilterCategory title="WORK" value={work} />

        <hr className={styles.filter_divider} />

        <FilterCategory title="FABRIC" value={work} />

        <hr className={styles.filter_divider} />

        <FilterCategory title="SEGMENT" value={work} />

        <hr className={styles.filter_divider} />

        <FilterCategory title="SUITABLE FOR" value={work} />

        <hr className={styles.filter_divider} />

        <FilterCategory title="RAW MATERIALS" value={work} />

        <hr className={styles.filter_divider} />

        <FilterCategory title="PATTERN" value={work} />

        <hr className={styles.filter_divider} />
      </div>
      <div className={styles.filters_container2}>
        <div className={styles.crossParent} onClick={handleCloseFilter}>
          <RxCross2 size={20} />
        </div>
        <div className={styles.filter_option_mobile}>
          <input
            type="checkbox"
            id="custom_mobile"
            name="custom"
            className={styles.filter_input_mobile}
          />
          <label htmlFor="custom_mobile" className={styles.filter_label_mobile}>
            CUSTOMIZABLE
          </label>
        </div>

        <div className={styles.expandAndCompress}>
          <h2 className={styles.filters_title}>IDEAL FOR </h2>
          {isIdealForClicked ? (
            <span onClick={() => setIsIdealForClicked(false)}>
              <FaAngleUp />
            </span>
          ) : (
            <span onClick={() => setIsIdealForClicked(true)}>
              <FaAngleDown />
            </span>
          )}
        </div>

        {isIdealForClicked && (
          <div className={styles.filter_section_mobile}>
            <div className={styles.filter_option_mobile}>
              <input
                type="checkbox"
                id="all_gender_mobile"
                name="all"
                checked={gender.all}
                onChange={handleGenderChange}
                className={styles.filter_input_mobile}
              />
              <label
                htmlFor="all_gender_mobile"
                className={styles.filter_label_mobile}
              >
                All
              </label>
            </div>
            <button
              className={styles.unselect_all_mobile}
              onClick={() =>
                setGender({
                  all: false,
                  men: false,
                  women: false,
                  babyKids: false,
                })
              }
            >
              Unselect all
            </button>

            {["men", "women", "babyKids"].map((option) => (
              <div key={option} className={styles.filter_option_mobile}>
                <input
                  type="checkbox"
                  id={`${option}_mobile`}
                  name={option}
                  checked={gender[option]}
                  onChange={handleGenderChange}
                  className={styles.filter_input_mobile}
                />
                <label
                  htmlFor={`${option}_mobile`}
                  className={styles.filter_label_mobile}
                >
                  {option === "babyKids"
                    ? "Baby & Kids"
                    : option.charAt(0).toUpperCase() + option.slice(1)}
                </label>
              </div>
            ))}
          </div>
        )}

        {[
          "OCCASION",
          "WORK",
          "FABRIC",
          "SEGMENT",
          "SUITABLE FOR",
          "RAW MATERIALS",
          "PATTERN",
        ].map((category) => (
          <div key={category}>
            <hr className={styles.filter_divider_mobile} />
            <FilterCategory
              title={category}
              onSelectAll={() =>
                handleSelectAll(eval(`set${category.replace(" ", "")}`))
              }
              isMobile={true}
            />
          </div>
        ))}
      </div>
    </>
  );
}

const FilterCategory = ({ title, value }) => {
  return (
    <div className={styles.filter_section}>
      <div className={styles.filterHeader}>
        <h2 className={styles.filters_title}>{title}</h2>
        <span>
          <FaAngleDown />
        </span>
      </div>
      <div className={styles.filter_option}>
        <label htmlFor={`${title.toLowerCase()}-all`}>All</label>
      </div>
    </div>
  );
};
