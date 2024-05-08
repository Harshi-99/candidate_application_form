import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const FilterDropdown = ({option, label, handleChange, handleReset}) => {
  return (
   <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={option}
      sx={{ width: 300 }}
      onChange={(_, value) => handleChange(value)}
      onInputChange={(event,value, reason)=>handleReset(reason)}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
export default FilterDropdown;
