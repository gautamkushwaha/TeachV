import { Link } from "react-router-dom";

const REGISTRATION = () => {
  return (
    <div className="w-full relative bg-lightcyan h-[810px] overflow-hidden text-left text-xs text-black font-telex">
      <div className="absolute top-[59px] left-[67px] w-[1122px] h-[567px]">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-ghostwhite w-[1251px] h-[713px]" />
        <img
          className="absolute top-[0px] left-[0px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl w-[494px] h-[678px] object-cover opacity-[0.7]"
          alt=""
          src="E:\Programming\TeachV\frontend\public\registration\registration.png"
        />
        <div className="absolute top-[607px] left-[833px] text-sm inline-block w-[167px] h-[9px] font-stix-two-text">
          <span>{`Already a member? `}</span>
          <Link to="/signin" className="font-stoke text-cornflowerblue">
            Log in
          </Link>
        </div>
        <a className="absolute top-[531px] left-[809px] w-[216px] h-[59px] text-mini text-white bg-black rounded-xl font-tharlon">
          <div className="absolute top-[25px] left-[37px] inline-block w-[141px] h-2.5">
            CREATE ACCOUNT
          </div>
        </a>
        <div className="absolute top-[264px] left-[693px] rounded-xl w-[198px] h-[50px]">
          <input
            type="text"
            placeholder="EMAIL ID"
            className="absolute top-[0px] left-[0px] rounded-3xs w-[165px] h-[50px] bg-zinc-200 rounded-lg px-5"
          />
        </div>
        <div className="absolute top-[261px] left-[942px] rounded-xl w-[198px] h-[50px]">
          <input
            type="text"
            placeholder="PHONE NUMBER"
            className="absolute top-[0px] left-[0px] rounded-3xs w-[165px] h-[50px] bg-zinc-200 rounded-lg px-5"
          />
        </div>
        <div className="absolute top-[181px] left-[942px] rounded-xl w-[198px] h-[50px]">
          <input
            type="text"
            placeholder="LAST NAME"
            className="absolute top-[0px] left-[0px] rounded-3xs w-[165px] h-[50px] bg-zinc-200 rounded-lg px-5"
          />
        </div>
        <div className="absolute top-[181px] left-[693px] rounded-xl w-[198px] h-[50px]">
          <input
            type="text"
            placeholder="FIRST NAME"
            className="absolute top-[0px] left-[0px] rounded-3xs w-[165px] h-[50px] bg-zinc-200 rounded-lg px-5"
          />
        </div>
        <div className="absolute top-[341px] left-[693px] w-[198px] h-[50px]">
          <input
            type="password"
            placeholder="PASSWORD"
            className="absolute top-[0px] left-[0px] rounded-3xs w-[165px] h-[50px] bg-zinc-200 rounded-lg px-5"
          />
        </div>
        <div className="absolute top-[421px] left-[693px] w-[198px] h-[50px]">
          <input
            type="text"
            placeholder="COLLEGE"
            className="absolute top-[0px] left-[0px] rounded-3xs w-[165px] h-[50px] bg-zinc-200 rounded-lg px-5"
          />
        </div>
        <div className="absolute top-[421px] left-[942px] w-[198px] h-[50px]">
          <input
            type="text"
            placeholder="BRANCH"
            className="absolute top-[0px] left-[0px] rounded-3xs w-[165px] h-[50px] bg-zinc-200 rounded-lg px-5"
          />
        </div>
        <div className="absolute top-[341px] left-[942px] w-[198px] h-[50px]">
          <input
            type="password"
            placeholder="REPEAT PASSWORD"
            className="absolute top-[0px] left-[0px] rounded-3xs w-[165px] h-[50px] bg-zinc-200 rounded-lg px-5"
          />
        </div>
        <div className="absolute top-[50px] left-[691px] text-17xl uppercase font-spinnaker">
          Create new account
        </div>
        <div className="absolute top-[625px] left-[900px] text-base font-stoke text-cornflowerblue inline-block w-[34px] h-4">
          OR
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-gray-600 w-[494px] h-[678px]" />
        <img
          className="absolute top-[658px] left-[833px] w-[156.1px] h-[21px]"
          alt=""
          src="/frame-20.svg"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-google"
          viewBox="0 0 16 16"
        >
          <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
        </svg>
      </div>
    </div>
  );
};

export default REGISTRATION;
