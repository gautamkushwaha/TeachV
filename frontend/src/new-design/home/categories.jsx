const categories = () => {
  return (
    <div className="bg-grayish border-y-black/10 border-x-transparent border-solid border-[0.5px]">
      <div className="px-[30px] py-[25px]">
        <h1 className="text-bluish font-bold text-[20px] font-poppins uppercase">
          Explore Our Diverse <br></br> Course Categories
        </h1>
        <p className="text-blackish font-inter text-[12px]">
          Welcome to our diverse course offerings, where your journey to
          mastering the latest in technology and design begins. Our carefully
          curated courses span a wide array of disciplines, each designed to
          equip you with the skills and knowledge needed to excel in today's
          fast-paced digital landscape. Whether you're a beginner eager to learn
          the basics or an experienced professional looking to advance your
          expertise, we have the perfect course for you. Explore our categories
          and discover the path that will help you achieve your career goals and
          unleash your full potential.
        </p>
        <div className="flex flex-wrap justify-around">
          {/* java */}
          <div className="relative w-[292px] h-[211px] border-solid border-[1px] border-bluish rounded-[15px] pt-[47px] px-4 pb-4 mt-[60px]">
            <img
              src="./home/java.png"
              alt="java"
              className="absolute w-[64px] h-[64px] -top-8 left-8"
            />
            <h3 className="text-bluish font-[500] text-[14px] font-poppins mt-0">
              Java Programming
            </h3>
            <p className="text-blackish font-poppins text-[12px]">
              Master the fundamentals and advanced concepts of Java programming.
              Our courses cover everything from basic syntax to complex
              algorithms, preparing you for a career in software development.
              Learn through practical exercises, real-world projects, and expert
              instruction.
            </p>
            <a
              href="#"
              className="font-poppins font-light text-lightblue text-[12px]"
            >
              Learn More
            </a>
          </div>

          {/* Python */}
          <div className="relative w-[292px] h-[211px] border-solid border-[1px] border-bluish rounded-[15px] pt-[47px] px-4 pb-4 mt-[60px]">
            <img
              src="./home/python.png"
              alt="java"
              className="absolute w-[64px] h-[64px] -top-8 left-8"
            />
            <h3 className="text-bluish font-[500] text-[14px] font-poppins mt-0">
              Python Programming
            </h3>
            <p className="text-blackish font-poppins text-[12px]">
              Unlock the power of Python with our comprehensive programming
              courses. Python is a versatile and beginner-friendly language that
              is widely used in various domains such as web development, data
              science, artificial intelligence, automation, and more.
            </p>
            <a
              href="#"
              className="font-poppins font-light text-lightblue text-[12px]"
            >
              Learn More
            </a>
          </div>

          {/* Artificial Intelligence */}
          <div className="relative w-[292px] h-[211px] border-solid border-[1px] border-bluish rounded-[15px] pt-[47px] px-4 pb-4 mt-[60px]">
            <svg
              width="64"
              height="47"
              viewBox="0 0 64 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-[64px] h-[64px] -top-8 left-8 bg-grayish"
            >
              <path
                d="M61.3333 21.5417C62.8053 21.5417 64 20.6663 64 19.5833C64 18.5004 62.8053 17.625 61.3333 17.625H58.6667V13.7083H61.3333C62.8053 13.7083 64 12.833 64 11.75C64 10.667 62.8053 9.79167 61.3333 9.79167H57.552C56.2053 7.53763 53.736 5.72421 50.6667 4.73525V1.95833C50.6667 0.875375 49.472 0 48 0C46.528 0 45.3333 0.875375 45.3333 1.95833V3.91667H40V1.95833C40 0.875375 38.8053 0 37.3333 0C35.8613 0 34.6667 0.875375 34.6667 1.95833V3.91667H29.3333V1.95833C29.3333 0.875375 28.1387 0 26.6667 0C25.1947 0 24 0.875375 24 1.95833V3.91667H18.6667V1.95833C18.6667 0.875375 17.472 0 16 0C14.528 0 13.3333 0.875375 13.3333 1.95833V4.73525C10.264 5.72421 7.79467 7.53763 6.448 9.79167H2.66667C1.19467 9.79167 0 10.667 0 11.75C0 12.833 1.19467 13.7083 2.66667 13.7083H5.33333V17.625H2.66667C1.19467 17.625 0 18.5004 0 19.5833C0 20.6663 1.19467 21.5417 2.66667 21.5417H5.33333V25.4583H2.66667C1.19467 25.4583 0 26.3337 0 27.4167C0 28.4996 1.19467 29.375 2.66667 29.375H5.33333V33.2917H2.66667C1.19467 33.2917 0 34.167 0 35.25C0 36.333 1.19467 37.2083 2.66667 37.2083H6.448C7.79467 39.4624 10.264 41.2758 13.3333 42.2648V45.0417C13.3333 46.1246 14.528 47 16 47C17.472 47 18.6667 46.1246 18.6667 45.0417V43.0833H24V45.0417C24 46.1246 25.1947 47 26.6667 47C28.1387 47 29.3333 46.1246 29.3333 45.0417V43.0833H34.6667V45.0417C34.6667 46.1246 35.8613 47 37.3333 47C38.8053 47 40 46.1246 40 45.0417V43.0833H45.3333V45.0417C45.3333 46.1246 46.528 47 48 47C49.472 47 50.6667 46.1246 50.6667 45.0417V42.2648C53.736 41.2758 56.2053 39.4624 57.552 37.2083H61.3333C62.8053 37.2083 64 36.333 64 35.25C64 34.167 62.8053 33.2917 61.3333 33.2917H58.6667V29.375H61.3333C62.8053 29.375 64 28.4996 64 27.4167C64 26.3337 62.8053 25.4583 61.3333 25.4583H58.6667V21.5417H61.3333ZM45.3333 39.1667H18.6667C14.256 39.1667 10.6667 36.5308 10.6667 33.2917V13.7083C10.6667 10.4692 14.256 7.83333 18.6667 7.83333H45.3333C49.744 7.83333 53.3333 10.4692 53.3333 13.7083V33.2917C53.3333 36.5308 49.744 39.1667 45.3333 39.1667ZM45.3333 13.7083V33.2917C45.3333 34.3746 44.1387 35.25 42.6667 35.25C41.1947 35.25 40 34.3746 40 33.2917V13.7083C40 12.6254 41.1947 11.75 42.6667 11.75C44.1387 11.75 45.3333 12.6254 45.3333 13.7083ZM30.84 14.2998C30.3547 12.7781 28.6773 11.7559 26.6667 11.7559C24.656 11.7559 22.9787 12.7762 22.504 14.2625L16.08 32.8099C15.7173 33.8576 16.5813 34.923 18.008 35.1893C19.448 35.4674 20.888 34.8231 21.2507 33.7734L22.096 31.3333H31.2373L32.0827 33.7734C32.3893 34.6605 33.4747 35.25 34.6667 35.25C34.8853 35.25 35.104 35.2304 35.3253 35.1893C36.752 34.923 37.616 33.8576 37.2533 32.8099L30.8427 14.2998H30.84ZM23.4533 27.4167L26.6667 18.1361L29.88 27.4167H23.4507H23.4533Z"
                fill="#003B7A"
              />
            </svg>

            <h3 className="text-bluish font-[500] text-[14px] font-poppins mt-0">
              Artificial Intelligence
            </h3>
            <p className="text-blackish font-poppins text-[12px]">
              Delve into the world of Artificial Intelligence (AI) with our
              comprehensive courses designed to equip you with the knowledge and
              skills needed to thrive in this rapidly evolving field. Our AI
              curriculum covers essential topics such as machine learning,
              neural networks and computer vision.
            </p>
            <a
              href="#"
              className="font-poppins font-light text-lightblue text-[12px]"
            >
              Learn More
            </a>
          </div>

          {/* DataBase */}
          <div className="relative w-[292px] h-[211px] border-solid border-[1px] border-bluish rounded-[15px] pt-[47px] px-4 pb-4 mt-[60px]">
            <svg
              width="84"
              height="64"
              viewBox="0 0 84 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-[64px] h-[64px] -top-8 left-8 bg-grayish"
            >
              <g clip-path="url(#clip0_1391_1606)">
                <rect width="84" height="64.0053" fill="#F2F2F2" />
                <path
                  d="M74 3.256V11.416C74 12.4773 73.1413 13.336 72.08 13.336H63.92C63.144 13.336 62.4427 12.8693 62.1467 12.152C61.848 11.4347 62.0133 10.608 62.5627 10.0587L64.808 7.81333C62.928 6.25333 60.5413 5.336 58 5.336C53.7573 5.336 49.92 7.848 48.2187 11.736C47.632 13.0827 46.072 13.704 44.7093 13.112C43.36 12.5227 42.744 10.9493 43.3333 9.6C45.8827 3.768 51.64 0 58 0C61.984 0 65.7307 1.48 68.6027 4.016L70.7227 1.89333C71.272 1.344 72.096 1.18133 72.816 1.47733C73.5333 1.77333 74 2.47467 74 3.25067V3.256ZM71.2907 18.8933C69.928 18.3093 68.368 18.9253 67.7813 20.2693C66.08 24.1573 62.2427 26.6693 58 26.6693C55.4587 26.6693 53.072 25.752 51.192 24.192L53.4373 21.9467C53.9867 21.3973 54.152 20.5733 53.8533 19.8533C53.5573 19.136 52.856 18.6693 52.08 18.6693H43.92C42.8587 18.6693 42 19.528 42 20.5893V28.7493C42 29.5253 42.4667 30.2267 43.184 30.5227C43.904 30.8187 44.728 30.656 45.2773 30.1067L47.3973 27.9867C50.2667 30.5227 54.0133 32.0027 58 32.0027C64.3627 32.0027 70.12 28.2347 72.6667 22.4027C73.2587 21.0533 72.64 19.4827 71.2907 18.8933ZM32.6667 24.0053C34.0347 24.0053 35.3653 23.9307 36.6667 23.808V16.0053C36.6667 10.2693 38.944 5.072 42.6267 1.23733C39.6187 0.456 36.2453 0.00533333 32.6667 0.00533333C20.1493 0.00266667 10 5.376 10 12.0027C10 18.6293 20.1493 24.0027 32.6667 24.0027V24.0053ZM32.6667 37.3387C36.8533 37.3387 40.6907 36.8293 43.9787 36.0027C43.9627 36.0027 43.9467 36.008 43.928 36.008C42.9973 36.008 42.0587 35.8293 41.16 35.4613C38.552 34.3813 36.8507 31.936 36.696 29.16C35.3813 29.2693 34.0453 29.3387 32.6667 29.3387C23.12 29.3387 15.0027 26.6613 10 22.4053V28.184C10 32.5067 19.6933 37.3387 32.6667 37.3387ZM10 36.8747V41.5147C10 45.8373 19.6933 50.672 32.6667 50.672C45.64 50.672 55.3333 45.84 55.3333 41.5147V36.8747C50.3307 40.432 42.2133 42.6693 32.6667 42.6693C23.12 42.6693 15.0027 40.4347 10 36.8747ZM10 50.208V52.768C10 60.1467 21.4027 64.0053 32.6667 64.0053C43.9307 64.0053 55.3333 60.1467 55.3333 52.768V50.208C50.3307 53.7653 42.2133 56.0053 32.6667 56.0053C23.12 56.0053 15.0027 53.768 10 50.208Z"
                  fill="#003B7A"
                />
              </g>
              <defs>
                <clipPath id="clip0_1391_1606">
                  <rect width="84" height="64.0053" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h3 className="text-bluish font-[500] text-[14px] font-poppins mt-0">
              DataBase
            </h3>
            <p className="text-blackish font-poppins text-[12px]">
              Delve into the essential world of databases with our comprehensive
              Database course. Designed for both beginners and seasoned
              professionals, this course covers the fundamentals and advanced
              topics in database management. You'll learn about different types
              of databases.
            </p>
            <a
              href="#"
              className="font-poppins font-light text-lightblue text-[12px]"
            >
              Learn More
            </a>
          </div>
        </div>{" "}
        <button className="w-[93px] h-[21px] py-[7px] px-[15px] flex uppercase rounded-full text-aquablue bg-transparant mx-[35%] mt-4 border-solid border-[0.5px] border-aquablue items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6.25"
            height="6.94"
            fill="currentColor"
            class="bi bi-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
            />
          </svg>
          <p className="font-poppins text-[7px] pl-1">Explore more</p>
        </button>
      </div>
    </div>
  );
};
export default categories;
