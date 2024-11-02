import { useEffect, useState } from "react";
import styled from "styled-components";
import { SearchResult } from "./Components/SearchResults/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const response = await fetch(BASE_URL);
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
        setLoader(false);
      } catch (err) {
        setError("Unable to fetch data");
        setLoader(false);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, []);

  const selectFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const searchFood = (e) => {
    const searchedValue = e.target.value;

    if (searchedValue === "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchedValue.toLowerCase())
    );
    setFilteredData(filter);
  };


  const filteredFoodArray = [
    {
      name:"All",
      type:"all"
    },
    {
      name:"Breakfast",
      type:"breakfast"
    },
    {
      name:"Lunch",
      type:"lunch"
    },
    {
      name:"Dinner",
      type:"dinner"
    }
  ]

  return (
    <Container>
      {loader && <div>Loading....</div>}
      {error && <div>Error Occured while Loading the data.</div>}
      <TopContainer>
        <div className="logo">
          <img src="./Images/Foody Zone.svg" />
        </div>
        <div className="search">
          <input onChange={searchFood} placeholder="Search Food..." />
        </div>
      </TopContainer>

      <FilterContainer>
        {
          filteredFoodArray.map((value) => (
            <Button isselected={selectedBtn === value.type} key={value.name} onClick={() => selectFood(value.type)}>{value.name}</Button>
          ))
        }
      </FilterContainer>

      <SearchResult data={filteredData} />
    </Container>
  );
};
export default App;

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 84px;
  padding-left: 120px;
  padding-right: 120px;

  .search {
    input {
      padding: 10px 14px;
      min-width: 285px;
      font-size: 16px;
      font-weight: 400;
      border-radius: 5px;
      border: 1px solid #ff0909;
      background-color: transparent;
      color: white;
    }
    input::placeholder {
      color: white;
    }
  }

  @media (0 < width < 786px){
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: 120px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 54px;
`;

export const Button = styled.button`
  padding: 6px 12px;
  background-color: ${({ isselected }) => isselected ? "#780a0a" : "#ff4343"};
  outline: 1px solid ${({isselected}) => isselected ? "white": "#ff4343"};
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s background-color ease;
  &:hover {
    background-color: #780a0a;
    transition: 0.3s background-color ease;
  }
`;
