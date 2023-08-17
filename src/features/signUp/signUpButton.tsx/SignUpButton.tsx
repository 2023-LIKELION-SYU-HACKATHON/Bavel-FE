import { useNavigate } from 'react-router-dom';

const SignUpButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2">
      <button
        onClick={e => {
          e.preventDefault();
          navigate(-1);
        }}
        className="font-semibold text-black border-2 btn w-1/2 border-black bg-white hover:bg-white hover:border-black"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="font-semibold text-white border-0 btn w-1/2 bg-black hover:bg-black"
      >
        SignUp
      </button>
    </div>
  );
};

export default SignUpButton;
