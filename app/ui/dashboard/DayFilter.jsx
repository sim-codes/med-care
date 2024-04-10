import Select from "react-dropdown-select";

export default function DayFilter() {
    const options = [
      {
        id: 1,
        name: 'Weekly',
        },
        {
          id: 2,
          name: 'Monthly',
        },
        {
          id: 3,
          name: 'Yearly',
        },
    ];
  
    return (
      <div className="flex flex-row justify-end gap-2 me-5">
        <Select
          options={options}
          labelField="name"
          valueField="id"
          className="w-32 rounded-full border border-gray-200 p-5"
        />
      </div>
    );
}