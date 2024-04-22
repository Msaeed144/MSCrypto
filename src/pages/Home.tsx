import FilterBar from "../components/FilterBar"
import Table from "../components/Table"

function Home() {
  return (
    <div className="flex flex-col	justify-center items-center	">
      <FilterBar />
      <Table />
    </div>
  )
}

export default Home