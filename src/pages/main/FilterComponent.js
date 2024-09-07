import React, { useState, useEffect } from "react";
import styles from "./FilterComponent.module.css";

const FilterComponent = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    userType: "",
    applicationMethod: "",
    serviceFields: [],
  });

  const [filterOptions, setFilterOptions] = useState({
    userTypes: [],
    applicationMethods: [],
    serviceFields: [],
  });

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const response = await fetch("/main/target-list");
        const data = await response.json();
        setFilterOptions({
          userTypes: data.data.userType,
          applicationMethods: data.data.applicationMethod,
          serviceFields: data.data.serviceFiled,
        });
      } catch (error) {
        console.error("Failed to fetch filter options", error);
      }
    };

    fetchFilterOptions();
  }, []);

  // 필터 값이 변경될 때 상위 컴포넌트에 변경 알림
  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  // 필터 핸들러
  const handleUserTypeChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      userType: e.target.value,
    }));
  };

  const handleApplicationMethodChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      applicationMethod: e.target.value,
    }));
  };

  const handleServiceFieldChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => {
      const newFields = prev.serviceFields.includes(value)
        ? prev.serviceFields.filter((field) => field !== value)
        : [...prev.serviceFields, value];
      return { ...prev, serviceFields: newFields };
    });
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterGroup}>
        <label>사용자 구분</label>
        <select onChange={handleUserTypeChange} value={filters.userType}>
          <option value="">전체</option>
          {filterOptions.userTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>신청 방법</label>
        <select
          onChange={handleApplicationMethodChange}
          value={filters.applicationMethod}
        >
          <option value="">전체</option>
          {filterOptions.applicationMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>서비스 분야</label>
        {filterOptions.serviceFields.map((field) => (
          <div key={field}>
            <input
              type="checkbox"
              value={field}
              checked={filters.serviceFields.includes(field)}
              onChange={handleServiceFieldChange}
            />
            {field}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
