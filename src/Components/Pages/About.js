import React from "react";
import background from "../../assets/background.png";

function About() {
  return (
    <section class="bg-white h-screen dark:bg-gray-800 grid grid-cols-1 justify-center items-center lg:px-20">
      <div class="container px-6 py-8 mx-auto">
        <div class="items-center lg:flex">
          <div class="lg:w-1/2">
            <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
              How works Dhamija Jobs Organization
            </h2>

            <p class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
              Well{" "}
              <a class="font-bold text-blue-600 dark:text-blue-400" href="t">
                Dhamija Jobs
              </a>{" "}
              is a best place for freashers and experienced people. Who know
              coding and many more skills. We help to get their jobs.
            </p>

            <div class="flex items-center mt-6 -mx-2">
              <a
                class="mx-2"
                href="https://www.facebook.com/BigBoyUllash/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <svg
                  class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
                </svg>
              </a>

              <a
                class="mx-2"
                href="https://www.linkedin.com/in/imran-mahmud-ullash-561940235/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkden"
              >
                <svg
                  class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
                </svg>
              </a>

              <a
                class="mx-2"
                href="https://github.com/ullash4"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <svg
                  class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </a>
            </div>
          </div>

          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <div class="flex items-center justify-center lg:justify-end">
              <div class="max-w-lg">
                <img
                  class="object-cover object-center w-full h-64 rounded-md "
                  src={background}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="md:flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg md:h-48 shadow-xl  md:flex-row hidden">
        <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 ">
          <div class="px-6 py-6 md:px-8 md:py-0">
            <h2 class="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
              Sign Up For{" "}
              <span class="text-blue-600 dark:text-blue-400 md:text-blue-300">
                Jobs
              </span>{" "}
              Updates
            </h2>

            <p class="mt-2 text-sm text-white ">
              Subscribe Dhamija Jobs to get notifications to your email
            </p>
          </div>
        </div>

        <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
          <form>
            <div class="flex flex-col p-1 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                class="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                type="text"
                name="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />

              <button class="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}

export default About;
