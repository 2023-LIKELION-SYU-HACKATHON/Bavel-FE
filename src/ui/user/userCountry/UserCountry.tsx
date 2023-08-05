interface UserCountryProps {
  country: String;
}

const UserCountry = ({ country }: UserCountryProps) => {
  return <span className=" text-sm text-black">{country}</span>;
};

export default UserCountry;
