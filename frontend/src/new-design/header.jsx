const header = () => {
  return (
    <div className="h-[25px] w-auto bg-bluish font-poppins text-[7px] text-white flex justify-between items-center">
      <div className="ml-3 flex justify-between space-x-2">
        {/* location */}
        <div className="flex">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="my-[7px] mx-1"
          >
            <path
              d="M5.00004 0.833328C3.38754 0.833328 2.08337 2.1375 2.08337 3.74999C2.08337 5.9375 5.00004 9.16666 5.00004 9.16666C5.00004 9.16666 7.91671 5.9375 7.91671 3.74999C7.91671 2.1375 6.61254 0.833328 5.00004 0.833328ZM2.91671 3.74999C2.91671 2.6 3.85004 1.66666 5.00004 1.66666C6.15004 1.66666 7.08337 2.6 7.08337 3.74999C7.08337 4.95 5.88337 6.74583 5.00004 7.86666C4.13337 6.75416 2.91671 4.9375 2.91671 3.74999Z"
              fill="white"
            />
            <path
              d="M5.00004 4.79166C5.57534 4.79166 6.04171 4.32529 6.04171 3.74999C6.04171 3.1747 5.57534 2.70833 5.00004 2.70833C4.42474 2.70833 3.95837 3.1747 3.95837 3.74999C3.95837 4.32529 4.42474 4.79166 5.00004 4.79166Z"
              fill="white"
            />
          </svg>

          <p>DIGIFAC first floor</p>
        </div>
        {/* mail */}
        <div className="flex">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="my-[7px] mx-1"
          >
            <path
              d="M9.16671 2.50001C9.16671 2.04167 8.79171 1.66667 8.33337 1.66667H1.66671C1.20837 1.66667 0.833374 2.04167 0.833374 2.50001V7.5C0.833374 7.95834 1.20837 8.33334 1.66671 8.33334H8.33337C8.79171 8.33334 9.16671 7.95834 9.16671 7.5V2.50001ZM8.33337 2.50001L5.00004 4.57917L1.66671 2.50001H8.33337ZM8.33337 7.5H1.66671V3.33334L5.00004 5.41667L8.33337 3.33334V7.5Z"
              fill="white"
            />
          </svg>

          <p>info@teachyourvillage.com</p>
        </div>
        {/* phone */}
        <div className="flex">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="my-[7px] mx-1"
          >
            <path
              d="M2.725 2.08333C2.75 2.45417 2.8125 2.81667 2.9125 3.1625L2.4125 3.6625C2.24167 3.1625 2.13333 2.63333 2.09583 2.08333H2.725ZM6.83333 7.09167C7.1875 7.19167 7.55 7.25417 7.91667 7.27917V7.9C7.36667 7.8625 6.8375 7.75417 6.33333 7.5875L6.83333 7.09167ZM3.125 1.25H1.66667C1.4375 1.25 1.25 1.4375 1.25 1.66667C1.25 5.57917 4.42083 8.75 8.33333 8.75C8.5625 8.75 8.75 8.5625 8.75 8.33333V6.87917C8.75 6.65 8.5625 6.4625 8.33333 6.4625C7.81667 6.4625 7.3125 6.37917 6.84583 6.225C6.80417 6.20833 6.75833 6.20417 6.71667 6.20417C6.60833 6.20417 6.50417 6.24583 6.42083 6.325L5.50417 7.24167C4.325 6.6375 3.35833 5.675 2.75833 4.49583L3.675 3.57917C3.79167 3.4625 3.825 3.3 3.77917 3.15417C3.625 2.6875 3.54167 2.1875 3.54167 1.66667C3.54167 1.4375 3.35417 1.25 3.125 1.25Z"
              fill="white"
            />
          </svg>

          <p>+91 5693696408</p>
        </div>
      </div>

      {/* media */}
      <div className="flex space-x-1 mr-3">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            fill="white"
            class="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>
        </a>

        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            fill="white"
            class="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </a>

        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            fill="white"
            class="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
          </svg>
        </a>

        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            fill="white"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default header;
