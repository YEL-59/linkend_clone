import React from "react";
import profile from "../../assets/background/hacker.jpg";
function Home() {
  return (
    <div className="w-11/12 mx-auto  flex ">
      <div className="w-3/12 ">
        <div class="border border-gray-300 rounded bg-white">
          <div class="h-16 rounded-t bg-gradient-to-r from-green-400 to-black-500"></div>

          <div class="text-center mb-4">
            <a href="#">
              <div class="bg-white w-20 h-18 m-auto rounded-full p-0.5 transform -translate-y-8">
                <img
                  src={profile}
                  alt="it's me tofayel"
                  class="w-20 h-20  rounded-full"
                />
              </div>

              <h2 class="text-xl hover:underline">Tofayel islam</h2>
            </a>

            <p class="text-gray-400 text-sm mt-1">
              Software Developer at Amromed LLC
            </p>
          </div>

          <div class="border-t border-b border-gray-400 text-sm">
            <a
              href="#"
              class="text-gray-600 flex justify-between items-center my-1 p-1 hover:bg-gray-300"
            >
              <p>
                Connections <br />
                <span class="text-black">Impression of your posts</span>
              </p>
              <span class="text-blue-600">598</span>
            </a>

            <a
              href="#"
              class="text-gray-600 flex justify-between items-center my-1 p-1 hover:bg-gray-300"
            >
              <span>Who viewed your profile</span>
              <span class="text-blue-600">109</span>
            </a>

            <a
              href="#"
              class="block text-gray-600  my-1 p-1 hover:bg-gray-300 hover:underline"
            >
              <span>Access exclusive tools & insights</span> <br />
              <span class="text-bold text-black hover:text-blue-700 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  class="mercado-match mr-1"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                    fill="#f8c77e"
                  ></path>
                  <path
                    d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                    fill="#e7a33e"
                  ></path>
                </svg>
                Try Premium Free for 1 Month
              </span>
            </a>
          </div>

          <a
            href="#"
            class="h-8 py-6 px-2 rounded-b flex items-center hover:bg-gray-300"
          >
            <i class="fas fa-bookmark mr-2 text-gray-700"></i>
            My items
          </a>
        </div>
        <div class="recents sticky top-20 my-2 pt-2 border border-gray-300 rounded bg-white">
          <p class="text-black text-sm pl-2">Recent</p>

          <a
            href="#"
            class=" flex items-center text-gray-600 py-0.5 px-2 hover:text-black hover:bg-gray-300"
          >
            <span class="mr-4 text-xl font-bold">#</span>
            <span class=" text-sm">Web_Challenge_day-01</span>
          </a>

          <a
            href="#"
            class=" flex items-center text-gray-600 py-0.5 px-2 hover:text-black hover:bg-gray-300"
          >
            <span class="mr-4 text-xl font-bold">#</span>
            <span class=" text-sm">Google's calls you</span>
          </a>

          <a
            href="#"
            class=" flex items-center text-gray-600 py-0.5 px-2 hover:text-black hover:bg-gray-300"
          >
            <span class="mr-4 text-xl font-bold">#</span>
            <span class=" text-sm">careers</span>
          </a>

          <a
            href="#"
            class="text-blue-500 text-sm flex justify-between items-center py-0 5 px-2 hover:underline hover:text-blue-700"
          >
            Groups
          </a>

          <a
            href="#"
            class="text-blue-500 text-sm flex justify-between items-center py-0 5 px-2  hover:text-blue-700"
          >
            <span class="hover:underline">Events</span>
            <span class="text-2xl text-gray-500 rounded-full inline-block w-6 h-6 flex justify-center items-center pb-1.5 hover:no-underline hover:bg-gray-300">
              +
            </span>
          </a>

          <a
            href="#"
            class="text-blue-500 text-sm flex justify-between items-center py-0 5 px-2 hover:underline hover:text-blue-700"
          >
            Followed Hashtags
          </a>

          <a
            href="#"
            class=" flex items-center text-gray-600 py-0.5 px-2 hover:text-black hover:bg-gray-300"
          >
            <span class="mr-4 text-xl font-bold">#</span>
            <span class=" text-sm">Always Programing</span>
          </a>

          <a
            href="#"
            class=" flex items-center text-gray-600 py-0.5 px-2 hover:text-black hover:bg-gray-300"
          >
            <span class="mr-4 text-xl font-bold">#</span>
            <span class=" text-sm">Always Programing </span>
          </a>

          <a
            href="#"
            class=" flex items-center text-gray-600 py-0.5 px-2 hover:text-black hover:bg-gray-300"
          >
            <span class="mr-4 text-xl font-bold">#</span>
            <span class=" text-sm"> Die or programing</span>
          </a>

          <a
            href="#"
            class="block border-t border-gray-300 text-gray-600 py-2 px-2 text-sm text-center rounded-b hover:text-black hover:bg-gray-300"
          >
            Discover more
          </a>
        </div>
      </div>
      <div class="w-6/12 mx-2">
        <form class="bg-white p-2 border border-gray-300 rounded">
         
		 <div className="flex gap-3  items-center">
			<div>
				<img src={profile} className="h-16 w-16 rounded-full" alt="" />
				
			</div>
		     <div>
			 <input type="text" placeholder="Talk to your network about your interests" class="bg-transparent border rounded-3xl w-96 p-3 outline-none hover:placeholder-gray-500 "/>

			 </div>
		 </div>

          <div class="py-2 flex justify-between items-center">
            <button class="py-3 px-2 rounded flex items-center hover:bg-gray-200">
              <span class="font-bold text-gray-600">Photo</span>
            </button>

            <button class="py-3 px-2 rounded flex items-center hover:bg-gray-200">
              <span class="font-bold text-gray-600">Video</span>
            </button>

            <button class="py-3 px-2 rounded flex items-center hover:bg-gray-200">
              <span class="font-bold text-gray-600">Event</span>
            </button>

            <button class="py-3 px-2 rounded flex items-center hover:bg-gray-200">
              <span class="font-bold text-gray-600">Write article</span>
            </button>
          </div>
        </form>

        <button class="outline-none w-full h-8 flex items-center text-xs">
          <div class="h-0.5 w-11/12 bg-gray-300"></div>
          <p class=" w-3/12 text-right font-light">
            Sort by:
            <span class="font-bold">Top</span>
          </p>
        </button>

        <article class="">
          <section class="post bg-white py-2 my-2 border rounded">
            <div class=" p-2 flex items-start">
              <a href="#" class="w-12 h-12 rounded-full mr-2">
                <img
                  src={profile}
className="w-12 h-12  rounded-full"
                  alt="image"
                />
              </a>

              <a href="#">
                <h3 class="flex items-center">
                  <span class="text-gray-700 font-bold hover:text-blue-500 hover:underline ">
                    Tofayel islam
                  </span>
                  <span class="w-1 h-1  mx-1.5 bg-gray-600 rounded-full self-center"></span>
                  <span class="text-gray-500 font-light">Following</span>
                </h3>

                <p class="text-sm text-gray-500">
                  Founder and ceo at google
                </p>

                <p class="time text-sm text-gray-500 flex items-center">
                  <span>1d</span>
                  <span class="w-1 h-1  mx-1.5 bg-gray-600 rounded-full self-center"></span>
                  <i class="fas fa-globe-asia text-lg"></i>
                </p>
              </a>

              <button class="dots w-7 h-7 flex justify-center items-center rounded-full hover:bg-gray-200">
                <span class="w-1 h-1 mr-0.5 bg-gray-600 rounded-full"></span>
                <span class="w-1 h-1 mr-0.5 bg-gray-600 rounded-full"></span>
                <span class="w-1 h-1 mr-0.5 bg-gray-600 rounded-full"></span>
              </button>
            </div>

            <div class="px-2">
              <p class="py-2">Checkout my new photos from Melbourne City</p>

              <a href="#" class="text-blue-600 hover:underline"></a>
            </div>

            <img
              src="https://pbs.twimg.com/media/FY1ls8BUcAAiZSb.jpg"
              alt="amromedllc"
              class="w-full h-50 my-2"
            />

            <div class="mx-3 px-2 h-8 m-auto border-b border-gray-300">
              <a href="#" class="h-full flex items-center">
                <i class="fas fa-thumbs-up mx-0.5 text-xs text-blue-500"></i>
                <i class="fas fa-heart mx-0.5 text-xs text-red-500"></i>

                <span class="count text-xs mb-0.5 ml-2 hover:text-blue-500 hover:underline">
                  105
                </span>
              </a>
            </div>

            <div class="mt-1 mx-3 flex items-center">
              <button class="flex  outline-none rounded py-2 px-2  text-gray-600 hover:bg-gray-200">
                <i class="far fa-thumbs-up text-xl mr-1.5"></i>
                <span class="mt-0.25">Like </span>
              </button>

              <button class="flex  outline-none rounded py-2 px-2  text-gray-600 hover:bg-gray-200">
                <i class="far fa-comment-dots text-xl mr-1.5"></i>
                <span class="mt-0.25">Comment</span>
              </button>

              <button class="flex  outline-none rounded py-2 px-2  text-gray-600 hover:bg-gray-200">
                <i class="fas fa-share text-xl mr-1.5"></i>
                <span class="mt-0.25">Share</span>
              </button>

              <button class="flex  outline-none rounded py-2 px-2  text-gray-600 hover:bg-gray-200">
                <i class="fas fa-paper-plane text-xl mr-1.5"></i>
                <span class="mt-0.25">Send</span>
              </button>
            </div>
          </section>
        </article>
        <article class="">
          <section class="post bg-white py-2 my-2 border rounded">
            <div class=" p-2 flex items-start">
              <a href="#" class="w-12 h-12 rounded-full mr-2">
                <img
                  src={profile}
className="w-12 h-12  rounded-full"
                  alt="image"
                />
              </a>

              <a href="#">
                <h3 class="flex items-center">
                  <span class="text-gray-700 font-bold hover:text-blue-500 hover:underline ">
                    Tofayel islam
                  </span>
                  <span class="w-1 h-1  mx-1.5 bg-gray-600 rounded-full self-center"></span>
                  <span class="text-gray-500 font-light">Following</span>
                </h3>

                <p class="text-sm text-gray-500">
                  Founder and ceo at google
                </p>

                <p class="time text-sm text-gray-500 flex items-center">
                  <span>1d</span>
                  <span class="w-1 h-1  mx-1.5 bg-gray-600 rounded-full self-center"></span>
                  <i class="fas fa-globe-asia text-lg"></i>
                </p>
              </a>

              <button class="dots w-7 h-7 flex justify-center items-center rounded-full hover:bg-gray-200">
                <span class="w-1 h-1 mr-0.5 bg-gray-600 rounded-full"></span>
                <span class="w-1 h-1 mr-0.5 bg-gray-600 rounded-full"></span>
                <span class="w-1 h-1 mr-0.5 bg-gray-600 rounded-full"></span>
              </button>
            </div>

            <div class="px-2">
              <p class="py-2">Checkout my new photos from Melbourne City</p>

              <a href="#" class="text-blue-600 hover:underline"></a>
            </div>

            <img
              src="https://pbs.twimg.com/media/FY1ls8BUcAAiZSb.jpg"
              alt="amromedllc"
              class="w-full h-50 my-2"
            />

            <div class="mx-3 px-2 h-8 m-auto border-b border-gray-300">
              <a href="#" class="h-full flex items-center">
                <i class="fas fa-thumbs-up mx-0.5 text-xs text-blue-500"></i>
                <i class="fas fa-heart mx-0.5 text-xs text-red-500"></i>

                <span class="count text-xs mb-0.5 ml-2 hover:text-blue-500 hover:underline">
                  105
                </span>
              </a>
            </div>

            <div class="mt-1 mx-3 flex items-center">
              <button class="flex  outline-none rounded py-2 px-2  text-gray-600 hover:bg-gray-200">
                <i class="far fa-thumbs-up text-xl mr-1.5"></i>
                <span class="mt-0.25">Like </span>
              </button>

              <button class="flex  outline-none rounded py-2 px-2  text-gray-600 hover:bg-gray-200">
                <i class="far fa-comment-dots text-xl mr-1.5"></i>
                <span class="mt-0.25">Comment</span>
              </button>

              <button class="flex  outline-none rounded py-2 px-2  text-gray-600 hover:bg-gray-200">
                <i class="fas fa-share text-xl mr-1.5"></i>
                <span class="mt-0.25">Share</span>
              </button>

              <button class="flex  outline-none rounded py-2 px-2  text-gray-600 hover:bg-gray-200">
                <i class="fas fa-paper-plane text-xl mr-1.5"></i>
                <span class="mt-0.25">Send</span>
              </button>
            </div>
          </section>
        </article>
      </div>
      <div class=" w-4/12 h-14 relative">
        <div class="border border-gray-300 rounded bg-white p-2">
          <div class="flex justify-between items-center mb-2">
            <h2 class="text-xl">Add to your feed</h2>
            <button class="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                class="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
              </svg>
            </button>
          </div>

          <div class="flex flex-col">
            <div class="rec-profile flex justify-between items-center my-1">
              <div class="flex justify-between">
                <a href="#" class="rounded-full w-12 h-12 mr-2">
                  <img
                    src={profile}
                    alt="Avatar"
                    class="w-12 h-12 rounded-full"
                  />
                </a>
                <a href="#">
                  <h2>Tofayel islam</h2>
                  <p class="text-gray-400 text-sm">Vice Chairman</p>
                  <p class="text-gray-400 text-sm">google Group</p>
                </a>
              </div>

              <button class="border-2 border-blue-500 py-0 5 px-2 rounded-3xl text-blue-600 font-bold  hover:bg-blue-100">
                <i class="fas fa-plus"></i> Follow
              </button>
            </div>

            <div class="rec-profile flex justify-between items-center my-1">
              <div class="flex justify-between">
                <a href="#" class="rounded-full w-12 h-12 mr-2">
                <img
                    src={profile}
                    alt="Avatar"
                    class="w-12 h-12 rounded-full"
                  />
                </a>
                <a href="#">
                  <h2>Tofayel islam</h2>
                  <p class="text-gray-400 text-sm">CTO</p>
                  <p class="text-gray-400 text-sm">google Group</p>
                </a>
              </div>

              <button class="border-2 border-blue-500 py-0 5 px-2 rounded-3xl text-blue-600 font-bold  hover:bg-blue-100">
                <i class="fas fa-plus"></i> Follow
              </button>
            </div>
          </div>

          <a href="#" class="inline-block mt-1 text-blue-600 hover:bg-blue-100">
            View all recommendations
          </a>
        </div>

        <div class="border border-gray-300 rounded bg-white py-2 my-2">
          <div class=" flex justify-between items-center px-2 mb-2">
            <h2 class="text-xl">Today's most viewed courses</h2>
            <button class="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                class="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
              </svg>
            </button>
          </div>

          <div class="flex flex-col">
            <a href="#" class="py-1 px-2 hover:bg-gray-300">
              <h3 class="font-medium">
                1. The Six Morning Habits of High Perfor...
              </h3>
              <p class="text-sm text-gray-500 pl-4">
                Pete Mockaitis | How to Be Awes...
              </p>
            </a>

            <a href="#" class="py-1 px-2 hover:bg-gray-300">
              <h3 class="font-medium">2. Unconscious Bias</h3>
              <p class="text-sm text-gray-500 pl-4">Stacey Gordon</p>
            </a>

            <a href="#" class="py-1 px-2 hover:bg-gray-300">
              <h3 class="font-medium">
                3. Critical Thinking for Better Judgement...
              </h3>
              <p class="text-sm text-gray-500 pl-4">Becki Saltzman</p>
            </a>
          </div>

          <a
            href="#"
            class="inline-block ml-2 mt-1 text-blue-600 hover:bg-blue-100"
          >
            Show more on LinkedIn Learning
          </a>
        </div>

        <footer class=" p-2 text-sm text-center text-gray-700">
          <div class="flex flex-wrap justify-evenly items-center">
            <a href="#" class="m-1 p-0.5 hover:underline hover:text-blue-500">
              About
            </a>

            <a href="#" class="m-1 p-0.5 hover:underline hover:text-blue-500">
              Accessibility
            </a>

            <a href="#" class="m-1 p-0.5 hover:underline hover:text-blue-500">
              Help Center
            </a>

            <a href="#" class="m-1 p-0.5 hover:underline hover:text-blue-500">
              Privacy & Terms <i class="fas fa-angle-down"></i>{" "}
            </a>

            <a href="#" class="m-1 p-0.5 hover:underline hover:text-blue-500">
              Ad Choices
            </a>

            <a href="#" class="m-1 p-0.5 hover:underline hover:text-blue-500">
              Advertising
            </a>

            <a href="#" class="m-1 p-0.5 hover:underline hover:text-blue-500">
              Business Services <i class="fas fa-angle-down"></i>{" "}
            </a>

            <a href="#" class="m-1 p-0.5 hover:underline hover:text-blue-500">
              Get the LinkedIn app
            </a>

            <a href="#" class="m-1 p-0.5 hover:underline hover:text-blue-500">
              More
            </a>
          </div>

          <p class="my-2">
            <span class="text-blue-500 font-bold">Linked</span>
            <i class="fab fa-linkedin text-blue-600"></i> LinkedIn Corporation
            &copy; 2022
          </p>
        </footer>
      </div>
     
    </div>
  );
}

export default Home;
